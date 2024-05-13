from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from openai import OpenAI
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

conversation_history = []

def generate_initial_story(topic, character, word_list):

    # Call the chatGPT API
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
   			{"role": "system", "content": "act as a famous children's english storybook author."},
            {"role": "system", "content": "스토리는 단어 리스트에 있는 단어를 포함한다. 스토리를 작성하고, 스토리를 이어가기 위해 간단한 질문을 제시하고 a/b/c 방식으로 답변 가능하도록 한다. 스토리는 답변에 따라 바뀐다. 사용자가 질문에 답할 때까지 기다린다. 질문에 답을 하면, 스토리를 이어간다. 이 단계를 반복하고 5번 반복 후에 해피엔딩으로 끝낸다. 각 페이지는 약 100개의 단어로 이루어진다. 각 페이지는 그 페이지를 대표하는 일러스트를 위한 프롬프트 텍스트를 포함하고 있다. 스토리의 시작은 'Once upon a time'으로 한다."},
            {"role": "user", "content": f"1. 주제 : ${topic}\n2. 캐릭터 : ${character}\n3. 단어 리스트 : ${word_list}\n"},
        ],
        temperature=0.8,
        max_tokens=2048
    )

    message_result = response.choices[0].message.content
    conversation_history.append(message_result)
    return message_result

def generate_story(topic, character, word_list, user_choice):

    # Call the chatGPT API
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
   			{"role": "system", "content": "act as a famous children's english storybook author."},
            {"role": "system", "content": "스토리는 단어 리스트에 있는 단어를 포함한다. 스토리를 작성하고, 스토리를 이어가기 위해 간단한 질문을 제시하고 a/b/c 방식으로 답변 가능하도록 한다. 스토리는 답변에 따라 바뀐다. 사용자가 질문에 답할 때까지 기다린다. 질문에 답을 하면, 스토리를 이어간다. 이 단계를 반복하고 5번 반복 후에 해피엔딩으로 끝낸다. 각 페이지는 약 100개의 단어로 이루어진다. 각 페이지는 그 페이지를 대표하는 일러스트를 위한 프롬프트 텍스트를 포함하고 있다. 스토리의 시작은 'Once upon a time'으로 한다."},
            {"role": "user", "content": f"1. 주제 : ${topic}\n2. 캐릭터 : ${character}\n3. 단어 리스트 : ${word_list}\n"},
            {"role": "user", "content": f"유저 선택 : ${user_choice}\n"},
            {"role": "assistant", "content": conversation_history[-1]},
        ],
        temperature=0.8,
        max_tokens=2048
    )

    message_result = response.choices[0].message.content
    conversation_history.append(message_result)
    return message_result

@app.route("/api/story", methods=["POST"])
def StoryMaker():
    input = request.get_json()
    
    # request body 값
    topic = input["topic"]
    character = input["character"]
    word_list = input["word_list"]
    user_choice = input["user_choice"]

    if user_choice == "":
        message_result = generate_initial_story(topic, character, word_list)
    else:
        message_result = generate_story(topic, character, word_list, user_choice)
    
    print(message_result)
    return jsonify({"result" : message_result})


@app.route("/api/quiz", methods=["POST"])
def QuizMaker():	
    input = request.get_json()
    
    # request body 값
    word_list = input["word_list"]

    # Call the chatGPT API
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
   			{"role": "system", "content": "act as a children's english word quiz creator."},
            {"role": "system", "content": "퀴즈는 단어 리스트에 있는 단어를 포함한다. 퀴즈를 작성하고, a/b/c 방식으로 답변 가능하도록 한다. 사용자가 질문에 답할 때까지 기다린다. 질문에 답을 하면, 퀴즈를 이어간다. 이 단계를 반복하고 단어 리스트에 있는 단어의 개수만큼 반복 후에 퀴즈를 끝낸다."},
            {"role": "user", "content": f"단어 리스트 : ${word_list}\n"},
        ],
        temperature=0,
        max_tokens=2048
    )
    
    message_result = response.choices[0].message.content
    print(message_result)
    return jsonify({"result" : message_result})

if __name__ == '__main__':
    app.run(host = '127.0.0.1', debug=True, port=5000)



# @app.route("/")
# def home():
#     return "This is Home"

# @app.route("/api/test")
# def Test():
#     response = client.chat.completions.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {"role": "system", "content": "act as a famous children's english storybook author."},
#             {"role": "system", "content": "스토리는 단어 리스트에 있는 단어를 포함한다. 총 5개의 페이지가 있고, 해피엔딩으로 끝낸다. 각 페이지는 약 100개의 단어로 이루어진다. 스토리의 시작은 'Once upon a time'으로 한다."},
#         ]
#     )

#     message_result = response.choices[0].message.content
#     print(message_result)
#     return message_result
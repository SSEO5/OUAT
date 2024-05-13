import { InputField, Navbar, CustomButton } from "../components";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

// const API = axios.create({
// 	baseURL: "http://localhost:5000",
// 	headers: {
// 		"Content-type": "application/json",
// 	},
// });

// export const fetchStory = async (input) => {
// 	const { topic, character, word_list, user_choice } = input;

// 	const requestBody = {
// 		topic,
// 		character,
// 		word_list,
// 		user_choice,
// 	};

// 	try {
// 		const response = await API.post("/api/story", requestBody);
// 		if (response.status === 200) {
// 			alert("스토리가 성공적으로 생성되었습니다.");
// 			return response.data.result;
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export default function StoryPage() {
	let [topic, setTopic] = useState("");
	let [character, setCharacter] = useState("");
	let [wordList, setWordList] = useState("");
	let [user_choice, setUserChoice] = useState("");

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	fetchStory({ topic, character, wordList, user_choice });
	// };

	return (
		<>
			<Navbar />
			<Container1>
				<InputField
					children="주제"
					type="text"
					value={topic}
					onChange={(e) => {
						setTopic(e.target.value);
					}}
					placeholder="ex.비 오는 날"
				/>
				<InputField
					children="캐릭터"
					type="text"
					value={character}
					onChange={(e) => {
						setCharacter(e.target.value);
					}}
					placeholder="ex. 소녀"
				/>
				<InputField
					children="단어 리스트"
					type="text"
					value={wordList}
					onChange={(e) => {
						setWordList(e.target.value);
					}}
					placeholder="ex. umbrella, blue, rainbow, sunny, bunny"
				/>
				<CustomButton
					children="스토리 생성하기"
					onClick={() => {}}
					width="150"
				/>
			</Container1>
			<Container2>
				<div className="story">
					As Soyeon sat beside the fireplace, the bunny hopped over to
					her and nuzzled against her leg. Then, to Soyeon's surprise,
					it leaned in close and whispered in a soft, gentle voice,
					"Thank you for being my friend." <br />
					<br />
					Soyeon's eyes widened in astonishment. She couldn't believe
					that the bunny could speak! "You're welcome," she whispered
					back, feeling a warm connection with her new furry friend.{" "}
					<br />
					<br />
					Just then, a beam of sunlight streamed through the window,
					illuminating the room with a golden glow. Soyeon smiled,
					feeling grateful for the magical moment she shared with the
					bunny on this rainy day. <br />
					<br />
					<br />
					What does Soyeon and the bunny decide to do next?
				</div>
				{/* <Img src="/dalle.webp" alt="dalle-img"></Img> */}
				<div className="selects">
					<CustomButton width="350">A. Have a tea party</CustomButton>
					<CustomButton width="350">
						B. Explore the garden
					</CustomButton>
					<CustomButton width="350">
						C. Paint a rainbow on the wall
					</CustomButton>
				</div>
				<div className="prev-next">
					<CustomButton>이전</CustomButton>
					<CustomButton>다음</CustomButton>
				</div>
			</Container2>
		</>
	);
}

const Img = styled.img`
	width: 40%;
	display: flex;
	margin: auto;
	padding: 10px;
`;

const Container1 = styled.div`
	width: 30%;
	height: 350px;
	margin: auto;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container2 = styled.div`
	border: 2px solid var(--color-main);
	width: 60%;
	padding: 50px;
	gap: 50px;
	margin: auto;
	margin-top: 100px;
	margin-bottom: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;

	.story {
		color: #fff;
		background-color: var(--color-main);
		padding: 30px;
		font-weight: bold;
		border-radius: 10px;
		font-size: 20px;
	}

	.selects {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.prev-next {
		display: flex;
		gap: 450px;
	}
`;

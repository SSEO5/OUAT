import { Navbar } from "../components";
import styled from "styled-components";
import { useState } from "react";
import { InputField, CustomButton } from "../components";

export default function QuizPage() {
	let [wordList, setWordList] = useState([]);

	return (
		<>
			<Navbar />
			<Container1>
				<InputField
					children="단어 리스트"
					type="text"
					value={wordList}
					onChange={(e) => {
						setWordList(e.target.value);
					}}
					placeholder="ex. cat, apple, book, blue, read, sunny, tree, .."
				/>
				<CustomButton
					children="퀴즈 생성하기"
					onClick={() => {}}
					width="150"
				/>
			</Container1>
			<Container2>
				<div className="question">
					Q. What do we use to keep dry when it's raining?
				</div>
				<div className="answers">
					<CustomButton width="350">A. Umbrella</CustomButton>
					<CustomButton width="350">B. Blue</CustomButton>
					<CustomButton width="350">C. Rainbow</CustomButton>
				</div>
				<div className="prev-next">
					<CustomButton width="80">이전</CustomButton>
					<CustomButton width="80">다음</CustomButton>
				</div>
			</Container2>
		</>
	);
}

const Container1 = styled.div`
	width: 30%;
	height: 200px;
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
	margin-top: 15px;
	margin-bottom: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;

	.question {
		color: #fff;
		background-color: var(--color-main);
		padding: 30px;
		font-weight: bold;
		border-radius: 10px;
	}

	.answers {
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

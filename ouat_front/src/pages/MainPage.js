import { Navbar } from "../components";
import styled from "styled-components";

export default function MainPage() {
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex" }}>
				<BookShelf
					src="/ouat_bookshelf.svg"
					alt="bookshelf"
				></BookShelf>
				<div>
					<Img src="/ouat_book1.svg" alt="book1"></Img>
					<Line />
					<Img src="/ouat_book2.svg" alt="book2"></Img>
					<Line />
				</div>
			</div>
		</div>
	);
}

const BookShelf = styled.img`
	width: 20%;
	border-right: 1px solid var(--color-main);
`;

const Img = styled.img`
	width: 80%;
	height: 40%;
	display: flex;
	margin: auto;
	padding: 10px;
`;

const Line = styled.div`
	width: 85%;
	border-radius: 50px;
	border: 3px solid #d9d9d9;
	display: flex;
	margin: auto;
`;

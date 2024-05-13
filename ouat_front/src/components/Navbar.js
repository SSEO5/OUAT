import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
	return (
		<Header>
			<img src="/ouat_title.svg" alt="title" />
			<div className="links">
				<Link to="/" className="link">
					Home
				</Link>
				<Link to="/main" className="link">
					Main
				</Link>
				<Link to="/story" className="link">
					Story
				</Link>
				<Link to="/quiz" className="link">
					Quiz
				</Link>
			</div>
		</Header>
	);
}

const Header = styled.div`
	width: 100%;
	height: 80px;
	border-bottom: 2px solid var(--color-main);
	display: flex;
	justify-content: space-between;
	padding: 10px 0px 5px 20px;

	.links {
		padding-right: 80px;
		display: flex;
		align-items: center;
		gap: 20px;
		font-size: 30px;
		font-weight: 500;

		.link {
			text-decoration: none;
			color: var(--color-main);
			font-size: 20px;
			padding: 15px 10px;
			transition: all 0.3s ease;
			border-radius: 50%;
		}

		:hover {
			color: white;
			background-color: var(--color-main);
			border-radius: 30%;
		}
	}
`;

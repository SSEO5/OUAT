import styled from "styled-components";

export default function CustomButton({ children, onClick, width }) {
	return (
		<Button
			onClick={onClick}
			style={{
				width: `${width}px`,
			}}
		>
			{children}
		</Button>
	);
}

const Button = styled.button`
	padding: 10px;
	margin-top: 20px;
	color: var(--color-main);
	background-color: #fff;
	border: 2px solid var(--color-main);
	border-radius: 50px;
	font-weight: bold;

	&:hover {
		color: #fff;
		background-color: var(--color-main);
	}
`;

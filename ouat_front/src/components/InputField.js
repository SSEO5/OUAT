import styled from "styled-components";

export default function InputField({
	children,
	type,
	value,
	onChange,
	placeholder,
}) {
	return (
		<InputDiv>
			<label>
				<span>* </span>
				{children}
			</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></input>
		</InputDiv>
	);
}

const InputDiv = styled.div`
	width: 100%;
	margin: 20px auto;
	position: relative;

	label {
		display: inline-block;
		position: absolute;
		top: -5px;
		left: 14px;
		padding: 10px;
		background: white;
		font-size: 14px;
		color: #555;
		font-weight: bold;
	}

	span {
		color: var(--color-main);
		vertical-align: -1px;
	}

	input {
		width: 100%;
		border: 2px solid var(--color-main);
		font-size: 1rem;
		line-height: 2;
		letter-spacing: -0.04rem;
		border-radius: 8px;
		padding: 16px;
		margin-top: 12px;

		&:focus {
			outline: none;
		}
	}

	::placeholder {
		color: #d9d9d9;
	}
`;

import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function CustomCursor() {
	const cursorRef = useRef(null);

	const updateCursor = (e) => {
		if (cursorRef.current) {
			cursorRef.current.style.left = `${e.pageX}px`;
			cursorRef.current.style.top = `${e.pageY}px`;
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateCursor);
		window.addEventListener("scroll", updateCursor);
		return () => {
			window.removeEventListener("mousemove", updateCursor);
			window.removeEventListener("scroll", updateCursor);
		};
	}, []);

	return (
		<Bubble ref={cursorRef}>
			<Bubble className="bubble1"></Bubble>
			<Bubble className="bubble2"></Bubble>
		</Bubble>
	);
}

const Bubble = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	transform: translate(-50%, -50%);
	border: 1px solid var(--color-cursor);
	border-radius: 50%;
	position: absolute;
	z-index: 1000;
	pointer-events: none;
	transition: all 0.3s ease;
	transition-property: background, transform;
	transform-origin: 100% 100%;
	background-image: linear-gradient(
		to bottom,
		rgba(214, 185, 251, 1) 0%,
		rgba(75, 158, 255, 0.2) 50%,
		rgba(175, 212, 255, 1) 100%
	);
	background-size: cover;

	.bubble1 {
		width: 1rem;
		height: 1rem;
		transform: translate(180%, 200%);
	}

	.bubble2 {
		width: 0.5rem;
		height: 0.5rem;
		transform: translate(430%, 200%);
	}
`;

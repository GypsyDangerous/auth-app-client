import styled from "styled-components";

const IconButton = styled.button`
	background: none;
	outline: none;
	border: none;
	border-radius: 50%;
	margin: 0 0.5rem;
	transition: filter 0.25s;
	filter: brightness(0.75);
	cursor: pointer;
	&:hover {
		filter: brightness(.25);
	}
	@media (prefers-color-scheme: dark) {
		filter: brightness(1.25);
		&:hover {
			filter: brightness(2);
		}
	}
`;

export default IconButton;

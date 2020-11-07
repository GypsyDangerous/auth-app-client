import styled from "styled-components";

const IconButton = styled.button`
	background: none;
	outline: none;
	border: none;
	border-radius: 50%;
	margin: 0 0.5rem;
	transition: filter 0.25s;
	filter: brightness(0.75);
	@media (prefers-color-scheme: dark) {
		filter: brightness(1.25);
		&:hover {
			filter: brightness(2);
		}
	}
	&:hover {
		filter: brightness(.25);
	}
`;

export default IconButton;

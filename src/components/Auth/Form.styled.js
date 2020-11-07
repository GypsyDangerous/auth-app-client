import styled from "styled-components";

const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (prefers-color-scheme: dark) {
		* {
			color: #666 !important;
			border-color: #666 !important;
		}
	}
	& > * {
		width: 100%;
	}
`;

export const Footer = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: #666;
	@media (prefers-color-scheme: dark) {
		color: #aaa;
	}

`;

export const ButtonContainer = styled.div`
	button {
		width: 100%;
	}
	* {
		color: white !important;
	}
	margin: 0.5rem 0;
`;

export default Form;

import styled from "styled-components";

const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (prefers-color-scheme: dark) {
		* {
			color: white !important;
			border-color: white !important;
		}
	}
	& > * {
		width: 100%;
	}
`;

export default Form;

import styled from "styled-components";

const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (prefers-color-scheme: dark) {
		* {
			color: #aaa !important;
			border-color: #aaa !important;
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
`

export default Form;

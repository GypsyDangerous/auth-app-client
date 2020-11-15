import styled from "styled-components";

const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	#standard-weight-helper-text{
		margin-left: 0;
	}
	.Mui-error * {
		color: #f44336 !important;
		border-color: #f44336 !important;
	}
	@media (prefers-color-scheme: dark) {
		* {
			// color: #f44336 !important;
			// border-color: #f44336 !important;
		}
	}
	// :not(.Mui-error),
	// :not(.Mui-error) *,

	//  {
	// 	color: #666 !important;
	// 	border-color: #666 !important;
	// }
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

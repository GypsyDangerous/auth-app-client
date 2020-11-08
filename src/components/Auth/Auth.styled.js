import styled from "styled-components";

const Auth = styled.div`
	border: 1px solid #bdbdbd;
	box-sizing: border-box;
	border-radius: 24px;
	width: 475px;
	padding: 51px 58px;
	// height: 640px;
	h1 {
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.55rem;
		letter-spacing: -0.035em;
		text-align: left;
	}
	p {
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.4rem;
		letter-spacing: -0.035em;
		text-align: left;
	}
`;

export const PlaceHolder = styled.span`
	display: flex;
	align-items: center;
	transform: translateY(-5px);
`

export default Auth;

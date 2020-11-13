import styled from "styled-components";
import {motion} from "framer-motion"

const width="calc(475px - (77px * 2))"
const Auth = styled(motion.div)`
	border: 1px solid #bdbdbd;
	box-sizing: content-box;
	position: relative;
	& > * + * {
		position: absolute;
	}
	& *{
		max-width: ${width};
		box-sizing: border-box;
	}
	border-radius: 24px;
	width: ${width};
	padding: 51px 58px;
	transition: height .25s;
	overflow: hidden;
	height: ${props => props.height ? `${props.height}px` : "100%"};
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

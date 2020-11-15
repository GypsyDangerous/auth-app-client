import { motion } from "framer-motion";
import styled from "styled-components";

export const section = styled(motion.div)`
	border-bottom: 1px solid #bdbdbd;
	padding: 30px 51px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 500px){
		padding: 30px 30px;
		h2:nth-child(2){
			justify-self: end;
			align-self: end;
		}
	}
`;

export const h1 = styled(motion.h1)`
	font-size: 3rem;
	font-weight: 400;
	margin: 0;
	line-height: 49.03px;
`;

export const h2 = styled(motion.h2)`
	font-weight: 300;
	font-size: 18px;
	margin: 0;
`;

export const h3 = styled(motion.h3)`
	font-size: 13px;
	font-style: normal;
	font-weight: 500;
	letter-spacing: -0.035em;
	text-align: left;
	color: #828282;
	margin-bottom: 0;
	margin-right: .5rem;
`;

export const button = styled.button`
	background: none;
	outline: none;
	border: 1px solid #828282;
	color: #828282;
	border-radius: 12px;
	padding: .75rem 2rem;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	letter-spacing: -0.035em;
	text-align: left;
	transition: .25s;
	:hover{
		background: #82828211;
	}
`;

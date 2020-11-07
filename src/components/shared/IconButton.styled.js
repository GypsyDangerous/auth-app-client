import styled from "styled-components"

const IconButton = styled.button`
	background: none;
	outline: none;
	border: none;
	border-radius: 50%;
	margin: 0 .5rem;
	transition: filter .25s;
	filter: brightness(1.5);
	&:hover{
		filter: brightness(2);
	}
`

export default IconButton
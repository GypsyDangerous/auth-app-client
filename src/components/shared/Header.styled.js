import styled from "styled-components"

const Header = styled.div`
	padding: 1rem 3rem;
	@media screen and (max-width: 400px){
		padding: 1rem;
	}
	justify-self: flex-start;
	display: flex;
	justify-content: space-between;
	width: 100%;
`

export default Header
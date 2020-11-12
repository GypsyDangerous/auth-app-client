import StyledHeader from "./Header.styled"
import { ReactComponent as Logo } from "./devchallenges-light.svg";
import { ReactComponent as Light } from "./devchallenges.svg";

const Header = () => {
	return (
		<StyledHeader>
			<Logo/>
			<div></div>
		</StyledHeader>
	);
}

export default Header;

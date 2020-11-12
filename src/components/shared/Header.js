import StyledHeader from "./Header.styled";
import { ReactComponent as Logo } from "./devchallenges-light.svg";
import { ReactComponent as Light } from "./devchallenges.svg";
import { useUser } from "../../contexts/UserContext";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { invertHex } from "../../utils/functions";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from "../../hooks/auth-hook";

const HeaderRight = styled.div`
	position: relative;
	& > div {
		display: flex;
		position: relative;
		align-items: center;
		& > * + * {
			margin-left: 1rem;
		}
	}
`;

const Chevron = styled.div`
	cursor: pointer;
	z-index: 5;
	transition: 0.25s;
	transform-origin: center;
	transform: rotate(${props => (props.open ? "-180deg" : "0deg")});
	height: 24px;
`;

const HeaderProfile = styled(motion.ul)`
	border: 1px solid #bdbdbd;
	border-radius: 12px;
	box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.125);
	height: 175px;
	width: 100%;
	padding: 0.25rem;
	display: flex;
	flex-direction: column;
	oultine: solid;
	position: absolute;
	// left: -10%;
	list-style: none;
	justify-content: space-around;
`;

const itemBackground = "#F2F2F2";

const ProfileItem = styled(motion.li)`
	--bg: ${itemBackground}66;
	color: ${props => (props.warn ? "red" : "inherit")};
	padding: 0.5rem 1rem;
	border-radius: 12px;
	margin: 0.25rem 0;
	transition: 0.25s;
	display: flex;
	align-items: center;
	cursor: pointer;
	&:hover {
		background: var(--bg);
	}
	@media (prefers-color-scheme: dark) {
		--bg: ${invertHex(itemBackground)}66;
	}
`;

const spring = {
	type: "spring",
	stiffness: 200,
	damping: 20,
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const container = {
	hidden: {
		opacity: 0,
		top: "-10%",
		transition: spring,
	},
	visible: {
		opacity: 1,
		top: "100%",
		transition: {
			...spring,
			// when: "beforeChildren",
			staggerChildren: 0.25,
		},
	},
};

const sizes = {
	large: ".75rem",
	medium: ".5rem",
	small: ".25rem",
};

const Space = styled.span`
	display: inline-block;
	margin-left: ${props => sizes[props.size || "small"]};
`;

const Header = () => {
	const { userData } = useUser();
	const { logout } = useAuth();
	const [profileOpen, setProfileOpen] = useState(false);

	useEffect(() => {
		setProfileOpen(prev => prev && !!userData);
	}, [userData]);

	const visible = profileOpen ? "hidden" : "visible";

	return (
		<StyledHeader>
			<Logo />
			{userData ? (
				<HeaderRight>
					<div onClick={() => setProfileOpen(prev => !prev)}>
						<Avatar
							src={`${process.env.REACT_APP_API_URL}/uploads/images${userData?.photo}`}
						/>

						<div>{userData?.username}</div>
						<Chevron open={profileOpen}>
							<KeyboardArrowDownIcon />
						</Chevron>
					</div>
					<HeaderProfile variants={container} initial="hidden" animate={visible}>
						<ProfileItem variants={item}>
							<PersonIcon /> <Space size="medium" /> Profile
						</ProfileItem>
						<ProfileItem variants={item}>
							<SupervisorAccountIcon /> <Space size="medium" /> Group Chat
						</ProfileItem>
						<hr />
						<ProfileItem onClick={logout} variants={item} warn>
							<ExitToAppIcon /> <Space size="medium" /> Logout
						</ProfileItem>
					</HeaderProfile>
				</HeaderRight>
			) : (
				<></>
			)}
		</StyledHeader>
	);
};

export default Header;

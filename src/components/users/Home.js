import HomeComponent from "./Home.styled";
import { Body } from "../Auth/Auth.styled";
import * as styles from "./styles";
import InfoSection from "./InfoSection";
import { useUser } from "../../contexts/UserContext";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Header = styled(styles.h1)`
	margin-bottom: 1rem;
`;

const SubTitle = styled(styles.h2)`
	margin-bottom: 3rem;
`;

const HomeBody = styled(Body)`
	width: 850px;
	@media screen and (max-width: 850px) {
		border-left: none;
		border-right: none;
		border-radius: 0;
	}
	max-width: 100vw;
`;

const headerVariants = {
	start: {
		y: -25,
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.25,
		},
	},
};

const body = {
	start: {
		x: 0,
	},
	end: {
		transition: { staggerChildren: 0.1 },
	},
	leave: {
		x: -1000,
	},
};

const Home = (props) => {
	const { userData } = useUser();

	return (
		<HomeComponent {...props} initial="start" animate="end" exit="leave" variants={body}>
			<Header variants={headerVariants}>Personal Info</Header>
			<SubTitle variants={headerVariants}>Basic info, like your name and photo</SubTitle>
			<HomeBody>
				<styles.section variants={headerVariants}>
					<div>
						<styles.h1>Profile</styles.h1>
						<styles.h3>Some info may be visible to other people</styles.h3>
					</div>
					<div>
						<styles.button>Edit</styles.button>
					</div>
				</styles.section>
				<InfoSection name="Photo" value={userData?.photo} img />
				<InfoSection name="Name" value={userData?.username} />
				<InfoSection name="Bio" value={userData?.bio} placeholder="No Bio..." />
				<InfoSection name="Phone" value={userData?.phone} placeholder="No Phone..." />
				<InfoSection name="Email" value={userData?.email} />
				<InfoSection name="Password" value="*********" />
			</HomeBody>
		</HomeComponent>
	);
};

export default Home;

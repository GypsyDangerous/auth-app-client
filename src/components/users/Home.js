import HomeComponent from "./Home.styled";
import { Body } from "../Auth/Auth.styled";
import * as styles from "./styles";
import InfoSection from "./InfoSection";
import { useUser } from "../../contexts/UserContext";
import styled from "styled-components";

const Header = styled(styles.h1)`
	margin-bottom: 1rem;
`;

const SubTitle = styled(styles.h2)`
	margin-bottom: 3rem;
`;

const HomeBody = styled(Body)`
	width: 850px;
	@media screen and (max-width: 850px){
		border-left: none;
		border-right: none;
		border-radius: 0;
	}
	max-width: 100vw;
`;

const Home = () => {
	const { userData } = useUser();

	return (
		<HomeComponent>
			<Header>Personal Info</Header>
			<SubTitle>Basic info, like your name and photo</SubTitle>
			<HomeBody>
				<styles.section>
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

import HomeComponent from "./Home.styled";
import { Body } from "../Auth/Auth.styled";
import * as styles from "./styles";
import InfoSection from "./InfoSection";
import { useUser } from "../../contexts/UserContext";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useCallback, useReducer, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../shared/FormElements/Button";
const { createApolloFetch } = require("apollo-fetch");

const Fetch = createApolloFetch({
	uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

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

const body = (dir = 1) => ({
	start: {
		x: 1000 * dir,
	},
	end: {
		x: 0,
		transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0.35 },
	},
	leave: {
		// position: "absolute",
		x: 1000 * dir,
		opacity: 0,
		transition: { duration: 0.35 },
	},
});

const Actions = {
	update: "UPDATE"
};

const reducer = (state, action) => {
	switch (action.type) {
		case Actions.update:
			return { ...state, [action.key]: action.value };
		default:
			return state;
	}
};

const Home = props => {
	const { userData } = useUser();
	const [editing, setEditing] = useState(false);
	const [file, setFile] = useState();
	const [formData, dispatch] = useReducer(reducer, {...userData});

	const save = () => {
		if(file){

		}
	}

	return (
		<AnimatePresence exitBeforeEnter>
			{!editing ? (
				<HomeComponent
					{...props}
					initial="start"
					animate="end"
					exit="leave"
					key="info"
					variants={body(1)}
				>
					<Header variants={headerVariants}>Personal Info</Header>
					<SubTitle variants={headerVariants}>
						Basic info, like your name and photo
					</SubTitle>
					<HomeBody>
						<styles.section variants={headerVariants}>
							<div>
								<styles.h1>Profile</styles.h1>
								<styles.h3>Some info may be visible to other people</styles.h3>
							</div>
							<div>
								<styles.button onClick={() => setEditing(prev => !prev)}>
									Edit
								</styles.button>
							</div>
						</styles.section>
						<InfoSection name="Photo" value={userData?.photo} img />
						<InfoSection name="Name" value={userData?.username} />
						<InfoSection name="Bio" value={userData?.bio} placeholder="No Bio..." />
						<InfoSection
							name="Phone"
							value={userData?.phone}
							placeholder="No Phone..."
						/>
						<InfoSection name="Email" value={userData?.email} />
						<InfoSection name="Password" value="*********" />
					</HomeBody>
				</HomeComponent>
			) : (
				<HomeComponent
					{...props}
					initial="start"
					animate="end"
					exit="leave"
					variants={body(-1)}
					key="edit"
				>
					<HomeBody>
						<styles.section variants={headerVariants}>
							<div>
								<styles.h1>Profile</styles.h1>
								<styles.h3>Some info may be visible to other people</styles.h3>
							</div>
							<div>
								<styles.button onClick={() => setEditing(prev => !prev)}>
									Edit
								</styles.button>
							</div>
						</styles.section>
						<InfoSection
							name="Photo"
							file={file}
							setFile={setFile}
							value={formData?.photo}
							img
						/>
						<InfoSection name="Name" value={userData?.username} />
						<InfoSection name="Bio" value={userData?.bio} placeholder="No Bio..." />
						<InfoSection
							name="Phone"
							value={userData?.phone}
							placeholder="No Phone..."
						/>
						<InfoSection name="Email" value={userData?.email} />
						<InfoSection name="Password" value="*********" />
						<styles.section>
							<Button color="primary">Save</Button>
						</styles.section>
					</HomeBody>
				</HomeComponent>
			)}
		</AnimatePresence>
	);
};

export default Home;

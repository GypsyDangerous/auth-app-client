import * as styles from "./styles"
import styled from "styled-components"

const Section = styled(styles.section)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-content: center;
	${styles.h3}{
		margin: 0;
		font-size: initial;
	}
	img{
		border-radius: .25rem;
	}
`

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

const InfoSection = ({name, value, img, placeholder}) => {
	return (
		<Section variants={headerVariants}>
			<styles.h3 >{name}</styles.h3>
			{img ? <img src={`${process.env.REACT_APP_API_URL}/uploads/images${value}`} width="72" alt=""/> : <styles.h2>{value || placeholder}</styles.h2>}
		</Section>
	);
}

export default InfoSection;

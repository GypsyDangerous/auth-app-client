import * as styles from "./styles";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Section = styled(styles.section)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-content: center;
	${styles.h3} {
		margin: 0;
		font-size: initial;
	}
	img {
		border-radius: 0.25rem;
	}
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

const InfoSection = ({ name, value, img, placeholder, setFile }) => {
	const onDrop = useCallback(
		acceptedFiles => {
			console.log(acceptedFiles);
			setFile(acceptedFiles[0]);
			setPreview(URL.createObjectURL(acceptedFiles[0]));
			// Do something with the files
		},
		[setFile]
	);

	const [preview, setPreview] = useState(
		`${process.env.REACT_APP_API_URL}/uploads/images${value}`
	);
	useEffect(() => {
		setPreview(`${process.env.REACT_APP_API_URL}/uploads/images${value}`);
	}, [value]);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	console.log(preview);

	const Img = <img src={preview} width="72" alt="" />;

	return (
		<Section variants={headerVariants}>
			<styles.h3>{name}</styles.h3>
			{img ? (
				!setFile ? (
					Img
				) : (
					<div className="drag-area" {...getRootProps()}>
						<input {...getInputProps()} />
						{Img}
					</div>
				)
			) : (
				<styles.h2>{value || placeholder}</styles.h2>
			)}
		</Section>
	);
};

export default InfoSection;

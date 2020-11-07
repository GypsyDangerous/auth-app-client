import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = ({ value, onInput, id, ...props }) => {
	const [file, setFile] = useState();
	const [previewUrl, setPreviewUrl] = useState();
	const [isValid, setIsValid] = useState(false);

	const filePickerRef = useRef();

	useEffect(() => {
		if (value) {
			setPreviewUrl(value);
			setIsValid(true);
			onInput(id, file, true);
		}
	}, [value, onInput, id, file]);

	useEffect(() => {
		if (!file) {
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}, [file]);

	const pickedHandler = event => {
		let pickedFile = file;
		let fileIsValid = isValid;
		if (event.target.files && event.target.files.length === 1) {
			pickedFile = event.target.files[0];
			setFile(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		} else {
			setIsValid(!!previewUrl);
			fileIsValid = !!previewUrl || isValid;
		}
		props.onInput(props.id, pickedFile, fileIsValid);
	};

	const pickImageHandler = () => {
		filePickerRef.current.click();
	};

	return (
		<div>
			<input
				id={props.id}
				ref={filePickerRef}
				style={{ display: "none" }}
				type="file"
				accept=".jpg,.png,.jpeg"
				onChange={pickedHandler}
			/>
			<div className={`image-upload ${props.center && "center"}`}>
				<div
					onClick={pickImageHandler}
					className="image-upload__preview"
					style={props.style}
				>
					{previewUrl && (
						<img className={props.className} src={previewUrl} alt="Preview" />
					)}
					{!previewUrl && <p>Please pick an image.</p>}
				</div>
			</div>
			{!isValid && <p>{props.errorText}</p>}
		</div>
	);
};

export default ImageUpload;

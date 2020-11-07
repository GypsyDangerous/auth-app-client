import React from "react";
import Button from "./IconButton.styled";

const IconButton = ({ icon: Icon, onClick }) => {
	return <Button onClick={onClick || function () {}}>{Icon && <Icon />}</Button>;
};

export default IconButton;

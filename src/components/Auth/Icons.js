import React from "react";
import IconButton from "../shared/IconButton";
import { ReactComponent as Twitter } from "../shared/Twitter.svg";
import { ReactComponent as Github } from "../shared/Gihub.svg";
import { ReactComponent as Google } from "../shared/Google.svg";
import { ReactComponent as Facebook } from "../shared/Facebook.svg";
const Icons = () => {
	return (
		<div>
			<IconButton icon={Twitter} />
			<IconButton icon={Github} />
			<IconButton icon={Facebook} />
			<IconButton icon={Google} />
		</div>
	);
};

export default Icons;

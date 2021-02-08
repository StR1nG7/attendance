import React, {useState} from "react";

import Instructions from "../components/Instructions";

const InstructionsContainer: React.FC = () => {

	const [isOpen, setIsOPen] = useState(false);

	const handleClick = () => {
		setIsOPen(!isOpen);
	};

	return <Instructions isOpen={isOpen} handleClick={handleClick}/>
};

export default InstructionsContainer;


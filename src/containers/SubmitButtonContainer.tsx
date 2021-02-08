import React from "react";
import {useSelector} from "react-redux";
import {TRootState} from "../reducers";

import '../assets/css/form-submit.css';

import SubmitButton from "../components/SubmitButton";

interface ISubmitButton {
	id: string,
	disabled: boolean
}

const SubmitButtonContainer: React.FC<ISubmitButton> = ({id, disabled}) => {

	const animateButton: string = useSelector((state: TRootState) => state.animateButton);

	return (
		<SubmitButton id={id} disabled={disabled} animateButton={animateButton}/>
	)
};

export default SubmitButtonContainer;


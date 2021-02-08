import React from "react";

interface ISubmitButton {
	id: string,
	disabled: boolean,
	animateButton: string
}

const SubmitButton: React.FC<ISubmitButton> = ({id, disabled, animateButton}) => {

	return (
		<div className="col-12">
			<button type="submit" className="form-submit" disabled={disabled}>
				<span className="form-submit__text">{animateButton == id ? 'Збережено' : 'Зберегти'}</span>
				<svg version="1.1"
						 className={animateButton == id ? "form-submit__icon form-submit__icon--animate" : "form-submit__icon"}
						 x="0px" y="0px" viewBox="0 0 100 100"
						 xmlSpace="preserve">
					<polyline points="3.5,51.5 40.5,82.5 96.7,15.3 "/>
				</svg>
			</button>
		</div>
	)
};

export default SubmitButton;


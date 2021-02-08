import React from "react";

interface IErrorTipProps {
	error: string
}

const ErrorTip: React.FC<IErrorTipProps> = ({error}) => {

	return (
			<div className="item-card__error">
				<span className="item-card__error-arrow"></span>
				<span className="item-card__error-value">
					{error}
				</span>
			</div>
	)
};

export default ErrorTip;


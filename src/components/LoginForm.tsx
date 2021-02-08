import React from "react";

import '../assets/css/loginform.css';

interface IAuthProps {
	values: {
		login: string,
		password: string
	},
	isSubmitting: boolean,
	handleChange: any, // Formik handleChange type
	handleSubmit: () => void,
	errors: string
}

const LoginForm: React.FC<IAuthProps> = ({values, isSubmitting, handleChange, handleSubmit, errors}) => {

	return (
			<form className="login-form" onSubmit={handleSubmit}>
				<input type="text" className="login-form__value" name="login"
							 onChange={handleChange}
							 value={values.login}
				/>
				<input type="password" className="login-form__value" name="password"
							 onChange={handleChange}
							 value={values.password}
				/>
				<div className="login-form__errors">{errors}</div>
				<button type="submit" className="login-form__submit" disabled={isSubmitting}>
					Ввійти
				</button>
			</form>
	)
};

export default LoginForm;

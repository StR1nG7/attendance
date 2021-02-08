import React from "react";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";

import LoginForm from "../components/LoginForm";

import {authThunkCreator, IAuthData} from "../actions/actionCreators";
import {TRootState} from "../reducers";

const LoginFormContainer: React.FC = () => {
	const { isAuth, errors }: IAuthData = useSelector((state: TRootState) => state.authData);

	if (isAuth) return <Redirect to={'/class'} />;

	const dispatch = useDispatch();

	return (
			<Formik
					initialValues={{
						login: '',
						password: ''
					}}

					onSubmit={async values => {
						const logindata = {
							action: 'login',
							...values
						};

						await dispatch(authThunkCreator(logindata));
					}}
			>
				{
					props => {
						const {
							values,
							isSubmitting,
							handleChange,
							handleSubmit
						} = props;

						return <LoginForm values={values} isSubmitting={isSubmitting} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors}/>
					}
				}
			</Formik>
	)
};

export default LoginFormContainer;

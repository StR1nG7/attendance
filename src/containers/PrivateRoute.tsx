import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux";

import {IAuthData} from "../actions/actionCreators";
import {TRootState} from "../reducers";

interface IPrivateRoute {
	path: string,
	component: React.ComponentType
}

const PrivateRoute: React.FC<IPrivateRoute> = ({component: Component, path}) => {

	const { isAuth }: IAuthData = useSelector((state: TRootState) => state.authData);

	return (
			<Route
					path={path}
					render={
						() =>
							isAuth ? <Component /> : <Redirect to='/' />
					}
			/>
	)
};

export default PrivateRoute;

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import Header from "../components/Header";

import {IAuthData, setAuthData} from "../actions/actionCreators";
import {TRootState} from "../reducers";

const HeaderContainer: React.FC = () => {

	const { isAuth, login }: IAuthData = useSelector((state: TRootState) => state.authData);
	const pathname = useLocation().pathname;
	const dispatch = useDispatch();

	const handleLogOutClick = function() {
		dispatch(setAuthData({isAuth: false, login: '', errors: ''}));
		sessionStorage.removeItem('isAuth');
		sessionStorage.removeItem('login');
	};

	return <Header isAuth={isAuth} login={login} pathname={pathname} handleLogOutClick={handleLogOutClick} />;
};

export default HeaderContainer;


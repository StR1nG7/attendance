import {IAuthAction, IAuthData} from "../actions/actionCreators";

const storageIsAuth = sessionStorage.getItem('isAuth');
const storageLogin = sessionStorage.getItem('login');

const authReducer = (state: IAuthData = {isAuth: !!storageIsAuth, login: storageLogin ? storageLogin : "", errors: ""}, action: IAuthAction): object => {
	switch (action.type) {
		case 'SET_AUTH_DATA':
			return {...state, ...action.payload};
		default:
			return state;
	}
};

export {authReducer as authData};

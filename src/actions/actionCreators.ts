import {Dispatch} from "redux";
import {IRowData} from "../containers/App";
import {IStartAnimation} from "../reducers/animateButton";

export interface ISetYearDataAction {
  type: 'SET_YEARS_DATA',
  dataForYearTables: {[key: string]: object}
}

export const getYearsDataThunk = (dispatch: Dispatch<ISetYearDataAction> ) => {
  fetch('http://attendance.stroinova.mk.ua/testapi/yearsdata')
      .then(res => res.json())
      .then(data => dispatch(setYearsData(data)));
};

export const setYearsData = (dataForYearTables = {}): ISetYearDataAction => ({
  type: 'SET_YEARS_DATA',
  dataForYearTables
});


export interface IClassData {
  formYear: string,
  currentUserClass: string,
  firstSemester: IRowData,
  secondSemester: IRowData,
  year: IRowData,
}

export interface IAnimateButtonAction extends IStartAnimation {
  type: 'ANIMATE_BUTTON'
}

const animateButton = (id = ''): IAnimateButtonAction => ({
  type: 'ANIMATE_BUTTON',
  id
});

export interface ISaveClassDataToStateAction {
  type: 'SAVE_CLASS_DATA',
  classData: IClassData
}

const saveClassDataToState = (classData: IClassData): ISaveClassDataToStateAction => ({
  type: 'SAVE_CLASS_DATA',
  classData
});

export const saveClassDataThunkCreator = (classData: IClassData, idOfAnimatedButton: string) => {

  return (dispatch: Dispatch<IAnimateButtonAction | ISaveClassDataToStateAction>) => {
    fetch('http://attendance.stroinova.mk.ua/testapi/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(classData)
    })
        .then(response => {
          if (response.ok) {
            dispatch(animateButton(idOfAnimatedButton));

            setTimeout(function() {
              dispatch(animateButton(''));
            }, 2000);

            dispatch(saveClassDataToState(classData));
          }
        });
  }

};

export interface IAuthData {
  isAuth: boolean,
  login: string,
  errors: string
}

export interface IAuthAction {
  type: 'SET_AUTH_DATA',
  payload: IAuthData
}

export const setAuthData = ({isAuth, login, errors}: IAuthData): IAuthAction => ({
  type: 'SET_AUTH_DATA',
  payload: {
    isAuth,
    login,
    errors
  }
});

export const authThunkCreator = (logindata: {action: string, login: string, password: string}) => {
  return (dispatch: Dispatch<IAuthAction> ) => {
    fetch('http://attendance.stroinova.mk.ua/testapi/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(logindata)
    })
        .then( res => res.json() )
        .then( data => {
          dispatch(setAuthData(data));
          if (data.isAuth && data.login) {
            sessionStorage.setItem('isAuth', data.isAuth);
            sessionStorage.setItem('login', data.login);
          }
        });
  }
};

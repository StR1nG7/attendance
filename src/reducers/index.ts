import {combineReducers} from 'redux';
import {yearsData} from "./yearData";
import {authData} from "./auth";
import {animateButton} from "./animateButton";

const rootReducer = combineReducers({yearsData, authData, animateButton});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;

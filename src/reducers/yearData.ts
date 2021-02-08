import { ISetYearDataAction, ISaveClassDataToStateAction } from "../actions/actionCreators";
import {IRowData, IYearData, IYearsData} from "../containers/App";

type TYearsDataActions = ISetYearDataAction | ISaveClassDataToStateAction;

const yearsDataReducer = (state: IYearsData = {}, action: TYearsDataActions): object => {
	switch (action.type) {
		case 'SET_YEARS_DATA':
			return {...state, ...action.dataForYearTables};
		case 'SAVE_CLASS_DATA':
			const formYear = action.classData.formYear;
			const userClass = action.classData.currentUserClass;
			const firstSemesterData = action.classData.firstSemester;
			const secondSemesterData = action.classData.secondSemester;
			const yearData = action.classData.year;

			let stateCopy = {...state};
			stateCopy[formYear] = {...state[formYear]};

			stateCopy[formYear].firstSemester = {...state[formYear].firstSemester};
			stateCopy[formYear].secondSemester = {...state[formYear].secondSemester};
			stateCopy[formYear].year = {...state[formYear].year};

			const makeDeepCopy = function(period: keyof IYearData) {
				stateCopy[formYear][period]["Всього"] = {...state[formYear][period]["Всього"]};
				stateCopy[formYear][period][userClass] = {...state[formYear][period][userClass]};
			};
			makeDeepCopy("firstSemester");
			makeDeepCopy("secondSemester");
			makeDeepCopy("year");

			const updateTotal = function(period: keyof IYearData, periodData: IRowData) {
				const totalObject = stateCopy[formYear][period]["Всього"];

				let key: keyof IRowData;
				for (key in totalObject) {
					const oldValue = stateCopy[formYear][period][userClass][key] ? +stateCopy[formYear][period][userClass][key] : 0;
					totalObject[key] = +totalObject[key] - oldValue + +periodData[key] ;
				}
			};

			updateTotal("firstSemester", firstSemesterData);
			updateTotal("secondSemester", secondSemesterData);
			updateTotal("year", yearData);

			stateCopy[formYear].firstSemester[userClass] = firstSemesterData;
			stateCopy[formYear].secondSemester[userClass] = secondSemesterData;
			stateCopy[formYear].year[userClass] = yearData;

			return stateCopy;
		default:
			return state;
	}
};

export {yearsDataReducer as yearsData};



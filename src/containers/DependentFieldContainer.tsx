import React, {useEffect} from "react";
import {Field, useFormikContext} from 'formik';

import {IYearData} from "./App";
interface IDependentFieldContainerProps {
	name: string,
	period: keyof IYearData,
	resultValueName: string,
	value: string | number,
	validate: (value: string) => string | undefined
}
const DependentFieldContainer: React.FC<IDependentFieldContainerProps> = (
		{
			name,
			period,
			resultValueName,
			value,
			validate
		}
	) => {

	const { setFieldValue } = useFormikContext();
	const values = useFormikContext().values as IYearData;

	let dependent1;
	let dependent2;
	let dependent3;
	let depsArray: Array<number> = [];
	let dependentValue: number;

	// Calculations
	if (resultValueName == "other") {
		dependent1 = +values[period]["notSeriousReasons"];
		dependent2 = +values[period]["noVisit"];
		dependentValue = dependent1 - dependent2;
		depsArray = [dependent1, dependent2];
	} else if (resultValueName == "total") {
		dependent1 = +values[period]["disease"];
		dependent2 = +values[period]["seriousReasons"];
		dependent3 = +values[period]["notSeriousReasons"];
		dependentValue = dependent1 + dependent2 + dependent3;
		depsArray = [dependent1, dependent2, dependent3];
	}
 	if (period == "year") {
		dependent1 = +values["firstSemester"][resultValueName];
		dependent2 = +values["secondSemester"][resultValueName];
		dependentValue = dependent1 + dependent2;
		depsArray = [dependent1, dependent2];
	}

	useEffect( () => {
		setFieldValue(name, dependentValue);
	}, [...depsArray, setFieldValue, name]);

	return (
			<Field type="text" className="item-card__value" name={name}
						 validate={validate}
						 value={(value === "" || isNaN(+value)) ? "Error" : value}
						 readOnly
			/>
	)
};

export default DependentFieldContainer;

import React, {ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import Chart from "react-apexcharts";

import {chartOptions} from './AdminPage';

import '../assets/css/school-class-page.css';

import YearContainer from "./YearContainer";
import ItemCardFieldset from "./ItemCardFieldset";
import SubmitButtonContainer from "./SubmitButtonContainer";

import {IRowData, IYearData, IYearsData} from "./App";
import {IAuthData, IClassData, saveClassDataThunkCreator} from "../actions/actionCreators";
import {TRootState} from "../reducers";

const SchoolClassPage: React.FC = () => {

	const { login }: IAuthData = useSelector((state: TRootState) => state.authData);
	const yearsData: IYearsData = useSelector((state: TRootState) => state.yearsData);
	const dispatch = useDispatch();

	const dummydata: IRowData = {
		disease: '0',
		seriousReasons: '0',
		notSeriousReasons: '0',
		noVisit: '0',
		other: '0',
		total: '0'
	};
	const yearForms: Array<ReactElement> = [];
	const chartComponents: {[key: string]: Array<ReactElement>} = {};

	let key2: keyof IYearData;
	let chartTitleText: string;

	for (let key in yearsData) {

		const cardData = yearsData[key]; // IYearData
		const firstSemesterData = cardData.firstSemester[login];
		const secondSemesterData = cardData.secondSemester[login];
		const yearData = cardData.year[login];
		const idOfButton = 'button' + key;
		chartComponents[key] = [];

		for (key2 in cardData) {

			switch (key2) {
				case "firstSemester":
					chartTitleText = '1 семестр';
					break;
				case "secondSemester":
					chartTitleText = '2 семестр';
					break;
				case "year":
					chartTitleText = 'Рік';
					break;
			}

			// start push Chart components
			if (firstSemesterData) {
				const _disease = +cardData[key2][login].disease;
				const _seriousReasons = +cardData[key2][login].seriousReasons;
				const _notSeriousReasons = +cardData[key2][login].notSeriousReasons;

				if (_disease != 0 || _seriousReasons != 0 || _notSeriousReasons != 0) {
					chartComponents[key].push(
							<div className="col-12 col-sm-4" key={'chart-'+ key + key2}>
								<Chart
										options={{...chartOptions, title: {...chartOptions.title, text: chartTitleText}}}
										series={[_disease, _seriousReasons, _notSeriousReasons]}
										type="donut"
										width="100%"
								/>
							</div>
					);
				}
			}
			// end push Chart components
		}

		yearForms.unshift(
				<YearContainer key={key} title={key}>

					{
						firstSemesterData &&
            <div className="row chart-row">
							{chartComponents[key]}
            </div>
					}

					<Formik
							initialValues={{
								firstSemester: firstSemesterData ? firstSemesterData : dummydata,
								secondSemester: secondSemesterData ? secondSemesterData : dummydata,
								year: yearData ? yearData : dummydata
							}}

							onSubmit={async values => {

								const data: IClassData = {
									formYear: key,
									currentUserClass: login,
									...values
								};

								await dispatch(saveClassDataThunkCreator(data, idOfButton));

							}}
					>
						{
							props => {
								const {
									values,
									errors,
									isSubmitting,
									handleSubmit
								} = props;

								return (
										<form id={'form' + key} className="row item-card__form" onSubmit={handleSubmit}>
											<ItemCardFieldset
													title="1"
													name="firstSemester"
													color="orange"
													cardData={values.firstSemester}
											/>
											<ItemCardFieldset
													title="2"
													name="secondSemester"
													color="green"
													cardData={values.secondSemester}
											/>
											<ItemCardFieldset
													title="Рік"
													name="year"
													color="red"
													cardData={values.year}
											/>
											<SubmitButtonContainer id={idOfButton} disabled={isSubmitting || Object.keys(errors).length != 0}/>
										</form>
								)
							}
						}
					</Formik>

				</YearContainer>
		)
	}

	return (
			<>
				{yearForms}
			</>
	)
};

export default SchoolClassPage;

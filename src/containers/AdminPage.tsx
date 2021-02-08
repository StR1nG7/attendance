import React from "react";
import {useSelector} from "react-redux";
import Chart from "react-apexcharts";

import YearContainer from "./YearContainer";
import ItemCardTableContainer from "./ItemCardTableContainer";

import {IYearData, IYearsData} from "./App";
import {TRootState} from "../reducers";

export const chartOptions = {
	chart: {
		type: 'donut',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
	},
	plotOptions: {
		pie: {
			customScale: 1,
			expandOnClick: false,
			donut: {
				size: '58%'
			}
		}
	},
	title: {
		align: 'center',
		margin: 5,
		style: {
			fontSize:  '14px',
			fontWeight:  '500',
			fontFamily:  'Roboto, Helvetica, Arial, sans-serif',
			color:  '#263238'
		}
	},
	legend: {
		position: 'bottom',
		offsetY: -5
	},
	dataLabels: {
		enabled: true,
		style: {
			fontWeight: '500',
			colors: ['#fff']
		},
		background: {
			enabled: true,
			foreColor: '#3c4858',
			borderWidth: 0
		},
		dropShadow: {
			enabled: false,
		}
	},
	labels: ['По хворобі', 'З поважних причин', 'Без поважних причин'],
	colors: ['#66bb6a', '#ffa726', '#00cae3'],
	fill: {
		type: 'solid',
	},
	stroke: {
		show: false
	},
	responsive: [{
		breakpoint: 576,
		options: {
			chart: {
				width: '100%',
				offsetX: 0
			},
			legend: {
				width: '100%',
				offsetX: 0
			},
		}
	},
	{
		breakpoint: 768,
		options: {
			chart: {
				width: 270,
				offsetX: -60
			},
			legend: {
				width: 200,
				offsetX: 10
			},
		}
	},
	{
		breakpoint: 992,
		options: {
			chart: {
				width: 290,
				offsetX: -45
			}
		}
	},
	{
		breakpoint: 1200,
		options: {
			chart: {
				width: 350,
				offsetX: -38
			}
		}
	}]
};

const AdminPage: React.FC = () => {

	const yearsData: IYearsData = useSelector((state: TRootState) => state.yearsData);
	const yearsComponents: Array<React.ReactElement> = [];
	const chartComponents: {[key: string]: Array<React.ReactElement>} = {};
	const itemCardTableContainers: {[key: string]: Array<React.ReactElement>} = {};

	let key2: keyof IYearData;
	let chartTitleText: string;
	let itemCardTitle: string;
	let itemCardColor: string;

	for (let key in yearsData) {
			const cardData = yearsData[key]; // IYearData
			const chartFirstSemesterData = cardData.firstSemester["Всього"];
			chartComponents[key] = [];
			itemCardTableContainers[key] = [];

			for (key2 in cardData) {

				switch (key2) {
					case "firstSemester":
						chartTitleText = '1 семестр';
						itemCardTitle = '1';
						itemCardColor = 'orange';
						break;
					case "secondSemester":
						chartTitleText = '2 семестр';
						itemCardTitle = '2';
						itemCardColor = 'green';
						break;
					case "year":
						chartTitleText = itemCardTitle = 'Рік';
						itemCardColor = 'red';
						break;
				}

				// start push Chart components
				if (chartFirstSemesterData) {
					const _disease = +cardData[key2]["Всього"].disease;
					const _seriousReasons = +cardData[key2]["Всього"].seriousReasons;
					const _notSeriousReasons = +cardData[key2]["Всього"].notSeriousReasons;

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

				// start push ItemCardTableContainer components
				itemCardTableContainers[key].push(
						<ItemCardTableContainer
								key={'itemcard-'+ key + key2}
								title={itemCardTitle}
								color={itemCardColor}
								cardData={cardData[key2]}
						/>
				);
				// end push ItemCardTableContainer components
			}

			yearsComponents.unshift(
				<YearContainer key={key} title={key}>
					{
						chartFirstSemesterData &&
						<div className="row chart-row">
							{chartComponents[key]}
						</div>
					}
					{
						itemCardTableContainers[key]
					}

				</YearContainer>
			)
		}


	return (
		<>{yearsComponents}</>
	)

};

export default AdminPage;

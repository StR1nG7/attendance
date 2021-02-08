import React from "react";
import {Field, FormikErrors, useFormikContext} from "formik";

import ItemCardIcon from "../components/ItemCardIcon";
import DependentFieldContainer from "./DependentFieldContainer";
import ErrorTip from "../components/ErrorTip";

import {IRowData, IYearData} from "./App";
interface IItemCardFieldset {
	title: string,
	name: keyof IYearData,
	color: string,
	cardData: IRowData
}

const ItemCardFieldset: React.FC<IItemCardFieldset> = ({title, name, color, cardData}) => {

	const errors = useFormikContext().errors as FormikErrors<IYearData>;

	const validateField = (value: string) => {
		let error;
		if (+value < 0) {
			error = 'Від\'ємне число!';
		}
		const str = value.replace(/\s/g, '');
		if (value === "" || str === "" || isNaN(+value)) {
			error = 'Введіть число!';
		}
		return error;
	};

	const validateDependentField = (value: string) => {
		let error;
		if (+value < 0) {
			error = 'Від\'ємне число!';
		}
		return error;
	};

	return (
			<div className="col-12 col-sm-6 col-lg-4 mx-auto">
				<div className={`item-card item-card--${color}`}>

					<ItemCardIcon title={title} />

					<fieldset className="item-card__fieldset">
						<label className="item-card__label">
							<span className="item-card__name">По хворобі</span>
							{
								name != 'year' ?
										<>
											<Field type="text" className="item-card__value" name={`${name}.disease`}
														 validate={validateField}
											/>
											{
												errors[name]?.disease &&
												<ErrorTip error={errors[name]?.disease as string} />
											}
										</>
										:
										<DependentFieldContainer name={`${name}.disease`}
																						 period={name}
																						 resultValueName='disease'
																						 validate={validateDependentField}
																						 value={cardData.disease}
										/>
							}
						</label>
						<label className="item-card__label">
							<span className="item-card__name">З поважних причин</span>
							{
								name != 'year' ?
										<>
											<Field type="text" className="item-card__value" name={`${name}.seriousReasons`}
														 validate={validateField}
											/>
											{
												errors[name]?.seriousReasons &&
                        <ErrorTip error={errors[name]?.seriousReasons as string} />
											}
										</>
										:
										< DependentFieldContainer name={`${name}.seriousReasons`}
																							period={name}
																							resultValueName='seriousReasons'
																							validate={validateDependentField}
																							value={cardData.seriousReasons}
										/>
							}
						</label>
						<label className="item-card__label">
							<span className="item-card__name">Без поважних причин</span>
							{
								name != 'year' ?
										<>
											<Field type="text" className="item-card__value" name={`${name}.notSeriousReasons`}
														 validate={validateField}
											/>
											{
												errors[name]?.notSeriousReasons &&
                        <ErrorTip error={errors[name]?.notSeriousReasons as string} />
											}
										</>
										:
										<DependentFieldContainer name={`${name}.notSeriousReasons`}
																						 period={name}
																						 resultValueName='notSeriousReasons'
																						 validate={validateDependentField}
																						 value={cardData.notSeriousReasons}
										/>
							}
						</label>
						<label className="item-card__label" style={{paddingLeft: 15}}>
							<span className="item-card__name">Не відвідують</span>
							{
								name != 'year' ?
										<>
											<Field type="text" className="item-card__value" name={`${name}.noVisit`}
														 validate={validateField}
											/>
											{
												errors[name]?.noVisit &&
                        <ErrorTip error={errors[name]?.noVisit as string} />
											}
										</>
										:
										<DependentFieldContainer name={`${name}.noVisit`}
																						 period={name}
																						 resultValueName='noVisit'
																						 validate={validateDependentField}
																						 value={cardData.noVisit}
										/>
							}
						</label>
						<label className="item-card__label" style={{paddingLeft: 15}}>
							<span className="item-card__name">Інші</span>
							<DependentFieldContainer name={`${name}.other`}
																			 period={name}
																			 resultValueName='other'
																			 validate={validateDependentField}
																			 value={cardData.other}
							/>
							{
								errors[name]?.other &&
                <ErrorTip error={errors[name]?.other as string} />
							}
						</label>
						<label className="item-card__label">
							<span className="item-card__name">Всього</span>
							<DependentFieldContainer name={`${name}.total`}
																			 period={name}
																			 resultValueName='total'
																			 validate={validateDependentField}
																			 value={cardData.total}
							/>
							{
								errors[name]?.total &&
                <ErrorTip error={errors[name]?.total as string} />
							}
						</label>
					</fieldset>

				</div>
			</div>
	)
};

export default ItemCardFieldset;


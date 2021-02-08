import React from "react";

interface IYearTitle {
	title: string,
	slideToggle: (e: React.MouseEvent<HTMLDivElement>) => void,
	icon: string
}

const YearTitle: React.FC<IYearTitle> = ({title, slideToggle, icon}) => {

	return (
		<div className="col-12 year__title" onClick={ (e) => { slideToggle(e) } }>
			<span>{title} навчальний рік</span>
			<i className="material-icons year__toggle">{icon}</i>
		</div>
	)
};

export default YearTitle;


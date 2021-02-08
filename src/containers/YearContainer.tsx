import React, {useState} from "react";

import YearTitle from "../components/YearTitle";

export interface IYear {
	title: string
}

const YearContainer: React.FC<IYear> = ({children, title}) => {

	const [isOpen, setIsOpen] = useState(true);
	const [iconText, setIcon] = useState('expand_less');
	const [yearInnerHeight, setYearInnerHeight] = useState('auto');
	const [yearInnerOverflow, setYearInnerOverflow] = useState('unset');

	// Slide Up/Down .year-inner
	const slideToggle = function (e: React.MouseEvent<HTMLDivElement>) {
		if (isOpen) {
			setIcon('expand_more');
			setYearInnerHeight('0');
			setYearInnerOverflow('hidden');
			setIsOpen(!isOpen);
		} else {
			setIcon('expand_less');
			setYearInnerHeight('auto');
			setYearInnerOverflow('unset');
			setIsOpen(!isOpen);
		}
	};

	const yearPrev = title.substr(0, 4);
	const yearNext = title.substr(4);
	const readableTitle = `${yearPrev}-${yearNext}`;

	return (
		<div className="row year">
			<YearTitle title={readableTitle} slideToggle={slideToggle} icon={iconText}/>

			<div className="col-12 year-inner" style={{height: yearInnerHeight, overflow: yearInnerOverflow}}>
				{children}
			</div>

		</div>
	)
};

export default YearContainer;


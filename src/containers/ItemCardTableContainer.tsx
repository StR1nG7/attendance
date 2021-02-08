import React, {ReactElement, useState} from "react";

import ItemCardTable from "../components/ItemCardTable";
import TableRow from "../components/TableRow";

import {IRowData} from "./App";
interface IItemCardTable {
	title: string,
	color: string,
	cardData: { [key: string]: IRowData }
}

const ItemCardTableContainer: React.FC<IItemCardTable> = ({title, color, cardData}) => {

	let rowsComponents: Array<ReactElement> = [];

	for (let key in cardData) {
		const rowData = cardData[key]; //IRowData

		rowsComponents.push(
				<TableRow key={key} title={key} rowData={rowData}/>
		)
	}

	rowsComponents.sort((a, b) => {
		const str1 = a.key as string;
		const str2 = b.key as string;
		const digit1 = +str1.substring(0, str1.length - 2);
		const digit2 = +str2.substring(0, str2.length - 2);

		if (digit1 < digit2 || a.key === "Всього" || b.key === "Всього") return -1;
		if (digit1 > digit2) return 1;
		if (digit1 === digit2) {
			const letter1 = str1.substring(str1.length - 2);
			const letter2 = str2.substring(str2.length - 2);
			if (letter1 < letter2) return -1;
			if (letter1 > letter2) return 1;
		}
		return 0;
	});

	const [isOpen, setIsOpen] = useState(true);
	const [iconText, setIcon] = useState('expand_less');
	const [tableDisplay, setTableDisplay] = useState('auto');

	// Slide Up/Down .item-card-table
	const slideToggle = function (e: React.MouseEvent<HTMLDivElement>) {
		if (isOpen) {
			setIcon('expand_more');
			setTableDisplay('none');
			setIsOpen(!isOpen);
		} else {
			setIcon('expand_less');
			setTableDisplay('flex');
			setIsOpen(!isOpen);
		}
	};

	return <ItemCardTable title={title} color={color}
												rowsComponents={rowsComponents}
												slideToggle={slideToggle}
												icon={iconText}
												display={tableDisplay}
	/>;
};

export default ItemCardTableContainer;


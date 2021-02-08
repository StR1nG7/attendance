import React from "react";
import {IRowData} from "../containers/App";

interface ITableRow {
	title: string,
	rowData: IRowData
}

const TableRow: React.FC<ITableRow> = ({title, rowData}) => {
	return (
			<div className="item-card-table__row">
				<div className="item-card-table__cell">{title}</div>
				<div className="item-card-table__cell">{rowData.total}</div>
				<div className="item-card-table__cell">{rowData.disease}</div>
				<div className="item-card-table__cell">{rowData.seriousReasons}</div>
				<div className="item-card-table__cell">{rowData.notSeriousReasons}</div>
				<div className="item-card-table__cell">{rowData.noVisit}</div>
				<div className="item-card-table__cell">{rowData.other}</div>
			</div>
	)
};

export default TableRow;


import React, {ReactElement} from "react";

import ItemCardIcon from "./ItemCardIcon";

interface IItemCardTable {
	title: string,
	color: string,
	rowsComponents: Array<ReactElement>,
	slideToggle: (e: React.MouseEvent<HTMLDivElement>) => void,
	icon: string,
	display: string
}

const ItemCardTable: React.FC<IItemCardTable> = (
		{title,
			color,
			rowsComponents,
			slideToggle,
			icon,
			display
		}) => {

	return (
			<div className={`item-card item-card--${color}`}>
				<ItemCardIcon title={title} icon={icon} slideToggle={slideToggle}/>

				<div className="item-card-table" style={{display}}>
					<div className="item-card-table__head">
						<div className="item-card-table__row">
							<div className="item-card-table__cell">Клас</div>
							<div className="item-card-table__cell">Всього</div>
							<div className="item-card-table__cell">По хворобі</div>
							<div className="item-card-table__cell">З поважних причин</div>
							<div className="item-card-table__cell">Без поважних причин</div>
							<div className="item-card-table__cell">Не відвідують</div>
							<div className="item-card-table__cell">Інші</div>
						</div>
					</div>
					<div className="item-card-table__body">
						{rowsComponents}
					</div>
				</div>
			</div>
	)
};

export default ItemCardTable;


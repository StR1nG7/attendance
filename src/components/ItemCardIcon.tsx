import React from "react";

interface IItemCardIcon {
	title: string,
	icon?: string,
	slideToggle?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const ItemCardIcon: React.FC<IItemCardIcon> = ({title, icon, slideToggle}) => {

	return (
			<div className="item-card__icon" onClick={ (e) => {slideToggle && slideToggle(e)} }>
				<span>
					{title}
				</span>
				{title == 'Рік' ? '' : ' семестр'}
				{icon && <i className="material-icons">{icon}</i>}
			</div>
	)
};

export default ItemCardIcon;


import React from "react";
import {Link} from "react-router-dom";

interface IHeaderProps{
	isAuth: boolean,
	login: string,
	pathname: string,
	handleLogOutClick: () => void
}

const Header: React.FC<IHeaderProps> = ({isAuth, login, pathname, handleLogOutClick}) => {

	const logoutButton = <div className="button" onClick={handleLogOutClick} style={{marginLeft: 20}}>Вийти</div>;

	return (
			<header className="header">
				<h1 className="header__title">
					<i className="header__icon material-icons">addchart</i>
					{' '}Моніторинг відвідування учнями навчальних занять
				</h1>
				{
					pathname === '/' && !isAuth &&
          <Link to="/login" className="button">Вхід для класних керівників</Link>
				}
				{
					pathname === '/' && isAuth &&
          <div className="header-nav">
						<Link to="/class" className="button">Перейти в {login} клас</Link>
						{logoutButton}
          </div>
				}
				{
					pathname === '/class' && isAuth &&
					<div className="header-nav">
						<Link to="/" className="button" style={{marginLeft: 12}}>На головну</Link>
						{logoutButton}
						<div className="avatar">
							<span className="avatar__name">{login}</span>
						</div>
					</div>
				}

			</header>
	)
};

export default Header;


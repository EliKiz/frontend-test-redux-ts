import logo from "./img/Logotype.svg";
import hamburger from "./img/hamburger.png";
import like from "./img/favourite_20.svg";
import storage from "./img/stock_20.svg";
import trade from "./img/bag_20.svg";

import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="Logo icon" />
            </div>
            <button className="header__catalog">
                <img
                    className="header__catalog-hamburger"
                    src={hamburger}
                    alt="hamburger icon"
                />
                <div className="header__catalog-text">Каталог</div>
            </button>
            <input
                className="header__search"
                type="text"
                placeholder="Поиск:"
            />
            <div className="header__filters">
                <ul className="header__filters-wrapper">
                    <li className="header__filters-wrapper-item active">
                        <img
                            className="header__filters-wrapper-item-img"
                            src={like}
                            alt="favourite icon"
                        />
                        <span className="header__filters-wrapper-item-text">
                            Избранное
                        </span>
                    </li>
                    <li className="header__filters-wrapper-item">
                        <img src={storage} alt="storage icon" />
                        <span>Склад</span>
                    </li>
                    <li className="header__filters-wrapper-item">
                        <img src={trade} alt="trade icon" />
                        <span>Сделки</span>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;

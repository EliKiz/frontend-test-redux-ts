import logo from "./img/Logotype.svg";
import hamburger from "./img/hamburger.png";
import like from "./img/favourite_20.svg";
import storage from "./img/stock_20.svg";
import trade from "./img/bag_20.svg";
import { NavLink } from "react-router-dom";

import "./header.scss";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeSearch, selectInput } from "../filters/filtersSlice";
import { useState } from "react";

const Header = () => {
    const dispatch = useAppDispatch();
    const inputStore = useAppSelector(selectInput);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setSearch(event.target.value);
        dispatch(changeSearch(event.target.value));
    };

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
                onChange={(e) => handleSearch(e)}
                value={inputStore}
                className="header__search"
                type="text"
                placeholder="Поиск: например, Труба цинковая ГОСТ 245-50.02 4 мм"
            />
            <div className="header__filters">
                <ul className="header__filters-wrapper">
                    <NavLink
                        to="/favorite"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "header__filters-wrapper-item-active"
                                : undefined
                        }>
                        <li className="header__filters-wrapper-item ">
                            <img
                                className="header__filters-wrapper-item-img"
                                src={like}
                                alt="favourite icon"
                            />
                            <span className="header__filters-wrapper-item-text">
                                Избранное
                            </span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/storage"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "header__filters-wrapper-item-active"
                                : undefined
                        }>
                        <li className="header__filters-wrapper-item ">
                            <img
                                className="header__filters-wrapper-item-img"
                                src={storage}
                                alt="favourite icon"
                            />
                            <span className="header__filters-wrapper-item-text">
                                Склад
                            </span>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/auction"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "header__filters-wrapper-item-active"
                                : undefined
                        }>
                        <li className="header__filters-wrapper-item ">
                            <img
                                className="header__filters-wrapper-item-img"
                                src={trade}
                                alt="favourite icon"
                            />
                            <span className="header__filters-wrapper-item-text">
                                Сделки
                            </span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;

import searchIcon from "./img/Vector.svg";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    changeActiveClass,
    changeSearch,
    fetchFilters,
    selectActiveFilter,
    selectFiltersList,
} from "./filtersSlice";

import "./filters.scss";

const Filters = () => {
    const [search, setSearch] = useState("");

    const filtersList = useAppSelector(selectFiltersList);
    const activeFilter = useAppSelector(selectActiveFilter);

    const dispatch = useAppDispatch();

    const changeFilter = (value: string) => {
        dispatch(changeActiveClass(value));
    };

    useEffect(() => {
        dispatch(fetchFilters());
    }, []);

    const handleSubmite = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target.value);
        dispatch(changeSearch(search));
    };

    const filtersContent = useMemo(() => {
        return filtersList.map((item) => {
            const itemClass = classNames(
                "filters__type-wrapper-item",
                item.colored,
                {
                    active: item.value === activeFilter,
                }
            );

            return (
                <li
                    onClick={() => changeFilter(item.value)}
                    key={item.id}
                    value={item.value}
                    className={itemClass}>
                    {item.label}
                </li>
            );
        });
    }, [activeFilter, filtersList]);

    return (
        <section className="filters">
            <div className="filters__type">
                <ul className="filters__type-wrapper">{filtersContent}</ul>
            </div>
            <div className="filters__search">
                <form onSubmit={handleSubmite} className="filters__search-form">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="filters__search-form-input"
                        type="text"
                        value={search}
                        placeholder="Брус"
                    />
                    <button className="filters__search-form-submite">
                        <img src={searchIcon} alt="search icon" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Filters;

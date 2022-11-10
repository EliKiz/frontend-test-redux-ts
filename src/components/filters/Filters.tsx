import searchIcon from "./img/Vector.svg";
import classNames from "classnames";
import { ContentFiltersProps } from "../../types";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    changeActiveClass,
    changeSearch,
    fetchFilters,
    selectActiveFilter,
    selectFiltersList,
    selectInputFilter,
} from "./filtersSlice";

import "./filters.scss";

const Filters = () => {
    const dispatch = useAppDispatch();
    const filtersList = useAppSelector(selectFiltersList);
    const inputText = useAppSelector(selectInputFilter);

    useEffect(() => {
        dispatch(fetchFilters());
    }, []);

    const handleSubmite = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(changeSearch(inputText));
    };

    const content = <ContentFilters data={filtersList} />;
    return (
        <section className="filters">
            <div className="filters__type">
                <ul className="filters__type-wrapper">{content}</ul>
            </div>
            <div className="filters__search">
                <form onSubmit={handleSubmite} className="filters__search-form">
                    <input
                        onChange={(e) => dispatch(changeSearch(e.target.value))}
                        className="filters__search-form-input"
                        type="text"
                        value={inputText}
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

const ContentFilters = ({ data }: ContentFiltersProps) => {
    const activeFilter = useAppSelector(selectActiveFilter);
    const dispatch = useAppDispatch();

    const changeFilter = (value: string) => {
        dispatch(changeActiveClass(value));
    };

    return (
        <>
            {data.map((item) => {
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
            })}
        </>
    );
};

export default Filters;

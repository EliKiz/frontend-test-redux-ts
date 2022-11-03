import search from "./img/Vector.svg";
import type { Card } from "../../types";
import classNames from "classnames";
import "./filters.scss";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    changeActiveClass,
    fetchFilters,
    selectActiveFilter,
    selectFiltersList,
} from "./filtersSlice";

const Filters = () => {
    // const [activeFilter, setActiveFilter] = useState<string>("all");

    const filtersList = useAppSelector(selectFiltersList);
    const activeFilter = useAppSelector(selectActiveFilter);

    const dispatch = useAppDispatch();

    const changeColor = (value: string) => {
        dispatch(changeActiveClass(value));
    };

    useEffect(() => {
        dispatch(fetchFilters());
    }, []);

    // const filtersContent = (data: FiltersData[]) => {
    //     return data.map((item) => {
    //         console.log("run");
    //         const itemClass = classNames(
    //             "filters__type-wrapper-item",
    //             item.colored,
    //             {
    //                 active: item.value === activeFilter,
    //             }
    //         );
    //         return (
    //             <li
    //                 onClick={() => changeColor(item.value)}
    //                 key={item.id}
    //                 value={item.value}
    //                 className={itemClass}>
    //                 {item.label}
    //             </li>
    //         );
    //     });
    // };

    const handleSubmite = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const filtersContent = useMemo(() => {
        console.log("runn");
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
                    onClick={() => changeColor(item.value)}
                    key={item.id}
                    value={item.value}
                    className={itemClass}>
                    {item.label}
                </li>
            );
        });
    }, [activeFilter, filtersList]);
    // console.log("filtersontet", filtersContent);

    // const content = filtersContent(filters);

    return (
        <section className="filters">
            <div className="filters__type">
                <ul className="filters__type-wrapper">{filtersContent}</ul>
            </div>
            <div className="filters__search">
                <form onSubmit={handleSubmite} className="filters__search-form">
                    <input
                        className="filters__search-form-input"
                        type="text"
                        placeholder="Брус"
                    />
                    <button className="filters__search-form-submite">
                        <img src={search} alt="search icon" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Filters;

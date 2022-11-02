import search from "./img/Vector.svg";
import type { FiltersData } from "../../types";
import classNames from "classnames";
import "./filters.scss";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../../Spinner/Spinner";

const Filters = () => {
    const [filters, setFilters] = useState<FiltersData[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const getFilters = () => {
        fetch("http://localhost:3001/filters")
            .then((res) => res.json())
            .then((data) => setFilters(data));
    };

    const changeColor = (value: string) => {
        setActiveFilter(value);
    };

    useEffect(() => {
        getFilters();
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

    const filtersContent = useMemo(() => {
        console.log("runn");
        return filters.map((item) => {
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
    }, [activeFilter, filters]);
    // console.log("filtersontet", filtersContent);

    // const content = filtersContent(filters);

    return (
        <section className="filters">
            <div className="filters__type">
                <ul className="filters__type-wrapper">{filtersContent}</ul>
            </div>
            <div className="filters__search">
                <form className="filters__search-form">
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

import searchIcon from "./img/Vector.svg";
import type { Card } from "../../types";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    changeActiveClass,
    changeSearch,
    fetchFilters,
    selectActiveFilter,
    selectFiltersList,
    selectInput,
} from "./filtersSlice";
import { useGetCardsQuery } from "../../api/apiSlice";

import "./filters.scss";

const Filters = () => {
    // const [activeFilter, setActiveFilter] = useState<string>("all");
    const [search, setSearch] = useState("");

    const {
        data: cards = [] as Card[],
        isLoading,
        isError,
    } = useGetCardsQuery();

    const filtersList = useAppSelector(selectFiltersList);
    const activeFilter = useAppSelector(selectActiveFilter);
    const inputStore = useAppSelector(selectInput);

    const dispatch = useAppDispatch();

    // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     // setSearch(event.target.value);
    //     dispatch(changeSearch(event.target.value));
    // };

    const changeFilter = (value: string) => {
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
    //                 onClick={() => changeFilter(item.value)}
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
        console.log(event.target.value);
        dispatch(changeSearch(search));
        // setSearch(event.target.value);
        // dispatch(changeSearch(search));
    };

    const filteredCards = useMemo(() => {
        return cards.filter((item) => {
            return item.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase());
        });
    }, [search]);

    // console.log(cards);

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

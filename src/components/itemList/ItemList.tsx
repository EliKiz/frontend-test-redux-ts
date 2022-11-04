import { useGetCardsQuery } from "../../api/apiSlice";
import Spinner from "../../Spinner/Spinner";
import ItemListChildren from "../itemListChildren/ItemListChildren";
import { Card } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    selectActiveFilter,
    selectInput,
    changeSearch,
} from "../filters/filtersSlice";
import { useCallback, useMemo, useState } from "react";

import "./itemList.scss";
import Skeleton from "../skeleton/Skeleton";
import { changeActiveClass } from "./itemListSlice";

const ItemList = () => {
    const {
        data: cards = [] as Card[],
        isFetching,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetCardsQuery();

    const activeFilter = useAppSelector(selectActiveFilter);
    const inputText = useAppSelector(selectInput);

    // const dispatch = useAppDispatch();
    const [tasks, setTasks] = useState(cards);

    // const toggleDone = useCallback((id: string) => {
    //     setTasks((tasks) => {
    //         return tasks.map((item) => {
    //             if (item.id !== id) {
    //                 return item;
    //             }

    //             return { ...item, isDone: !item.favorite };
    //         });
    //     });
    // }, []);

    const filteredItems = useMemo(() => {
        const filteredCards = [...cards];
        // const filteredCards = cards.slice();

        return filteredCards
            .filter((card) => {
                if (filteredCards.length === 0) {
                    return filteredCards;
                }
                return card.name
                    .toLocaleLowerCase()
                    .includes(inputText.toLocaleLowerCase());
            })
            .filter((card) => {
                if (activeFilter === "all") {
                    return filteredCards;
                }
                return card.filter === activeFilter;
            });
    }, [cards, activeFilter, inputText]);

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <span>Что то произошло</span>;
    }
    const toggleDone = (id: string) => {
        setTasks((tasks) => {
            return tasks.map((item) => {
                console.log(item);
                if (item.id !== id) {
                    return item;
                }

                return { ...item, favorite: !item.favorite };
            });
        });
    };

    if (filteredItems.length === 0) {
        return <Skeleton />;
    }

    const renderCardItem = (data: Card[]) => {
        return data.map(({ ...props }) => {
            return (
                <ItemListChildren
                    // eslint-disable-next-line react/prop-types
                    key={props.id}
                    {...props}
                    toggleDone={toggleDone}
                />
            );
        });
    };
    const elements = renderCardItem(filteredItems);

    return <ul className="item__list">{elements}</ul>;
};

export default ItemList;

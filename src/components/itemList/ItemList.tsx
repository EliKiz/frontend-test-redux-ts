import { useGetCardsQuery } from "../../api/apiSlice";
import Spinner from "../../Spinner/Spinner";
import ItemListChildren from "../itemListChildren/ItemListChildren";
import { Card } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectActiveFilter, selectInput } from "../filters/filtersSlice";
import { useCallback, useEffect, useMemo } from "react";

import "./itemList.scss";
import Skeleton from "../skeleton/Skeleton";
import { fetchFilters, selectCardsList } from "./itemListSlice";

const ItemList = () => {
    const {
        data: cards = [] as Card[],
        isLoading,
        isError,
    } = useGetCardsQuery();

    const activeFilter = useAppSelector(selectActiveFilter);
    const inputText = useAppSelector(selectInput);

    const dataList = useAppSelector(selectCardsList);
    // console.log(dataList.cardsList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
    }, []);

    const filteredItems = useMemo(() => {
        // const filteredCards = [...dataList.cardsList];
        // const filteredCards = cards.slice();
        // console.log("ren");
        console.log("render filteredItems");
        return cards
            .filter((card) => {
                if (cards.length === 0) {
                    return cards;
                }
                return card.name
                    .toLocaleLowerCase()
                    .includes(inputText.toLocaleLowerCase());
            })
            .filter((card) => {
                if (activeFilter === "all") {
                    return cards;
                }
                return card.filter === activeFilter;
            });
    }, [cards, activeFilter, inputText]);

    const toggleDone = (id: string) => {
        return cards.map((item) => {
            if (item.id === id) {
                return { ...item, favorite: !item.favorite };
            }
            return item;
        });
    };

    // if (dataList.cardsList.length === 0) {
    //     return <Spinner />;
    // }

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <span>Что то произошло</span>;
    }

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

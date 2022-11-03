import { useGetCardsQuery } from "../../api/apiSlice";
import Spinner from "../../Spinner/Spinner";
import ItemListChildren from "../itemListChildren/ItemListChildren";
import { Card } from "../../types";
import { useAppSelector } from "../app/hooks";
import { selectActiveFilter } from "../filters/filtersSlice";
import { useMemo } from "react";

import "./itemList.scss";

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

    const filteredItems = useMemo(() => {
        console.log("filtered");
        const filteredCards = cards.slice();
        if (activeFilter === "all") {
            return filteredCards;
        } else {
            return filteredCards.filter((item) => item.filter === activeFilter);
        }
    }, [cards, activeFilter]);

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <span>Что то произошло</span>;
    }

    const renderCardItem = (data: Card[]) => {
        return data.map(({ ...props }) => {
            // eslint-disable-next-line react/prop-types
            return <ItemListChildren key={props.id} {...props} />;
        });
    };
    const elements = renderCardItem(filteredItems);

    return <ul className="item__list">{elements}</ul>;
};

export default ItemList;

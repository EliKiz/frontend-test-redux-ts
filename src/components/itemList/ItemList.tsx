import { useGetCardsQuery } from "../../api/apiSlice";
import Spinner from "../../Spinner/Spinner";
import ItemListChildren from "../itemListChildren/ItemListChildren";
import { Card } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectActiveFilter, selectInput } from "../filters/filtersSlice";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

import "./itemList.scss";
import Skeleton from "../skeleton/Skeleton";
import {
    changeFavoriteClass,
    fetchCards,
    selectCardsList,
} from "./itemListSlice";

interface PropsList {
    cardsData: Card[];
    isButton?: boolean;
}

const ItemList: FC<PropsList> = ({ cardsData, isButton }) => {
    // const {
    //     data: cards = [] as Card[],
    //     isLoading,
    //     isError,
    // } = useGetCardsQuery();
    // console.log("buttonText props", buttonText);
    const activeFilter = useAppSelector(selectActiveFilter);
    const inputText = useAppSelector(selectInput);

    const dataList = useAppSelector(selectCardsList);
    const dispatch = useAppDispatch();
    // console.log("data IS", data);
    // const correctData = Object.values(data);
    // useEffect(() => {
    //     dispatch(fetchCards());
    // }, []);

    // const changeFavorite
    const filteredItems = useMemo(() => {
        return cardsData
            .filter((card) => {
                if (cardsData.length === 0) {
                    return cardsData;
                }
                return card.name
                    .toLocaleLowerCase()
                    .includes(inputText.toLocaleLowerCase());
            })
            .filter((card) => {
                if (activeFilter === "all") {
                    return cardsData;
                }
                return card.filter === activeFilter;
            });
    }, [dataList, activeFilter, inputText]);

    const toggleDone = (id: string) => {
        // setData((data) => {
        //     return data.map((card) => {
        //         if (card.id !== id) {
        //             return card;
        //         }
        //         return { ...card, favorite: !card.favorite };
        //     });
        // });
        // return cards;
        // return cards.map((item) => {
        //     console.log("RUN");
        //     if (item.id !== id) {
        //         return item;
        //     }
        //     // console.log("item.favorite", item.favorite);
        //     return { ...item, favorite: !item.favorite };
        // });
    };
    if (cardsData.length === 0) {
        return <Skeleton />;
    }
    console.log(cardsData.length);

    // if (dataList.cardsList.length === 0) {
    //     return <Spinner />;
    // }

    // if (data.length === 0) {
    //     return <Spinner />;
    // } else if (isError) {
    //     return <span>Что то произошло</span>;
    // }
    // if (filteredItems.length === 0) {
    //     return <Skeleton />;
    // }

    const renderCardItem = (data: Card[]) => {
        if (!data.length) {
            return <Skeleton />;
        }
        return data.map(({ ...props }) => {
            return (
                <ItemListChildren
                    // eslint-disable-next-line react/prop-types
                    key={props.id}
                    {...props}
                    isButton={isButton}
                    toggleDone={toggleDone}
                />
            );
        });
    };
    const elements = renderCardItem(filteredItems);

    return <ul className="item__list">{elements}</ul>;
};

export default ItemList;

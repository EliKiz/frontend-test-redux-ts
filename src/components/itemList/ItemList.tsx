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
}

const ItemList: FC<PropsList> = ({ cardsData }) => {
    // const {
    //     data: cards = [] as Card[],
    //     isLoading,
    //     isError,
    // } = useGetCardsQuery();
    console.log("data props", cardsData);
    const activeFilter = useAppSelector(selectActiveFilter);
    const inputText = useAppSelector(selectInput);
    const initialState: Card[] = [
        {
            id: "453a5405-ze3cc-4c7f-afa9-de308df95e40",
            type: "Аукцион",
            name: "Пиломатериалы брус доска",
            product: "Стройматериалы",
            description:
                "Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 ! Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.",
            seller: "Торговый Дом ГОСТ",
            location: "Санкт-Петербург, Красное Село",
            price: "22222",
            amount: "11",
            costPerPiece: "1200",
            filter: "auction",
            favorite: true,
            addedDeals: false,
        },
        {
            id: "453a5405-ev3cc-4c7f-afa9-de308d95e40",
            type: "Разовое предложение",
            name: "Пиломатериалы брус доска",
            product: "Стройматериалы",
            description:
                "Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 ! Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.",
            seller: "Торговый Дом ГОСТ",
            location: "Пермь, Солнечная 23",
            price: "32322",
            amount: "12",
            costPerPiece: "3100",
            filter: "auction",
            favorite: false,
            addedDeals: false,
        },
        {
            id: "453a5405-ev3cc-4c7f-afa9-de308d95e4a0",
            type: "Прямые продажи",
            name: "Пиломатериалы брус доска",
            product: "Стройматериалы",
            description:
                "Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со скидками до закрытия 01.06.2022 ! Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.",
            seller: "Торговый Дом ГОСТ",
            location: "Пермь, Солнечная 23",
            price: "32322",
            amount: "12",
            costPerPiece: "3100",
            filter: "auction",
            favorite: false,
            addedDeals: false,
        },
    ];

    // const [data, setData] = useState(initialState);

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

import ItemListChildren from "../itemListChildren/ItemListChildren";
import { Card } from "../../types";
import { useAppSelector } from "../app/hooks";
import { selectActiveFilter, selectInput } from "../filters/filtersSlice";
import { FC, useMemo } from "react";

import "./itemList.scss";
import Skeleton from "../skeleton/Skeleton";

interface PropsList {
    cardsData: Card[];
    isButton?: boolean;
}

const ItemList: FC<PropsList> = ({ cardsData, isButton }) => {
    const activeFilter = useAppSelector(selectActiveFilter);
    const inputText = useAppSelector(selectInput);

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
    }, [cardsData, activeFilter, inputText]);

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
                />
            );
        });
    };
    const elements = renderCardItem(filteredItems);

    return <ul className="item__list">{elements}</ul>;
};

export default ItemList;

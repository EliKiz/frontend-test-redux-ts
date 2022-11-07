import { motion } from "framer-motion";
import { Card } from "../../../types";
import { useGetCardsQuery } from "../../../api/apiSlice";
import Filters from "../../filters/Filters";
import Header from "../../header/Header";

import ItemList from "../../itemList/ItemList";
import ItemListChildren from "../../itemListChildren/ItemListChildren";
import Spinner from "../../../Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    fetchCards,
    selectCardsList,
    selectStatusList,
} from "../../itemList/itemListSlice";
import { FC, useEffect } from "react";

interface PropsPage {
    dataProps: Card[];
}

const FavoritePage: FC<PropsPage> = ({ dataProps }) => {
    // const {
    //     data: cards = [] as Card[],
    //     isLoading,
    //     isError,
    // } = useGetCardsQuery();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(fetchCards());
    // }, [dispatch]);
    const dataArr = Object.values(dataProps);
    console.log("dataProps", dataArr);
    const filterFavoriteItems = dataProps.filter(
        (item: { favorite: boolean }) => {
            return item.favorite === true;
        }
    );

    return (
        <>
            <Header />
            <Filters />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                {loading === "loading" ? (
                    <Spinner />
                ) : (
                    <ItemList cardsData={filterFavoriteItems} />
                )}
            </motion.div>
        </>
    );
};

export default FavoritePage;

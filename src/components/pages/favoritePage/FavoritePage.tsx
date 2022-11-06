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
import { useEffect } from "react";

const FavoritePage = () => {
    // const {
    //     data: cards = [] as Card[],
    //     isLoading,
    //     isError,
    // } = useGetCardsQuery();
    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    useEffect(() => {
        dispatch(fetchCards());
    }, []);

    const filterFavoriteItems = dataList.filter((item) => {
        return item.favorite === true;
    });

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

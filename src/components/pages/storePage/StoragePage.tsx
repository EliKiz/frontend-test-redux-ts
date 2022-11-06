import { motion } from "framer-motion";
import { useEffect } from "react";
import { useGetCardsQuery } from "../../../api/apiSlice";
import Spinner from "../../../Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Filters from "../../filters/Filters";
import { fetchFilters } from "../../filters/filtersSlice";
import Header from "../../header/Header";
import { Card } from "../../../types";
import ItemList from "../../itemList/ItemList";
import {
    fetchCards,
    selectCardsList,
    selectStatusList,
} from "../../itemList/itemListSlice";

const StoragePage = () => {
    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    useEffect(() => {
        dispatch(fetchCards());
    }, []);

    console.log("STATUS", loading);
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
                    <ItemList cardsData={dataList} />
                )}
            </motion.div>
        </>
    );
};

export default StoragePage;

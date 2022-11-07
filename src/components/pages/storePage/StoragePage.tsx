import { motion } from "framer-motion";
import { FC, useEffect } from "react";
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

interface PropsPage {
    dataProps: Card[];
}

const StoragePage: FC<PropsPage> = ({ dataProps }) => {
    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    // useEffect(() => {
    //     dispatch(fetchCards());
    // }, [dispatch]);

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
                    <ItemList cardsData={dataProps} />
                )}
            </motion.div>
        </>
    );
};

export default StoragePage;

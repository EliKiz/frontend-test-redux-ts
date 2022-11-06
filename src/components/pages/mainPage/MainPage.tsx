import { motion } from "framer-motion";
import { useGetCardsQuery } from "../../../api/apiSlice";
import Filters from "../../filters/Filters";
import Header from "../../header/Header";
import { Card } from "../../../types";
import ItemList from "../../itemList/ItemList";
import Spinner from "../../../Spinner/Spinner";
import {
    selectCardsList,
    selectStatusList,
} from "../../itemList/itemListSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchFilters } from "../../filters/filtersSlice";
import { useEffect } from "react";

const MainPage = () => {
    // const {
    //     data: cards = [] as Card[],
    //     isLoading,
    //     isError,
    // } = useGetCardsQuery();

    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    useEffect(() => {
        dispatch(fetchFilters());
    }, []);

    if (loading === "loading") {
        return <Spinner />;
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Header />
                <Filters />
                {/* <ItemList {...dataList} /> */}
            </motion.div>
        </>
    );
};

export default MainPage;

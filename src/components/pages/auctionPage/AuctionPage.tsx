import { motion } from "framer-motion";
import { useEffect } from "react";
import Spinner from "../../../Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Filters from "../../filters/Filters";
import Header from "../../header/Header";
import ItemList from "../../itemList/ItemList";
import {
    fetchCards,
    selectCardsList,
    selectStatusList,
} from "../../itemList/itemListSlice";

const AuctionPage = () => {
    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    useEffect(() => {
        dispatch(fetchCards());
    }, []);

    const filterDealsItems = dataList.filter((item) => item.addedDeals);

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
                    <ItemList cardsData={filterDealsItems} />
                )}
            </motion.div>
        </>
    );
};

export default AuctionPage;

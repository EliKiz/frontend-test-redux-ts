import { motion } from "framer-motion";
import { FC } from "react";
import Spinner from "../../../Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Filters from "../../filters/Filters";
import Header from "../../header/Header";
import ItemList from "../../itemList/ItemList";
import { Card } from "../../../types";
import {
    fetchCards,
    selectCardsList,
    selectStatusList,
} from "../../itemList/itemListSlice";

interface PropsPage {
    dataProps: Card[];
}

const AuctionPage: FC<PropsPage> = ({ dataProps }) => {
    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    // useEffect(() => {
    //     dispatch(fetchCards());
    // }, []);

    const filterDealsItems = dataProps.filter((item) => item.addedDeals);
    const isButton = true;

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
                    <ItemList
                        cardsData={filterDealsItems}
                        isButton={isButton}
                    />
                )}
            </motion.div>
        </>
    );
};

export default AuctionPage;

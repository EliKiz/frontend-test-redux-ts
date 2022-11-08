import { motion } from "framer-motion";
import { FC } from "react";
import ItemList from "../../itemList/ItemList";
import { Card } from "../../../types";

interface PropsPage {
    dataProps: Card[];
}

const AuctionPage: FC<PropsPage> = ({ dataProps }) => {
    const filterDealsItems = dataProps.filter((item) => item.addedDeals);
    const isButton = true;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <ItemList cardsData={filterDealsItems} isButton={isButton} />
            </motion.div>
        </>
    );
};

export default AuctionPage;

import { motion } from "framer-motion";
import { FC } from "react";
import { Card } from "../../../types";
import ItemList from "../../itemList/ItemList";

interface PropsPage {
    dataProps: Card[];
}

const StoragePage: FC<PropsPage> = ({ dataProps }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <ItemList cardsData={dataProps} />
            </motion.div>
        </>
    );
};

export default StoragePage;

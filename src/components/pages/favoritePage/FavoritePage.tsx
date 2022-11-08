import { motion } from "framer-motion";
import { Card } from "../../../types";
import ItemList from "../../itemList/ItemList";
import { FC } from "react";

interface PropsPage {
    dataProps: Card[];
}

const FavoritePage: FC<PropsPage> = ({ dataProps }) => {
    const filterFavoriteItems = dataProps.filter(
        (item: { favorite: boolean }) => {
            return item.favorite === true;
        }
    );

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <ItemList cardsData={filterFavoriteItems} />
            </motion.div>
        </>
    );
};

export default FavoritePage;

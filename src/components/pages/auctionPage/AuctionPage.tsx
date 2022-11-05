import { motion } from "framer-motion";
import Filters from "../../filters/Filters";
import Header from "../../header/Header";
import ItemList from "../../itemList/ItemList";

const AuctionPage = () => {
    return (
        <>
            <Header />
            <Filters />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <ItemList />
            </motion.div>
        </>
    );
};

export default AuctionPage;

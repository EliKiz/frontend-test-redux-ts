import { motion } from "framer-motion";
import Filters from "../../filters/Filters";
import Header from "../../header/Header";
import ItemList from "../../itemList/ItemList";

const MainPage = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Header />
                <Filters />
                <ItemList />
            </motion.div>
        </>
    );
};

export default MainPage;

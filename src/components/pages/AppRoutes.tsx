import { motion, AnimatePresence } from "framer-motion";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import App from "../app/App";
import AuctionPage from "./auctionPage/AuctionPage";
import FavoritePage from "./favoritePage/FavoritePage";
import MainPage from "./mainPage/MainPage";
import Page404 from "./pageError/404";
import StoragePage from "./storePage/StoragePage";

const AppRoutes = () => {
    return (
        <AnimatePresence>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<MainPage />} /> */}
                    <Route path="/" element={<Navigate to="/storage" />} />
                    <Route path="/favorite" element={<FavoritePage />} />
                    <Route path="/storage" element={<StoragePage />} />
                    <Route path="/auction" element={<AuctionPage />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </AnimatePresence>
    );
};

export default AppRoutes;

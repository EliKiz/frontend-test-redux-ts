import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Filters from "../filters/Filters";
import Header from "../header/Header";
import { fetchCards, selectCardsList } from "../itemList/itemListSlice";
import AuctionPage from "./auctionPage/AuctionPage";
import FavoritePage from "./favoritePage/FavoritePage";
import Page404 from "./pageError/404";
import StoragePage from "./storePage/StoragePage";

const AppRoutes = () => {
    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    return (
        <AnimatePresence>
            <BrowserRouter>
                <Header />
                <Filters />
                <Routes>
                    <Route path="/" element={<Navigate to="/storage" />} />
                    <Route
                        path="/favorite"
                        element={<FavoritePage dataProps={dataList} />}
                    />
                    <Route
                        path="/storage"
                        element={<StoragePage dataProps={dataList} />}
                    />
                    <Route
                        path="/auction"
                        element={<AuctionPage dataProps={dataList} />}
                    />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </AnimatePresence>
    );
};

export default AppRoutes;

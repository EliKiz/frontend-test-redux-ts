import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import App from "../app/App";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    fetchCards,
    selectCardsList,
    selectStatusList,
} from "../itemList/itemListSlice";
import AuctionPage from "./auctionPage/AuctionPage";
import FavoritePage from "./favoritePage/FavoritePage";
import Page404 from "./pageError/404";
import StoragePage from "./storePage/StoragePage";

const AppRoutes = () => {
    const dispatch = useAppDispatch();
    const dataList = useAppSelector(selectCardsList);
    const loading = useAppSelector(selectStatusList);

    useEffect(() => {
        dispatch(fetchCards());
    }, []);

    return (
        <AnimatePresence>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/storage" />} />
                    <Route
                        path="/favorite"
                        element={
                            loading === "loading" ? (
                                <Spinner />
                            ) : (
                                <FavoritePage dataProps={dataList} />
                            )
                        }
                    />
                    <Route
                        path="/storage"
                        element={
                            loading === "loading" ? (
                                <Spinner />
                            ) : (
                                <StoragePage dataProps={dataList} />
                            )
                        }
                    />
                    <Route
                        path="/auction"
                        element={
                            loading === "loading" ? (
                                <Spinner />
                            ) : (
                                <AuctionPage dataProps={dataList} />
                            )
                        }
                    />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </AnimatePresence>
    );
};

export default AppRoutes;

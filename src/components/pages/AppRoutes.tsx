import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "../../spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Filters from "../filters/Filters";
import Header from "../header/Header";
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

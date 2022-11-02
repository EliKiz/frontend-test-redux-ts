import { useGetCardsQuery } from "../../api/apiSlice";
import Spinner from "../../Spinner/Spinner";

import "./itemList.scss";

const ItemList = () => {
    const {
        data: cards = [],
        isFetching,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetCardsQuery();

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <span>Что то произошло</span>;
    }
    // console.log(cards);

    return <div className="item__list"></div>;
};

export default ItemList;

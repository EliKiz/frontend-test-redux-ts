import Motion from "../../motion/Motion";
import { Card } from "../../../types";
import ItemList from "../../itemList/ItemList";
import Spinner from "../../spinner/Spinner";

interface PropsPage {
    dataProps: Card[];
}

const FavoritePage = ({ dataProps }: PropsPage) => {
    const filterFavoriteItems = dataProps.filter(
        (item: { favorite: boolean }) => {
            return item.favorite === true;
        }
    );

    return (
        <Motion>
            {!dataProps.length ? (
                <Spinner />
            ) : (
                <ItemList cardsData={filterFavoriteItems} />
            )}
        </Motion>
    );
};

export default FavoritePage;

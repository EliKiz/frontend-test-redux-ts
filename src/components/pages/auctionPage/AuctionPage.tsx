import Motion from "../../motion/Motion";
import ItemList from "../../itemList/ItemList";
import { Card } from "../../../types";
import Spinner from "../../spinner/Spinner";

interface PropsPage {
    dataProps: Card[];
}

const AuctionPage = ({ dataProps }: PropsPage) => {
    const filterDealsItems = dataProps.filter((item) => item.addedDeals);
    const isButton = true;

    return (
        <Motion>
            {!dataProps.length ? (
                <Spinner />
            ) : (
                <ItemList cardsData={filterDealsItems} isButton={isButton} />
            )}
        </Motion>
    );
};

export default AuctionPage;

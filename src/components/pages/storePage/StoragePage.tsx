import { Card } from "../../../types";
import ItemList from "../../itemList/ItemList";
import Motion from "../../motion/Motion";
import Spinner from "../../spinner/Spinner";

interface PropsPage {
    dataProps: Card[];
}

const StoragePage = ({ dataProps }: PropsPage) => {
    return (
        <Motion>
            {!dataProps.length ? (
                <Spinner />
            ) : (
                <ItemList cardsData={dataProps} />
            )}
        </Motion>
    );
};

export default StoragePage;

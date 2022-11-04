import { ItemListChildrenProps } from "../../types";
import cardImg from "./img/ImageCard.png";
import classNames from "classnames";
import geo from "./img/geo_15.svg";
import favoriteDark from "./img/favouriteDark.svg";
import favoriteWhite from "./img/favoriteWhite.svg";
import "./itemListChildren.scss";

const ItemListChildren = ({
    id,
    type,
    name,
    description,
    product,
    seller,
    location,
    price,
    amount,
    costPerPiece,
    favorite,
    toggleDone,
}: ItemListChildrenProps) => {
    return (
        <li className="item">
            <div className="item__wrapper-left">
                <div className="item__wrapper-left-content">
                    <img
                        className="item__wrapper-left-img"
                        src={cardImg}
                        alt="product img"
                    />
                    <ul className="item__wrapper-left-info">
                        <li className="item__wrapper-left-type">{type}</li>
                        <li className="item__wrapper-left-title">{name}</li>
                        <li className="item__wrapper-left-location">
                            <img src={geo} alt="geo icon" />
                            {location}
                        </li>
                        <li className="item__wrapper-left-saler">
                            <span className="item__wrapper-left-saler-text">
                                Продавец
                            </span>{" "}
                            {seller}
                        </li>
                        <li className="item__wrapper-left-product">
                            <span className="item__wrapper-left-product-text">
                                Вид товара
                            </span>
                            <br /> {product}
                        </li>
                        <li className="item__wrapper-left-descr">
                            {description.slice(0, 200) + " ....."}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item__wrapper-right">
                <div>
                    <h2 className="item__wrapper-right-price">{price} ₽</h2>
                    <div className="item__wrapper-right-amount">
                        <span className="item__wrapper-right-amount-text">
                            Количество
                        </span>
                        {amount} шт.
                    </div>
                    <div className="item__wrapper-right-piece">
                        <span className="item__wrapper-right-piece-text">
                            Стоимость за штуку
                        </span>
                        {costPerPiece} ₽
                    </div>
                </div>
                <div>
                    <div className="item__wrapper-right-buttons">
                        <button className="item__wrapper-right-buttons-add">
                            Добавить в сделки
                        </button>
                        <button
                            onClick={() => toggleDone(id)}
                            className={classNames(
                                "item__wrapper-right-buttons-favorite",
                                {
                                    "item__wrapper-right-buttons-favorite-active":
                                        favorite,
                                }
                            )}>
                            <img
                                src={favorite ? favoriteWhite : favoriteDark}
                                alt="favorite icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ItemListChildren;

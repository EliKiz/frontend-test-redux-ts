import { Link, useNavigate } from "react-router-dom";

import "./404.scss";

const Page404 = () => {
    return (
        <div className="error">
            <p
                className="error-title"
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "24px",
                }}>
                Страница не найдена
            </p>
            <div
                style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "24px",
                    marginTop: "30px",
                }}>
                <Link to="/">Вернуться на главную страницу</Link>
            </div>
        </div>
    );
};

export default Page404;

import Header from "../header/Header";
import Filters from "../filters/Filters";
import ItemList from "../itemList/ItemList";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import AppRoutes from "../pages/AppRoutes";

function App() {
    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
}

export default App;

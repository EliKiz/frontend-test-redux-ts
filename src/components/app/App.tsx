import Header from "../header/Header";
import Filters from "../filters/Filters";
import ItemList from "../itemList/ItemList";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <Filters />
            <ItemList />
        </div>
    );
}

export default App;

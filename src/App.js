import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/homePage/Home";
import SearchPage from "./pages/searchPage/SearchPage";
import Footer from "./components/footer/Footer";
import Setting from "./components/settings/setting";
import ImagesPage from "./pages/images/images";

const App = () => {
    return ( <
        Router >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Home }
        />{" "} <
        Route path = "/search"
        exact component = { SearchPage }
        />{" "} <
        Route exact path = "/settings"
        component = { Setting }
        />{" "} <
        Route exact path = "/images"
        component = { ImagesPage }
        />{" "} <
        /Switch>{" "} <
        /Router>
    );
};

export default App;
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "./components/pages/About/About";
import Experts from "./components/pages/Experts/Experts";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/pages/section/footer/Footer";
import NavBar from "./components/pages/section/header/Nav/Navbar";
function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/about">
                        <NavBar></NavBar>
                        <About></About>
                        <Footer></Footer>
                    </Route>
                    <Route path="/expert">
                        <NavBar></NavBar>
                        <Experts></Experts>
                        <Footer></Footer>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;

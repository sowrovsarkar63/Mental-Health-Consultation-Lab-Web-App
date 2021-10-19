import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
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
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;

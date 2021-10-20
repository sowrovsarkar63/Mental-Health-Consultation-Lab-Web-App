import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/authentication/Login/Login";
import Registration from "./components/authentication/Registration";
import About from "./components/pages/About/About";
import Experts from "./components/pages/Experts/Experts";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/pages/section/footer/Footer";
import NavBar from "./components/pages/section/header/Nav/Navbar";
import ServiceDescription from "./components/pages/section/services/ServiceDescription";
import AuthProvider from "./context/AuthProvider";
function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/details/:id">
                            <NavBar></NavBar>
                            <ServiceDescription></ServiceDescription>
                            <Footer></Footer>
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
                        <Route path="/login">
                            <NavBar></NavBar>
                            <Login></Login>
                            <Footer></Footer>
                        </Route>
                        <Route path="/register">
                            <NavBar></NavBar>
                            <Registration></Registration>
                            <Footer></Footer>
                        </Route>
                        {/* not found route */}
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;

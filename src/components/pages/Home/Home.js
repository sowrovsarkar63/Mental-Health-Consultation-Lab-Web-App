import React from "react";
import Contact from "../section/contact/Contact";
import Footer from "../section/footer/Footer";
import Header from "../section/header/Header";
import DisplayServices from "../section/services/DisplayServices";
import Testimonials from "../section/testimonial/Testimonials";

const Home = () => {
    return (
        <>
            <Header></Header>
            {/* need to work more on service section  */}
            <DisplayServices></DisplayServices>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;

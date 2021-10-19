import React from "react";
import Contact from "../section/contact/Contact";
import Footer from "../section/footer/Footer";
import Header from "../section/header/Header";
import Services from "../section/services/Services";
import Testimonials from "../section/testimonial/Testimonials";

const Home = () => {
    return (
        <>
            <Header></Header>
            {/* need to work more on service section  */}
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;

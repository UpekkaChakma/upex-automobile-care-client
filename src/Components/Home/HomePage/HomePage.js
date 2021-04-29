import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import NavbarPage from '../Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import ReviewSection from './ReviewSection/ReviewSection';
import ServicesSection from './Services/ServicesSection';
import WhyChooseSection from './WhyChooseSection/WhyChooseSection';
import MechanicCarousel from './MechanicCarousel/MechanicCarousel';

const HomePage = () => {
    return (
        <div>
            <MDBRow>
                <MDBCol>
                    <NavbarPage></NavbarPage>
                </MDBCol>
            </MDBRow>
            <div>
                <Carousel></Carousel>
            </div>
            <WhyChooseSection></WhyChooseSection>
            <ServicesSection></ServicesSection>
            <MechanicCarousel></MechanicCarousel>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
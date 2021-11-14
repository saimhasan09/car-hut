import React from 'react';
import Services from '../Home/Services/Services';
import AllService from '../Shared/AllService/AllService';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ServiceContainer = () => {
    return (
        <section className='container'>
            <Navbar></Navbar>
            <AllService></AllService> <hr />
            <Footer></Footer>
        </section>
    );
};

export default ServiceContainer;
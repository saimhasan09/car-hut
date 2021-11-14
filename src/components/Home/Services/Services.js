import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const [serviceData, setServiceData] = useState({});
    useEffect(() => {
        fetch('https://boiling-island-95880.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data.slice(0, 6)))
    }, [])

    //console.log(serviceData);
    return (
        <section className='container'>
            <div className="text-center my-5 pt-5 service-title">
                <h1>Choose your<span> Car</span> </h1>
                <p>Let us use our years of experience, skilled employees, and advanced procedures to ensure customer satisfaction.</p>
            </div>
            <div className="service-container">
                {
                    serviceData.length && serviceData.map(item => <ServiceCard key={item._id} item={item}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;
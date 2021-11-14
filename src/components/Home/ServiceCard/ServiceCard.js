import React from 'react';
import { Link } from 'react-router-dom';
import './ServeceCard.css';

const ServiceCard = ({ item }) => {
    const { _id, name, description, imageURL, price } = item;
    return (
        <section className='servece-card-container'>

            <div className='service-card p-3 m-5'>
                <img src={imageURL} className='w-100 img-fluid service-icon py-3' alt="" />
                <h6>{name}</h6>
                <h5 className='text-primary'> $ {price} </h5>
                <p>{description}</p>
                <Link to={`/checkout/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <button className='btn btn-primary'>Buy now</button>
                </Link>
            </div>

        </section>
    );
};

export default ServiceCard;
import React from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';


const ProcessPayment = ({ order }) => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/dashboard" } };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const orderDetails = {
            ...order,
            status: 'Pending'
        }
        const url = `https://boiling-island-95880.herokuapp.com/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => console.log(res));
        alert('Thank you.');
        history.replace(from);

    }

    //console.log('log ;: ', paymentSuccess);
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h5>Payment system coming soon...</h5>
                <button className="btn btn-primary">Confirm Order</button>

            </form>

        </div>
    );
};

export default ProcessPayment;
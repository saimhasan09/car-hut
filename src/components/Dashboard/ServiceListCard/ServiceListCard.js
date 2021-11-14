import React from 'react';
import './ServiceListCard.css';

const ServiceListCard = ({ service }) => {
    const { serviceName, price, cardBrand, status, address, _id } = service;
    const deleteProduct = id => {
        fetch(`https://boiling-island-95880.herokuapp.com/cancel/${id}`, {
            method: 'DELETE'
        })
    }
    //console.log(service);
    return (
        <div className='user-service-card'>
            <div className="d-flex justify-content-between">
                <h5>{serviceName}</h5>
                <button className="btn btn-outline-primary">{status}</button>

            </div>

            <p>$ {price}</p>
            <h6>Payment Status: <span className='text-success'>Paid</span></h6>
            <p>Address: {address}</p>
            <div>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Cancel
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button onClick={() => deleteProduct(_id)} type="button" class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceListCard;
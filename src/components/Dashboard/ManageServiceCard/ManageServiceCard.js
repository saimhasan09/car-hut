import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageServiceCard = ({ service }) => {
    const { _id, name, price, description } = service;
    const deleteProduct = id => {
        fetch(`https://boiling-island-95880.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
    }
    return (
        <div className="row m-2 bg-light">
            <div className="col-md-3">{name}</div>
            <div className="col-md-2 text-center">${price}</div>
            <div className="col-md-3">{description}</div>
            <div className="col-md-3 text-center">


                <div>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <FontAwesomeIcon icon={faTrashAlt} />
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
        </div>
    );
};

export default ManageServiceCard;
import React, { useState } from 'react';

const OrderListCard = ({ order }) => {
    const { serviceName, userName, address, phone, status, _id } = order;
    const [manageStatus, setManageStatus] = useState(status);

    //incomplete server and client
    const handleStatus = (status, id) => {
        const newStatus = { status };
        fetch(`https://boiling-island-95880.herokuapp.com/update/status/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setManageStatus(status);
    }
    return (
        <div className='row mb-3 bg-light'>
            <div className="col-md-2">{serviceName}</div>
            <div className="col-md-2"> {userName} </div>
            <div className="col-md-2"> {address} </div>
            <div className="col-md-2"> {phone} </div>
            <div className="col-md-1 text-center"> Paid </div>
            <div className="col-md-2 text-center">

                <div className="btn-group">
                    <button type="button" className="btn btn-primary text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {manageStatus}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a onClick={() => handleStatus('Pending', _id)} className="dropdown-item" >Pending</a></li>
                        <li><a onClick={() => handleStatus('Approved', _id)} className="dropdown-item">Approved</a></li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default OrderListCard;
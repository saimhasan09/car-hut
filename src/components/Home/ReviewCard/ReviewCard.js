import React, { useState } from 'react';
import './ReviewCard.css';
import Rating from 'react-rating';



const ReviewCard = ({ singleReview }) => {
    const { displayName, designation, comment, photo, star } = singleReview;

    return (
        <div className='review-card'>
            <div className="d-flex">
                <div className='user-photo'>
                    <img src={photo} alt="" />
                </div>
                <div className="user card-header">
                    <h6>- {displayName} </h6>
                    <small><i>( {designation} )</i></small>
                </div>

            </div>
            <Rating
                initialRating={star}
                emptySymbol={<img src="https://cdn-icons-png.flaticon.com/512/126/126482.png" className="icon icon-size" />}
                fullSymbol={<img src="https://image.flaticon.com/icons/png/512/130/130188.png" className="icon icon-size" />}
                readonly

            />

            <p><i>"{comment}"</i> </p>

        </div>
    );
};

export default ReviewCard;
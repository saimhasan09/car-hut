import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div id="carouselExampleCaptions" class="carousel slide mb-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active slide-bg1 row">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1><br />Want to buy a car 1<br />Don't Panic!</h1> <br />
                            <p className='baner-text'>Make your memory with us</p> <br />
                            <Link to='/services'><button className='mt-5 btn service-btn rounded-pill'> See More </button></Link> <br /> <br />
                        </div>
                    </div>
                    <div class="carousel-item slide-bg2">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1><br />Want to buy a car <br />Don't Panic!</h1> <br />
                            <p className='baner-text'>Make your memory with us</p> <br />
                            <button className='btn service-btn rounded-pill'>See More</button> <br /> <br />
                        </div>
                    </div>
                    <div class="carousel-item slide-bg3">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1><br />Want to buy a car <br />Don't Panic!</h1> <br />
                            <p className='baner-text'>Make your memory with us</p> <br />
                            <button className='btn service-btn rounded-pill'> See More </button> <br /> <br />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
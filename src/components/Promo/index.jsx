import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AgeImg from '../../assets/img/age.png';

function Promo() {
    return (
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 col-12 text-center">
                        <img src={AgeImg} alt="age" />
                        <h5>
                            Years Of Experience With <b>Creative Team</b>
                        </h5>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
                            <span>Manufacturing Expertise</span>
                            <h1>We Manufacture Machines</h1>
                            <h4>
                                With 30+ years experience in machine building
                            </h4>
                            <p>
                            Sri Lakshmi Enterprises is a leading machine manufacturing company located in the bustling city of Coimbatore, Tamil Nadu, India. Since its inception in 1995, the company has been providing innovative solutions to its customers in the form of high-quality machines and excellent after-sales services.
                            </p>
                            <Link to="/contact" className="theme-btn">
                                Get In Touch
                                <BsArrowRight style={{ fontSize: '20px', marginLeft: '15px' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;

import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';
import WidgetAbout from './WidgetAbout';
import WidgetGetinTouch from './WidgetGetinTouch';
import WidgetGetinTouchData from './WidgetGetinTouchData';
import WidgetNews from './WidgetNews';
import WidgetNewsData from './WidgetNewsData';

function Footer1() {
    // STATES
    const [email, setEmail] = useState('');

    // HANDLER
    const onchangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <footer className="footer-1 footer-wrap">
            <div className="footer-widgets dark-bg">
                <div className="container">
                    <div className="row">
                        {/* ABOUT WIDGET */}
                        <WidgetAbout
                            text="Sri Lakshmi Enterprise is a leading manufacturing company based in Coimbatore, India, specializing in the production of foundry machinery and industrial sheds. Our company was established with the vision to provide top-quality products that cater to the needs of the foundry industry."
                            fbLink="/"
                            twitterLink="/"
                            instaLink="/"
                            youtubeLink="/"
                        />



                        <div className="col-md-6 col-xl-6 col-12">
                            <div className="single-footer-wid ml-15 site_info_widget">
                                <div className="wid-title">
                                    <h4>Get In Touch</h4>
                                </div>
                                <div className="contact-us" />
                                {WidgetGetinTouchData.map((data) => (
                                    <WidgetGetinTouch
                                        key={data.id}
                                        icon={data.icon}
                                        heading={data.heading}
                                        text={data.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="copyright-info">
                                <p>
                                    &copy; Copyright By <a href="index.html">Sri Lakshmi Enterprises</a> - 2023
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                            <div className="footer-logo" style={{ backgroundColor:"#ffc54f" }}>
                                <a href="#top"  style={{ backgroundColor:"#ED9F00", marginTop:5 }}>
                                    <h2>Sri Lakshmi Enterprises</h2>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block col-12">
                            <div className="scroll-up-btn text-md-right justify-content-end">
                                <a href="#top">
                                    <AiOutlineArrowUp />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer1;

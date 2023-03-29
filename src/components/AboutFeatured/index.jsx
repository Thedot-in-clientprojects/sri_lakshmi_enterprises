import React, { useState } from 'react';
import { FaHardHat, FaPlay, FaRoad } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import aboutImg from '../../assets/img/founder.jpg';
import btnImg from '../../assets/img/skill_bg.jpg';
import IconBox from './IconBox';

function AboutFeatured() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
          
            <section className="about-featured-wrapper section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5 col-12">
                            <div
                                style={{ backgroundImage: `url(${aboutImg})` }}
                            >
                                <img src={aboutImg} className='about-img'/>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                            <div className="block-contents ml-lg-5">
                                <span>About our journey</span>
                                <h1>About Us</h1>
                                <h4>
                                Sri Lakshmi Enterprise is an end-to-end foundry machine manufacturing and service company based in Coimbatore, Tamil Nadu. Established in the year 2010, the company has been providing quality products and services to its customers for over a decade.
                                </h4>
                            </div>

                            <div className="icon-boxs ml-lg-5">
                                <IconBox
                                    icon={<FaHardHat />}
                                    heading="We build machines for your needs"
                                    text="The company offers a wide range of foundry machines such as sand mixers, core shooters, moulding machines, knockout machines, and sand reclamation plants."
                                />
                                <IconBox
                                    icon={<FaRoad />}
                                    heading="Creative Ideas"
                                    text="They are also involved in the design, manufacturing, and installation of customized foundry machines that cater to the specific needs of their customers."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutFeatured;

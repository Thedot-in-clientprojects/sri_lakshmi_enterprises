import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';

function Faq() {
    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <div className="content-block">
                            <p>Get Answers</p>
                            <h1>Get every single answers from here.</h1>
                            <div className="bg-img">
                                <img src={bgImg} alt="" />
                                <div
                                    className="man bg-cover man-1"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-2"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-3"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mt-4 mt-xl-0">
                        <div className="faq-content">
                            <FaqAccordion
                                question="What are foundry machines?"
                                answer="Foundry machines are specialized equipment used in the process of casting metal into different shapes and sizes. They include equipment such as molding machines, melting furnaces, sand mixers, core shooters, and other auxiliary equipment used in the foundry process."
                            />
                            <FaqAccordion
                                question="What is the role of foundry machines in manufacturing?"
                                answer="Foundry machines are used to melt, pour, and shape metal into specific forms required by customers. They are essential in the production of various metal products such as engine blocks, automotive parts, machinery parts, and many other metal products."
                            />
                            <FaqAccordion
                                question="What types of foundry machines are there?"
                                answer="There are different types of foundry machines, including molding machines, melting furnaces, sand mixers, core shooters, shakeout machines, shot blasting machines, and many others. Each machine has a specific role in the foundry process."
                            />
                            <FaqAccordion
                                question="How are foundry machines maintained?"
                                answer="Foundry machines require regular maintenance to ensure optimal performance and longevity. Maintenance activities include cleaning, lubrication, inspection, and repair of worn-out parts. Regular maintenance ensures that the machines operate efficiently, minimize downtime, and increase productivity."
                            />
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;

import React from 'react';
import servicesTwoData from './servicesTwoData';
import ServicesTwoCard from './SevicesTwoCard';

function Services2() {
    return (
        <section className="our-service-wrapper section-padding mtm-30">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            <span>Our Products</span>
                            <p>Our Products</p>
                            <h1>What we do</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesTwoData.map((data) => (
                        <ServicesTwoCard
                            key={data.id}
                            thumbnail={data.thumbnail}
                            icon={data.icon}
                            heading={data.heading}
                            text={data.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services2;

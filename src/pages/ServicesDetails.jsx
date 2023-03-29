import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import ServiceSidebar from '../components/ServiceSidebar';

function ServicesDetails() {
    return (
        <>
            <Header1 />
            <PageBanner
                bannerBg={bannerBg}
                heading="Service Details"
                currentPage="Service Details"
            />
            <section className="service-details-wrapper section-padding">
                <div className="container">
                    <div className="row">
                  
                            <ServiceDetails />
                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    );
}

export default ServicesDetails;

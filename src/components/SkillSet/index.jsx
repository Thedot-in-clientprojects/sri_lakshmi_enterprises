import React from 'react';
import bgImg from '../../assets/img/skill_bg.jpg';
import leftImg from '../../assets/img/skill_img.jpg';
import SkillBar from './SkillBar';

function SkillSet() {
    return (
        <section className="skill-wrapper section-padding pt-0">
            <div className="container">
                <div
                    className="skill-bg pt-100 pb-100 bg-center bg-cover bg-overlay text-white"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                >
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-12 text-center d-none d-xl-block">
                            <img src={leftImg} className="mlm-100" alt="" />
                        </div>
                        <div className="col-xl-6 offset-1 offset-xl-0 col-10 pr-lg-5">
                            <div className="block-contents">
                                <span>Our Skill set</span>
                                <h1>Our Professional and Creative Team</h1>
                                <h4>
                            
                                </h4>
                            </div>
                            {/* PROGRESS BARS */}
                            <SkillBar heading="Building" progress="95%" />
                            <SkillBar heading="Service" progress="90%" />
                            <SkillBar heading="Customer Service" progress="98%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSet;

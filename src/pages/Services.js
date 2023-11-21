import React from "react";

export default function Services(){
    return(

        <section id="services" className="services" align="justify">
            <div className="container">

                <div className="section-title">
                <h2>Services</h2>
                <p>
                As a software architect, I help businesses design, develop, and implement software solutions that meet their needs. I have a strong understanding of software engineering principles and practices, and I am experienced in a variety of technologies and programming languages. I am also skilled in working with stakeholders to understand their requirements and to ensure that the solutions I deliver meet their expectations.</p>
                </div>

                <div className="row">
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                    <div className="icon"><i className="bi bi-briefcase"></i></div>
                    <h4 className="title"><a href="/#">Development</a></h4>
                    <p className="description">
                    I am a software developer with experience in JavaScript, React, and Nest. I use my skills and experience to build high-quality web applications and APIs that are scalable, secure, and user-friendly. </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><i className="bi bi-card-checklist"></i></div>
                    <h4 className="title"><a href="/#">Web Apps</a></h4>
                    <p className="description">
                        Do you need a custom web application that meets your specific needs? I can help you build a high-quality, user-friendly web application that will help you achieve your business goals.</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><i className="bi bi-bar-chart"></i></div>
                    <h4 className="title"><a href="/#">Web Design</a></h4>
                    <p className="description">
                    In need of a web designer to transform your online presence? I'm here to bridge the gap between your vision and reality, creating a website that's not only aesthetically pleasing but also seamlessly functional and user-centric. </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><i className="bi bi-binoculars"></i></div>
                    <h4 className="title"><a href="/#">Sys Support</a></h4>
                    <p className="description">
                    Seeking dependable and cost-effective system support? I'm here to ensure your systems remain functional, prevent disruptions, and address issues promptly and effectively. </p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><i className="bi bi-brightness-high"></i></div>
                    <h4 className="title"><a href="/#">Architecture Management</a></h4>
                    <p className="description">
                    Embark on a journey of IT optimization with my unwavering support in architecture management. Together, we'll craft a strategic plan that enhances your IT architecture and drives your business forward.</p>
                </div>
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon"><a href="/assets/files/cv.pdf" target="blank"><i className="bi bi-calendar4-week"></i></a></div>
                    <h4 className="title"><a href="/assets/files/cv.pdf" target="blank">CV</a></h4>
                    <p className="description">
                    I have attached my CV for your review. It provides a comprehensive overview of my skills, experience, and education. </p>
                </div>
                </div>

            </div>
        </section>
    
    )
}
import React from "react";

export default function Contact() {
    return(

        <section id="contact" className="contact" align="justify">
            <div className="container">

                <div className="section-title">
                <h2>Contact</h2>
                <p>If you have any questions or would like to learn more about my services, please don't hesitate to contact me. I'm always happy to answer your questions and discuss how I can help you achieve your business goals.</p>
                </div>

                <div className="row" data-aos="fade-in">

                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>Bo. Casamata, Tegucigalpa, Honduras.</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>cesarabelfigueroa@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Phone:</h4>
                        <p>+504 3354-9461</p>
                    </div>

                    <div className="phone">
                        <a href="https://www.instagram.com/c.figueroa1197/" target="blank"><i className="bi bi-instagram"></i></a>
                        <h4>Instagram:</h4>
                        <p>@c.figueroa1197</p>
                    </div>

                    </div>

                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <div className="info">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1368.072999628448!2d-87.19498910081006!3d14.10697499455756!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1699386087753!5m2!1ses!2sh" title="Tegucigalpa, Honduras, C.A." frameborder="0" border="0" width="100%" height="290" allowfullscreen></iframe>
                    </div>
                </div>

                </div>

            </div>
        </section>

    )
}
import React from "react";

export default function Portfolio() {
    return(

        <section id="portfolio" className="portfolio section-bg" align="justify">
            <div className="container">

                <div className="section-title">
                <h2>Projects</h2>
                <p>Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                </div>

                <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-card">Apps</li>
                    <li data-filter=".filter-web">Web</li>
                    </ul>
                </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <p align="center">Agile Solutions Web</p>
                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-links">
                        <a href="https://agilesolutions.com/en/" target="blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <p align="center">All Tax Web</p>
                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-links">
                        <a href="https://alltaxplatform.com/" target="blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <p align="center">UnicreditHn Web</p>
                    <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-links">
                        <a href="https://unicredithn.com/" target="blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                    <p align="center">Floppy Shop HN</p>
                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-links">
                        <a href="https://www.instagram.com/floppy_shophn/" target="blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                    <p align="center">Pixel Sites HN</p>
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-links">
                        <a href="https://www.instagram.com/pixelsiteshn/" target="blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <p align="center">Colab/Lead at Tax Intelligence and Management Platform</p>
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-links">
                        <a href="https://www.youtube.com/watch?app=desktop&v=_S9iq-dyPrc" target="blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>

    )
}
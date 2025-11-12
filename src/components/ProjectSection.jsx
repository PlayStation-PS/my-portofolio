import { Container, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

import gesa from '../assets/project/gesa.png';
import egede from '../assets/project/egede.png';
import eoffice from '../assets/project/e-office.png';
import cifas from '../assets/project/cifas.png';
import siunta from '../assets/project/siunta.png';
import inventory from '../assets/project/inventory.png';
import spk from '../assets/project/spk.png';

const ProjectSection = () => {
    const projects = [
        {
            title: "E-OFFICE",
            desc: "A web-based correspondence management system designed for internal and client communications. It streamlines document handling with barcode-based digital signatures, ensuring secure, efficient, and paperless correspondence processes.",
            img: eoffice
        },
        {
            title: "GESA (Geolocation Smart Application)",
            desc: "An IoT-based platform for managing smart street lighting systems. It enables geolocation mapping before pole installation and integrates with smart meters to monitor pole coordinates, lighting status, and energy usage in real time.",
            img: gesa
        },
        {
            title: "E-GEDE (Electronic Government for Desa)",
            desc: "A mobile application designed to connect village administrations with the community. It provides information about village officials, announcements, local events, and village budget transparency to enhance engagement and digital governance.",
            img: egede
        },
        {
            title: "CIFAS (Customer Information File Application System)",
            desc: "A web-based banking application designed to manage customer information forms efficiently. It supports processes such as new account openings, customer data updates, and account closures, providing a centralized and streamlined solution for customer information management within the banking environment.",
            img: cifas
        },
        {
            title: "SIUNTA (Sistem Undian Tabungan)",
            desc: "A web-based raffle application developed for BPR Kita Centradana to automate the SIPANTA BARISTA prize draw. It provides a transparent and efficient digital platform for managing customer savings lotteries, ensuring fairness and accuracy throughout the drawing process.",
            img: siunta
        },
        {
            title: "INVENTORY",
            desc: "A web-based banking inventory management system developed to track and manage office assets efficiently. It allows monitoring of asset availability, allocation, and maintenance across branches, ensuring accurate records and optimized resource utilization within the bank’s operational environment.",
            img: inventory
        },
        {
            title: "SPK (Decision Support System for Credit Eligibility)",
            desc: "A web-based decision support application developed to assess customer credit eligibility. It utilizes predefined criteria and scoring models to assist banking officers in evaluating loan applications objectively, ensuring accurate and consistent creditworthiness assessments.",
            img: spk
        },
    ];

    return (
        <section id="projects" className="py-5 bg-light text-dark">
            <Container>
                <motion.h2
                    className="text-center fw-bold mb-5"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginTop: -10 }}
                >
                    My <span className="text-primary">Projects</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="carousel-wrapper">
                        <Carousel fade pause="hover" interval={6000} indicators={true} className="custom-carousel">
                            {projects.map((p, i) => (
                                <Carousel.Item key={i}>
                                    <div className="carousel-card">
                                        <motion.div
                                            className="image-wrapper"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <img src={p.img} alt={p.title} className="project-image" />
                                        </motion.div>
                                        <div className="project-info text-center mt-4 px-3">
                                            <h4 className="fw-semibold mb-2">{p.title}</h4>
                                            <p className="text-secondary mb-0">{p.desc}</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </motion.div>
            </Container>

            <style>{`
                .carousel-wrapper {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .carousel-card {
                    background: #ffffff;
                    border-radius: 20px;
                    padding: 30px 25px 50px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .image-wrapper {
                    width: 100%;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #f1f3f5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .project-image {
                    width: 80%;
                    height: 320px;
                    object-fit: contain;
                    transition: transform 0.6s ease, filter 0.4s ease;
                }

                .image-wrapper:hover .project-image {
                    transform: scale(1.05);
                    filter: brightness(95%);
                }

                .project-info h4 {
                    color: #212529;
                }

                .project-info p {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    max-width: 700px;
                }

                /* Dot Indicators */
                .carousel-indicators {
                    bottom: -55px;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }

                .carousel-indicators [data-bs-target] {
                    background-color: #0d6efd;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .carousel-indicators .active {
                    opacity: 1;
                    transform: scale(1.2);
                }

                /* Custom next/prev buttons (blue icons) */
                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                    background-color: rgba(13, 110, 253, 0.8); /* biru transparan */
                    background-size: 60%, 60%;
                    border-radius: 50%;
                    padding: 20px;
                }

                .carousel-control-prev-icon:hover,
                .carousel-control-next-icon:hover {
                    background-color: rgba(13, 110, 253, 1);
                }

                .carousel-control-prev,
                .carousel-control-next {
                    width: 8%;
                }

                /* Responsiveness */
                @media (max-width: 992px) {
                    .carousel-card {
                        padding: 25px 20px 40px;
                    }

                    .project-image {
                        height: 260px;
                    }

                    .project-info p {
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 768px) {
                    .carousel-card {
                        padding: 20px 15px 35px;
                    }

                    .project-image {
                        height: 200px;
                        width: 90%;
                    }

                    .project-info h4 {
                        font-size: 1.05rem;
                    }

                    .project-info p {
                        font-size: 0.85rem;
                    }
                }

                @media (max-width: 576px) {
                    .carousel-card {
                        padding: 15px;
                    }

                    .project-image {
                        height: 180px;
                    }

                    .carousel-control-prev,
                    .carousel-control-next {
                        width: 12%;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProjectSection;
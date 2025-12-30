import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import img from '../assets/img/me.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="py-5 bg-light text-dark">
            <Container>
                <motion.h2
                    className="text-center mb-5 fw-bold"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginTop: -15 }}
                >
                    About Me
                </motion.h2>

                <Row className="align-items-center justify-content-center">
                    {/* Photo */}
                    <Col md={4} className="text-center mb-4 mb-md-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={img}
                                alt="Bagus Tresna Bramstya"
                                fluid
                                className="about-img shadow-lg"
                            />
                        </motion.div>
                    </Col>

                    <Col md={8}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ marginTop: -10 }}
                        >
                            <p className="mb-3">
                                Hello! My name is <strong>Bagus Tresna Bramstya</strong> — an <strong>IT Auditor & Fullstack Developer</strong>
                                &nbsp;with more than 2 years of professional experience in <strong>software development, IT governance,</strong>
                                &nbsp;and <strong>infrastructure management</strong>.
                            </p>

                            <p className="mb-3">
                                I hold a <strong>Bachelor’s degree in Informatics Engineering</strong> from
                                <strong> STIKI Indonesia (Instiki)</strong>. Throughout my career, I’ve worked in diverse IT roles —
                                from <strong>Software System Specialist</strong> and <strong>IT Staff</strong> to my current role as an
                                <strong> IT Audit Staff (SKAI)</strong> in the banking industry, where I focus on
                                <strong> system security, compliance,</strong> and <strong> control effectiveness</strong>.
                            </p>

                            <p className="mb-3">
                                I’m deeply passionate about designing <strong>secure, efficient, and scalable solutions</strong>.
                                My daily toolkit includes <strong>React, Node.js, Docker,</strong> and <strong>PostgreSQL</strong> —
                                enabling me to bridge the gap between <strong>technology and compliance</strong> in a dynamic IT environment.
                            </p>

                            <ul className="list-unstyled mt-4 contact-info">
                                <li>📧 <strong>Email:</strong> bagus.tresna6@yahoo.com</li>
                                <li>📞 <strong>Phone:</strong> 0821-4470-8860</li>
                                <li>📍 <strong>Location:</strong> Rungkut, Surabaya, Jawa Timur</li>
                            </ul>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/* Custom Style */}
            <style>{`
                #about {
                    background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
                }

                .about-img {
                    width: 100%;
                    max-width: 280px;
                    height: auto;
                    border-radius: 15px;
                    object-fit: cover;
                    transition: all 0.4s ease;
                }

                .about-img:hover {
                    transform: scale(1.03);
                    box-shadow: 0 0 25px rgba(13, 202, 240, 0.4);
                }

                p {
                    color: #111;
                    font-size: 1.05rem;
                    line-height: 1.75;
                }

                ul.contact-info li {
                    font-size: 1rem;
                    color: #111;
                    margin-bottom: 6px;
                }

                strong {
                    color: #0dcaf0;
                }

                @media (max-width: 768px) {
                    .about-img {
                        max-width: 200px;
                        border-radius: 10px;
                        margin-bottom: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutSection;
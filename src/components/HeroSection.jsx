import { Container, Button } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div
            className="bg-dark text-light text-center d-flex align-items-center"
            style={{ height: '100vh' }}
            id="home"
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ marginTop: 40 }}
                >
                    <h1 className="fw-bold mb-3">
                        Hi, I'm <span className="text-primary">Bagus Tresna Bramstya</span> 👋
                    </h1>

                    <p className="lead mb-3">
                        An <strong>IT Auditor & Fullstack Developer</strong> with experience in <br />
                        system development, IT governance, and infrastructure management.
                    </p>

                    <ReactTyped
                        strings={[
                            "Building secure and scalable applications",
                            "Bridging technology and compliance",
                            "Transforming ideas into efficient solutions"
                        ]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />

                    <div style={{ marginTop: 50 }}>
                        <Button
                            variant="primary"
                            size="lg"
                            href="projects"
                            className="aesthetic-btn"
                        >
                            View My Projects
                        </Button>
                    </div>
                </motion.div>
            </Container>

            <style>{`
                .text-primary {
                    color: #0dcaf0 !important;
                }

                .aesthetic-btn {
                    background: linear-gradient(90deg, #0dcaf0, #007bff);
                    border: none;
                    border-radius: 30px;
                    padding: 12px 36px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    color: #fff;
                    box-shadow: 0 0 15px rgba(13, 202, 240, 0.3);
                    transition: all 0.4s ease;
                }

                .aesthetic-btn:hover {
                    transform: translateY(-3px) scale(1.05);
                    box-shadow: 0 0 25px rgba(13, 202, 240, 0.6);
                    background: linear-gradient(90deg, #11e1ff, #0dcaf0);
                    color: #fff;
                }

                .aesthetic-btn:active {
                    transform: scale(0.98);
                    box-shadow: 0 0 10px rgba(13, 202, 240, 0.3);
                }

                .lead {
                    color: #cfd3d7;
                    font-size: 1.2rem;
                }

                .typed-cursor {
                    color: #0dcaf0;
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 1.6rem;
                    }
                    .lead {
                        font-size: 1rem;
                    }
                    .aesthetic-btn {
                        padding: 10px 28px;
                        font-size: 0.95rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
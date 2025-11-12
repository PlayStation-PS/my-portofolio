import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const ContactSection = () => {
    const whatsappNumber = "6282144708860";

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };

    return (
        <section
            id="contact"
            className="py-5"
            style={{
                background: 'radial-gradient(circle at top, #0b1a2a 0%, #0b0f19 70%)',
                color: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* ✨ Background Glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '-100px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(13, 202, 240, 0.15)',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    zIndex: 0,
                }}
            ></div>

            <Container style={{ position: 'relative', zIndex: 2, marginBottom: 70 }}>
                <motion.h2
                    className="text-center fw-bold mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginTop: 40, fontSize: 42, letterSpacing: 1 }}
                >
                    Let's <span className="text-info">Connect</span>
                </motion.h2>

                <p className="text-center text-secondary mb-5" style={{ maxWidth: 600, margin: '0 auto' }}>
                    Whether you have a question, collaboration idea, or just want to say hi —
                    feel free to reach out. I’d love to connect with you!
                </p>

                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card
                                className="p-5 text-center border-0 shadow-lg contact-card"
                                style={{
                                    borderRadius: '24px',
                                    background: 'rgba(255, 255, 255, 0.06)',
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        onClick={handleWhatsAppClick}
                                        variant="success"
                                        size="lg"
                                        className="px-5 py-3 fw-semibold shadow-lg d-inline-flex align-items-center justify-content-center rounded-pill"
                                        style={{
                                            background: 'linear-gradient(135deg, #25D366, #128C7E)',
                                            border: 'none',
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        <Phone className="me-2" size={22} />
                                        Chat via WhatsApp
                                    </Button>
                                </motion.div>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .contact-card {
                    transition: all 0.5s ease;
                }
                .contact-card:hover {
                    box-shadow: 0 0 40px rgba(13, 202, 240, 0.25);
                    transform: translateY(-8px);
                }
                @media (max-width: 768px) {
                    .contact-card {
                        padding: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactSection
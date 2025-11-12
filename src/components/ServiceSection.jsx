import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { ShieldCheck, Code, Server, Database, Cpu, Workflow } from 'lucide-react'

const ServiceSection = () => {
    const services = [
        {
            icon: <ShieldCheck size={40} />,
            title: 'IT Audit & Security',
            desc: 'Perform comprehensive audits on IT systems, infrastructure, and applications to ensure compliance with OJK/BI regulations and maintain system security and control effectiveness.'
        },
        {
            icon: <Code size={40} />,
            title: 'Web & Mobile Development',
            desc: 'Design and build modern web and mobile applications using React, React Native, and Node.js with a focus on scalability, performance, and clean architecture.'
        },
        {
            icon: <Server size={40} />,
            title: 'Infrastructure & System Management',
            desc: 'Manage and maintain IT infrastructure, including network systems, servers, and security configurations to ensure high availability and stability.'
        },
        {
            icon: <Database size={40} />,
            title: 'Database & API Integration',
            desc: 'Develop secure and efficient RESTful APIs and manage databases (MySQL, PostgreSQL) to optimize data flow and system interoperability.'
        },
        {
            icon: <Cpu size={40} />,
            title: 'DevOps & Docker Deployment',
            desc: 'Implement Docker and containerization to streamline development, testing, and deployment processes for faster and more reliable releases.'
        },
        {
            icon: <Workflow size={40} />,
            title: 'IT Governance & Compliance',
            desc: 'Ensure proper IT governance by aligning systems and operations with industry standards and corporate compliance frameworks.'
        },
    ]

    return (
        <section
            id="service"
            className="py-5 text-light"
            style={{
                background: 'linear-gradient(180deg, #0b0f19 0%, #141a2a 100%)',
                minHeight: '100vh',
            }}
        >
            <Container>
                <motion.h2
                    className="text-center fw-bold mb-5"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginTop: -10 }}
                >
                    My <span className="text-primary">Services</span>
                </motion.h2>

                <Row className="g-4">
                    {services.map((service, idx) => (
                        <Col md={4} sm={6} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="h-100"
                            >
                                <Card className="bg-transparent text-light p-4 shadow-sm service-card h-100 d-flex flex-column justify-content-between text-center">
                                    <div>
                                        <div className="text-info mb-3">{service.icon}</div>
                                        <h5 className="fw-bold mb-3">{service.title}</h5>
                                        <p style={{ color: '#cfd3d7', fontSize: '0.95rem' }}>{service.desc}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style>{`
                .service-card {
                    border: 1px solid rgba(13, 202, 240, 0.2);
                    border-radius: 20px;
                    backdrop-filter: blur(6px);
                    background: rgba(255, 255, 255, 0.05);
                    transition: all 0.4s ease;
                    min-height: 320px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 0 25px rgba(13, 202, 240, 0.3);
                }

                @media (max-width: 768px) {
                    .service-card {
                        padding: 1.5rem;
                        min-height: auto;
                    }
                }
            `}</style>
        </section>
    )
}

export default ServiceSection
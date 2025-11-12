import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Code, ShieldCheck, Cpu, Database, Cloud, Wifi, Wrench, Users, Brain, Clock, MessageSquare, Lightbulb } from 'lucide-react'

const SkillSection = () => {
    const technicalSkills = [
        { icon: <ShieldCheck size={30} />, title: "IT Audit & Security" },
        { icon: <Code size={30} />, title: "Full-Stack Programming (React, React Native, Node.js)" },
        { icon: <Cloud size={30} />, title: "RESTful API Development" },
        { icon: <Cpu size={30} />, title: "Docker & Deployment" },
        { icon: <Database size={30} />, title: "Database (MySQL, PostgreSQL)" },
        { icon: <Wifi size={30} />, title: "Network & System Administration" },
        { icon: <Wrench size={30} />, title: "Hardware & Software Maintenance" }
    ]

    const softSkills = [
        { icon: <Brain size={30} />, title: "Analytical & Critical Thinking" },
        { icon: <Lightbulb size={30} />, title: "Problem Solving" },
        { icon: <Clock size={30} />, title: "Time Management" },
        { icon: <Users size={30} />, title: "Team Collaboration" },
        { icon: <MessageSquare size={30} />, title: "Effective Communication" }
    ]

    return (
        <div
            id="myskill"
            className="text-light py-5"
            style={{
                background: 'linear-gradient(180deg, #0b0f19 0%, #141a2a 100%)',
                minHeight: '100vh'
            }}
        >
            <Container>
                <motion.h2
                    className="text-center fw-bold mb-5"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{ marginTop: -10 }}
                    transition={{ duration: 0.8 }}
                >
                    My <span className="text-primary">Skills</span>
                </motion.h2>

                <Row className="g-4">
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="bg-transparent text-light p-4 shadow-sm skill-card">
                                <h4 className="text-info mb-4 fw-bold">⚙️ Technical Skills</h4>
                                {technicalSkills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="d-flex align-items-center mb-3"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        <div className="me-3 text-info">{skill.icon}</div>
                                        <span>{skill.title}</span>
                                    </motion.div>
                                ))}
                            </Card>
                        </motion.div>
                    </Col>

                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="bg-transparent text-light p-4 shadow-sm skill-card">
                                <h4 className="text-info mb-4 fw-bold">💡 Soft Skills</h4>
                                {softSkills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="d-flex align-items-center mb-3"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        <div className="me-3 text-info">{skill.icon}</div>
                                        <span>{skill.title}</span>
                                    </motion.div>
                                ))}
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .skill-card {
                    border: 1px solid rgba(13, 202, 240, 0.2);
                    border-radius: 20px;
                    backdrop-filter: blur(6px);
                    background: rgba(255, 255, 255, 0.05);
                    transition: all 0.4s ease;
                }

                .skill-card:hover {
                    box-shadow: 0 0 25px rgba(13, 202, 240, 0.3);
                    transform: translateY(-5px);
                }

                @media (max-width: 768px) {
                    .skill-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default SkillSection
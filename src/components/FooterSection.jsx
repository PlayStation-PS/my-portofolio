import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const FooterSection = () => {
    const socialLinks = [
        { icon: <Twitter size={22} />, url: 'https://twitter.com/____svn____', name: 'Twitter' },
        { icon: <Instagram size={22} />, url: 'https://www.instagram.com/bgs.bram_/', name: 'Instagram' },
        { icon: <Facebook size={22} />, url: 'https://www.facebook.com/billy.bht/', name: 'Facebook' },
        { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/bagus-tresna-bramstya-0b6b86232/', name: 'LinkedIn' },
    ];

    return (
        <footer
            className="text-light text-center py-4"
            style={{
                background: 'linear-gradient(180deg, #0b0f19 0%, #141a2a 100%)',
                borderTop: '1px solid rgba(13, 202, 240, 0.2)',
                backdropFilter: 'blur(6px)',
            }}
        >
            <Container>
                <div className="d-flex justify-content-center mb-3 gap-4">
                    {socialLinks.map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light social-icon"
                            whileHover={{ scale: 1.2, color: '#0dcaf0' }}
                            whileTap={{ scale: 0.95 }}
                            title={social.name}
                            style={{
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <motion.p
                    className="mb-0 small"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                    © {new Date().getFullYear()} <span className="text-info fw-semibold">Bagus Tresna Bramstya</span> —
                    Crafted with precision and passion using <span className="text-info">React & Bootstrap</span>.
                </motion.p>
            </Container>

            <style>{`
                .social-icon:hover {
                    color: #0dcaf0 !important;
                    text-shadow: 0 0 10px rgba(13, 202, 240, 0.8);
                }

                footer {
                    position: relative;
                    z-index: 5;
                }
            `}</style>
        </footer>
    );
};

export default FooterSection;

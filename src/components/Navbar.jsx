import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1150);
            setIsOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const heliumVariant = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
    };

    return (
        <nav>
            {isMobile ? (
                <>
                    <motion.span
                        variants={heliumVariant}
                        whileHover="hover"
                        onClick={toggleMenu}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Helium
                    </motion.span>
                    {isOpen && (
                        <motion.div initial={isOpen ? 'open' : 'closed'} animate={isOpen ? 'open' : 'closed'} variants={variants}
                        >
                            <motion.ul>
                                <motion.li>5G</motion.li>
                                <motion.li>Explorer</motion.li>
                                <motion.li>Ecosystem</motion.li>
                            </motion.ul>
                        </motion.div>
                    )}
                </>
            ) : (
                <>
                    <span>Helium</span>
                    <ul>
                        <li>5G</li>
                        <li>Explorer</li>
                        <li>Ecosystem</li>
                    </ul>
                </>
            )}
        </nav>
    );
};

export default Navbar;

import React from 'react';
import mainImg from "./../imgs/main.png";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
        <Navbar/>
        <section>
            <motion.div
            initial={{opacity:0, y:-50}}
            animate={{opacity:1, y:50}}
            transition={{duration:1.45}}
            >

            <div className="text">
                <h1>People-Powered Networks</h1>
                <h3>Start a Wireless Revolution</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur a quas ratione in corporis dolores perferendis
                    aliquid! Est, repellat ducimus?
                </p>
            </div>
            </motion.div>
            <motion.div
            initial={{opacity:0, x:500}}
            animate={{opacity:1, x:0}}
            transition={{duration:1.44}}
            >
            <img src={mainImg} alt="Image Composant Helium" />
            </motion.div>
        </section>
        <Footer/>
        </>
    );
};

export default Home;
import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y:{
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

const Loader = () => {
    const [anime, cycleAnime] = useCycle("animationOne", "animationTwo");

    return (
        <>
        <motion.div className="loader"
            variants={loaderVariants}
            animate={anime}
        >
        </motion.div>
        <div className="toggle-loader" onClick={() => cycleAnime()}>
            Cycle Loader
        </div>
        </>
    );
};

export default Loader;
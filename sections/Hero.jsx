'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} !pb-0`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-center flex-col relative z-10'>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          José da Silva
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row justify-center items-center'
        >
          <h2 className={styles.heroHeading2}>Software developer</h2>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;

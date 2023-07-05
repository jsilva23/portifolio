'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[1] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[12px] border-[1px] border-[#6A6A6A] relative'
      >
        <div>
          <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white'>
            Chris Pine
          </h4>
        </div>

        <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white italic'>
          “Programming is not about what you know; it's about what you can
          figure out.”
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;

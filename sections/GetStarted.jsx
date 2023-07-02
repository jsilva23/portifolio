'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TitleText
        title={<>Get started with just a few clicks</>}
        textStyles='text-center'
      />
      <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
        {startingFeatures.map((feature, index) => (
          <StartSteps
            key={feature}
            number={`${index < 10 ? '0' : ''} ${index + 1}`}
            text={feature}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default GetStarted;

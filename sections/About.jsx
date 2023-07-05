'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        Com mais de 3 anos de experiência em desenvolvimento{' '}
        <span className='font-extrabold text-white'>frontend</span>, eu adquiri
        habilidades sólidas em HTML, CSS e JavaScript, bem como experiência com
        frameworks populares como React, Next.js e typescript. Também tenho
        experiência em trabalhar com ferramentas de controle de versão como Git,
        e em criar sites responsivos e acessíveis. As minhas ambições futuras
        envolvem continuar aprendendo e evoluindo as minhas habilidades
        técnicas, bem como expandir minhas oportunidades de carreira.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;

'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { FaFileDownload } from 'react-icons/fa';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import Link from 'next/link';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    viewport={{ once: true, amount: 0.25 }}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
          Encontra-me nas redes sociais
        </h4>
      </div>

      <div className='flex flex-col relative'>
        <div className='mb-[40px] h-[2px] bg-white opacity-10' />

        <div>
          <ul className='flex gap-4'>
            {socials.map((social) => (
              <ul key={social.name}>
                <Link
                  href={social.url}
                  target='blank'
                  className='font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'
                >
                  {social.name}
                </Link>
              </ul>
            ))}
          </ul>
          <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>
            josesilva23p@gmail.com
          </p>
        </div>
        <div className={`absolute right-0 top-1/2`}>
          <Link
            href={'/jsilva-resume.pdf'}
            download={true}
            className='font-normal flex items-center gap-2  text-[18px] text-[#B0B0B0] leading-[32.4px]'
          >
            Baixar CV
            <FaFileDownload size={20} />
          </Link>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;

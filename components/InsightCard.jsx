'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import Link from 'next/link';

const InsightCard = ({ imgUrl, title, link, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex justify-center gap-4'
  >
    <div className='flex  md:flex-row flex-col'>
      <img
        src={imgUrl}
        alt='planet-01'
        className='md:w-[270px] w-full h-[250px] rounded-[12px] overflow-hidden object-contain'
      />

      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
        <Link href={link} target='_blank'>
          <h4 className='font-normal lg:text-[42px] text-[26px] text-white hover:underline'>
            {title}
          </h4>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;

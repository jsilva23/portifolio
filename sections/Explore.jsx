'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import styles from '../styles';
import { projects } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText } from '../components';
import Link from 'next/link';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title={'Projectos'} textStyles='text-center mb-10' />
        <PhotoAlbum
          layout='columns'
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            return 3;
          }}
          spacing={10}
          photos={projects}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <div
              style={wrapperStyle}
              rel='noreferrer noopener'
              className='group relative overflow-hidden rounded-[12px]'
            >
              <div className='group-hover:scale-110 transition-all duration-[0.25s] ease-in-out'>
                {renderDefaultPhoto({ wrapped: true })}
              </div>
              <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.65)] opacity-0 group-hover:opacity-100 transition-all duration-[0.45s] ease-in-out'>
                <h1 className='text-white text-center text-2xl font-bold uppercase mb-5'>
                  {photo.title}
                </h1>
                <div className=''>
                  {photo.link && (
                    <Link
                      href={photo.link}
                      target='_blank'
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    >
                      Demo
                    </Link>
                  )}

                  {photo.gitHub && (
                    <Link
                      href={photo.gitHub}
                      target='_blank'
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    >
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        />
      </motion.div>
    </section>
  );
};

export default Explore;

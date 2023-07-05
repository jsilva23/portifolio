import Image from 'next/image';
import styles from '../styles';

const StartSteps = ({ img }) => (
  <div className={`${styles.flexCenter} flex-row max-w-md`}>
    <div
      className={`${styles.flexCenter} relative w-[70px] h-[70px] rounded-[12px] bg-[#323F5D]`}
    >
      <Image src={img} alt='' fill className=' object-contain' />
    </div>
  </div>
);

export default StartSteps;

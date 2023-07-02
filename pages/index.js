import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
} from '../sections';

const Home = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <About />
    <GetStarted />
    <Insights />
    <Explore />
    <Feedback />
    <Footer />
  </div>
);

export default Home;

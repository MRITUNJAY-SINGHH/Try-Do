import { useEffect, useRef, useState } from "react";
import AboutUs from "../sections/AboutUs";
import CountUp from 'react-countup';
import company1 from '../assets/images/brand/brand-01.png';
import company2 from '../assets/images/brand/brand-02.png';
import company3 from '../assets/images/brand/brand-03.png';
import company4 from '../assets/images/brand/brand-04.png';
import company5 from '../assets/images/brand/brand-05.png';
import company6 from '../assets/images/brand/brand-06.png';
import findingUs from '../assets/images/bg/finding-us-01.png'


const AboutPage = () => {

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const countUpRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewPortEntered(true);
        } else {
          setViewPortEntered(false);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  const aboutCount = [
    {
      count: 120,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
    {
      count: 30,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
    {
      count: 150,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
    {
      count: 20,
      title:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
    },
  ];





  return (
    <div>
      <div className='pt-32 pb-48 bg-cover bg-center bg-no-repeat bg_image bg_image--18 bg_image '>
        <div className='container mx-auto'>
          <div className='flex justify-center'>
            <div className='text-center pt-24'>
              <h2 className='title theme-gradient text-[72px] font-bold'>
                About
              </h2>
              <p className='text-white'>
                Home / <span className='text-[#f9004d]'>About</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
      <div className='py-20 max-w-[1260px] mx-auto'>
        <h3 className='text-4xl leading-6 text-[#1f1f25] font-medium  text-center pb-10'>
          Our Fun Facts
        </h3>
        <div
          className='about-count flex items-center justify-between my-[30px]'
          ref={countUpRef}
        >
          {aboutCount.map((count, index) => (
            <div key={index} className='w-[20%] text-center text-index'>
              <h1 className='heading-1'>
                <CountUp
                  end={viewPortEntered ? count.count : 0}
                  start={0}
                  suffix={count.plus ? '+' : '+'}
                  duration={5}
                  redraw={true}
                >
                  {({ countUpRef, start }) => {
                    if (viewPortEntered) {
                      start();
                    }
                    return <span ref={countUpRef} />;
                  }}
                </CountUp>
              </h1>
              <h4>{count.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className='rn-finding-us-area rn-finding-us bg_color--1'>
        <div className='inner'>
          <div className='content-wrapper'>
            <div className='content'>
              <h4 className='theme-gradient'>Find Your Work Now</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that.
              </p>
              <a className='rn-btn btn-white' href='/about'>
                Get Started
              </a>
            </div>
          </div>
          <div className='thumbnail'>
            <div className='image'>
              <img src={findingUs} alt='Finding Images' />
            </div>
          </div>
        </div>
      </div>

      <div className='company pt-20 pb-20'>
        <div className='flex flex-wrap gap-y-12'>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company1} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company2} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company3} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company4} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company5} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company6} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company4} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company5} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company6} alt='company' />
          </div>
          <div className='brand flex justify-center items-center text-center p-5 basis-[20%]'>
            <img src={company1} alt='company' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

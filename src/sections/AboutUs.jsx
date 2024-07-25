/* eslint-disable react/no-unescaped-entities */
import aboutImage from '../assets/images/about/about-1.jpg';
      
const AboutUs = () => {
  return (
    <div className='flex flex-wrap items-center about justify-center max-w-[1260px] mx-auto gap-20 pt-20 pb-20'>
      <div className='w-[40%]'>
        <div className='thumbnail'>
          <img className='w-4/3' src={aboutImage} alt='About Images' />
        </div>
      </div>
      <div className='w-1/2'>
        <div className='about-inner inner'>
          <div className='section-title'>
            <h2 className='title'>About</h2>
            <p className='description'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum,
            </p>
          </div>
          <div className='flex flex-wrap mt-8 sm:mt-2'>
            <div className='lg:w-6/12 w-full'>
              <div className='about-us-list'>
                <h3 className='title'>Who we are</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
            <div className='lg:w-6/12 w-full'>
              <div className='about-us-list'>
                <h3 className='title'>Who we are</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

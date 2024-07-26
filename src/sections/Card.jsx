/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({ Heading, bg, cardBg }) => {
  return (
    <div>
      <div className={`service-area pt-32 pb-32 ${bg}`}>
        <div className={`container`}>
          <div className='row mb-20'>
            <div className='col-lg-12'>
              <div className='section-title text-center mb-5'>
                <h2>{Heading}</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, <br /> but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center service-one-wrapper gap-10'>
            <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-[27%] xl:w-[27%] ${cardBg}`}>
              <a href='/service-details'>
                <div className='service service__style--2'>
                  <div className='icon'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6'></path>
                      <line x1='2' y1='20' x2='2' y2='20'></line>
                    </svg>
                  </div>
                  <div className='content'>
                    <h3 className='title'>Business Strategy</h3>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-[27%] xl:w-[27%] ${cardBg}`}>
              <a href='/service-details'>
                <div className='service service__style--2'>
                  <div className='icon'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
                      <polyline points='2 17 12 22 22 17'></polyline>
                      <polyline points='2 12 12 17 22 12'></polyline>
                    </svg>
                  </div>
                  <div className='content'>
                    <h3 className='title'>Website Development</h3>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-[27%] xl:w-[27%] ${cardBg}`}>
              <a href='/service-details'>
                <div className='service service__style--2'>
                  <div className='icon'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                      <circle cx='9' cy='7' r='4'></circle>
                      <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                      <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                    </svg>
                  </div>
                  <div className='content'>
                    <h3 className='title'>Marketing &amp; Reporting</h3>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-[27%] xl:w-[27%] ${cardBg}`}>
              <a href='/service-details'>
                <div className='service service__style--2'>
                  <div className='icon'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='2'
                        y='3'
                        width='20'
                        height='14'
                        rx='2'
                        ry='2'
                      ></rect>
                      <line x1='8' y1='21' x2='16' y2='21'></line>
                      <line x1='12' y1='17' x2='12' y2='21'></line>
                    </svg>
                  </div>
                  <div className='content'>
                    <h3 className='title'>Mobile App Development</h3>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-[27%] xl:w-[27%] ${cardBg}`}>
              <a href='/service-details'>
                <div className='service service__style--2'>
                  <div className='icon'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6'></path>
                      <line x1='2' y1='20' x2='2' y2='20'></line>
                    </svg>
                  </div>
                  <div className='content'>
                    <h3 className='title'>Website Development</h3>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-[27%] xl:w-[27%] ${cardBg}`}>
              <a href='/service-details'>
                <div className='service service__style--2'>
                  <div className='icon'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='2'
                        y='3'
                        width='20'
                        height='14'
                        rx='2'
                        ry='2'
                      ></rect>
                      <line x1='8' y1='21' x2='16' y2='21'></line>
                      <line x1='12' y1='17' x2='12' y2='21'></line>
                    </svg>
                  </div>
                  <div className='content'>
                    <h3 className='title'>Marketing &amp; Reporting</h3>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

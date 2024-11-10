import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col md:flex-row justify-start items-start mt-20 px-4 md:px-10 lg:px-40">

      {/* Image */}
      <Image
        src={"/dp.jpg"}
        alt="Profile"
        width={300}
        height={300}
        className='mx-auto md:mx-0 rounded-full  shadow-2xl w-[100px] md:w-[300px] lg:w-[350px] xl:w-[300px]'
      />

      <div className="text-center md:text-left mt-6 md:mt-0 md:ml-20">
        <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[60px] font-semibold">
          This is
        </h1>
        <i>
          
          <h1
            className="text-[50px] font-serif sm:text-[20px] md:text-[30px] lg:text-[70px] mt-2 leading-[60px] sm:leading-[50px] md:leading-[60px] lg:leading-[90px] "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            MAIMOONA <br /> ZEHRA
          </h1>
        </i>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
          Full-Stack Developer | Creative Technologist
        </p>
      </div>

    </div>
  );
};

export default Hero;

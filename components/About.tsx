import React from 'react'

const About = () => {
  return (
    <div id='about' className="px-4 md:px-20 mt-40">
      <h1 className="text-center text-[32px] md:text-[40px] font-semibold mt-8 mb-8">GET TO KNOW ABOUT ME</h1>

      <div className='flex flex-col gap-12 md:gap-20 mb-20 md:mb-32 mt-8 md:mt-20 md:flex-row'>

        {/* About Me Section */}
        <div className="w-full md:w-[483px] h-[auto] md:h-[316px] bg-[#eef4ed] bg-opacity-10 box-shadow text-white mt-8 shadow-lg p-4 md:p-6" data-aos="zoom-in">
          <h1 className=' text-[32px] md:text-[40px] font-semibold leading-[38px] ml-3 mt-3'>About me</h1>
          <p className='mt-6 text-[16px] md:text-[18px] ml-3'>
            I am a dedicated student pursuing a Bachelor&apos;s in Computational Finance at NED University, currently in my 3rd semester. Alongside my academic pursuits, I am developing advanced skills in Generative AI at GIAIC, expanding my expertise in emerging technologies and data-driven solutions.
          </p>
        </div>

        {/* Query Section */}
        <div className="w-full md:w-[483px] h-[auto] md:h-[356px] bg-transparent text-white mt-8 p-4 md:p-6" data-aos="zoom-in">
          <h1 className='text-[28px] md:text-[34px] font-semibold mb-4'>Any type of question or query.</h1>  
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className='flex flex-col gap-6'>
            <input type="hidden" name="access_key" value="6f0767e9-b9c6-4428-9d5f-7568e6652602" />
              <label htmlFor="query" className="block text-lg text-white">Let&apos;s talk</label>
              <textarea
                id="query"
                name="query"
                required
                className="border-b border-white bg-transparent focus:outline-none focus:border-[#f48c06] py-2 text-gray-200 placeholder-gray-500"
                placeholder="Type anything, like &quot;Welcome to the team!&quot;"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 py-2 px-8 bg-[#fb5607] text-white font-semibold rounded hover:bg-[#6c757d] transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default About

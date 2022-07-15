import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Adnan, a MERN Stack Developer!</p>
          </div>
          <div>
            <p>Graduated from Comsats in computer sciences, i've worked with Data Science, Web Development both at Frontend and Backend, with version control such as Git. But my main expertise lie as a MERN Stack Developer. I have expertise in building pixel perfect UI with React.js, making API calls from the frontend, working with databases mainly MongoDB, handling backend using Express.js, a framework of Node.js.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

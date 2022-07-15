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
            <p>I've done my Bachelors in Computer Sciences from Comsats. I've worked with Frontend technologies from HTML to CSS, Tailwind CSS, React.js and Next.js. I've built custom components, worked with API integration, state management libraries such as Redux or built in Context API and React-router as well. On the backend side, i've worked with creating API's using Express and Node.js, integrating databases using Mongoose.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

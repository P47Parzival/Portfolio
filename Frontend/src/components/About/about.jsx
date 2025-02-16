import React from 'react';
import Footer from '../footer';

const About = () => {
  return (
    <div className='bg-black max-h-screen'>
      {/* Header Section */}
      <div className='pt-20 lg:pt-28 px-4'>
        <div className='flex flex-col items-center text-center max-w-screen-lg mx-auto'>
          <h1 className='text-3xl lg:text-4xl font-bold text-white font-serif'>Hey, I am</h1>
          <h1 className='text-3xl lg:text-4xl font-bold text-cyan-500 font-serif'>Dhruv Mali</h1>
          <h1 className='text-3xl lg:text-4xl font-bold text-white font-serif'>
            an aspiring Full Stack Engineer
          </h1>
        </div>
      </div>

      {/* About Content Section */}
      <div className='px-4 lg:px-20 max-w-screen-lg mx-auto'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between pt-12'>
          {/* Text Section */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            <p className='text-lg text-white mt-4 font-serif'>
              Hi, I’m Dhruv Mali, a passionate MERN Stack Developer and technology enthusiast. <br />
              I thrive on solving challenges and transforming ideas into impactful digital experiences.
            </p>
            <p className='text-lg text-white mt-4 font-serif'>
              🌟 <strong>My Vision</strong> <br />
              I aim to make web development more accessible to everyone, breaking down complex concepts into<br />
              actionable steps. I remember how daunting it felt when I first started exploring code,<br />
              which fuels my commitment to helping others navigate this exciting field.<br />
            </p>
          </div>

          {/* Image Section */}
          <div className='mt-8 lg:mt-0 lg:w-1/2 flex justify-center'>
            <img
              className='rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover'
              src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/Dhruv_pf_image.jpeg?raw=true"
              alt="Dhruv Mali"
            />
          </div>
        </div>

        {/* Additional Text Section */}
        <div className='p-4 lg:p-10 text-center lg:text-left'>
          <p className='text-lg text-white mt-4 font-serif'>
            💡 <strong>My Journey</strong> <br />
            I’ve delved deep into the MERN stack (MongoDB, Express.js, React.js, and Node.js), creating full-stack applications that are both scalable and efficient.
          </p>
          <p className='text-lg text-white mt-4 font-serif'>
            📚 <strong>Why I Do What I Do</strong> <br />
            I believe technology is a powerful tool for change, and I’m eager to leverage my expertise to contribute to meaningful projects.
          </p>
        </div>

        {/* Skills Section */}
        <div className='pt-8'>
          <h1 className='text-2xl text-center font-bold text-cyan-500 font-serif'>
            Technologies & Languages I Use
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center'>
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/htmlcssjs.png?raw=true" alt="HTML, CSS, JS" />
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/react.png?raw=true" alt="React" />
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/nodejs.png?raw=true" alt="Node.js" />
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/mongo.png?raw=true" alt="MongoDB" />
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/c.png?raw=true" alt="C" />
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/java.png?raw=true" alt="Java" />
            <img className='h-20' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/python.png?raw=true" alt="Python" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='pt-10'>
        <Footer />
      </div>
    </div>
  );
};

export default About;

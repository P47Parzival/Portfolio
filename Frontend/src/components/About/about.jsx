import React from 'react'
import Footer from '../footer';

const About = () => {
  return (
    <div>
      <div className='pt-28 flex justify-center'>
        <h1 className='text-4xl bold text-white font-serif'>Hey I am</h1>
        <h1 className='text-4xl bold text-cyan-500 font-serif'>&nbsp;Dhruv Mali</h1>
        <h1 className='text-4xl bold text-white font-serif'>&nbsp;an aspiring Full stack Engineer</h1>
      </div>
      <div>
        <div className='flex justify-evenly pt-12'>
          <div>
            <p className='text-lg bold text-white mt-4 font-serif'>
              Hi, I’m Dhruv Mali, a passionate MERN Stack Developer and technology enthusiast. <br />
              My journey into the world of web development has been driven by a love for creating <br />
              innovative solutions and sharing knowledge with others. <br />
              From crafting user-friendly interfaces to building robust backend systems, <br />
              I thrive on solving challenges and transforming ideas into impactful digital experiences.
            </p>
            <p className='text-lg bold text-white mt-4 font-serif'>
              🌟 My Vision <br />
              I aim to make web development more accessible to everyone, breaking down complex concepts into<br />
              actionable steps. I remember how daunting it felt when I first started exploring code,<br />
              which fuels my commitment to helping others navigate this exciting field.<br />
            </p>
          </div>
          <div className='h-auto w-[200px]'>
            <img className='rounded-lg' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/Dhruv_pf_image.jpeg?raw=true" alt="myimage" />
          </div>
        </div>
        <div className='p-10'>
          <p className='text-lg bold text-white mt-4 font-serif'>
            💡 My Journey <br />
            Over time, I’ve delved deep into the MERN stack (MongoDB, Express.js, React.js, and Node.js), creating full-stack applications that are both scalable and efficient.
            Whether it’s developing responsive websites or working on APIs, every project has been a stepping stone in honing my skills and expanding my horizons.
          </p>
          <p className='text-lg bold text-white mt-4 font-serif'>
            📚 Why I Do What I Do <br />
            I believe technology is a powerful tool for change, and I’m eager to leverage my expertise to contribute to meaningful projects. As I grow in my career, my goal is not just to build solutions but to inspire others to embark on their own tech journeys.
          </p>
        </div>
        <div>
          <h1 className='pt-8 text-2xl text-center bold text-cyan-500 font-serif'>Certainly i have good experience with many languages, some of which are</h1>
          <div className='flex justify-center flex-wrap'>
            <img className='h-64' src=" https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/htmlcssjs.png?raw=true" alt="" />
            <img className='h-64' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/react.png?raw=true" alt="" />
            <img className='h-56 pt-4' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/nodejs.png?raw=true" alt="" />
            <img className='h-60' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/mongo.png?raw=true" alt="" />
            <img className='h-64' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/c.png?raw=true" alt="" />
            <img className='h-64' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/java.png?raw=true" alt="" />
            <img className='h-64' src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/python.png?raw=true" alt="" />
          </div>
        </div>
        <Footer className='pt-10'></Footer>
      </div>
    </div>
  )
}

export default About

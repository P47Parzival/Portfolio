import React from 'react';
import BlurText from '../Animations/BlurText';

const Body = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className='flex flex-col lg:flex-row justify-evenly items-center mt-16 lg:mt-32 bg-black p-4 lg:p-0'>
            <div className='text-center lg:text-left mb-8 lg:mb-0'>
                <h1 className='text-4xl bold text-cyan-500 font-serif pb-2'>Hey,</h1>
                
                <BlurText
                    text="This is Dhruv Mali!"
                    delay={100}  // Reduced delay for faster animation
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl text-white mb-4" // Ensure visibility
                />
                
                <p className='text-lg lg:text-xl text-white mt-4 font-serif'>
                    Aspiring MERN full-stack developer with a passion for building scalable, <br />
                    efficient web applications. Driven by curiosity and a love for technology, <br />
                    Dhruv is honing his expertise in JavaScript frameworks and modern development practices. <br />
                </p>
                <p className='text-l text-white mt-3 font-serif opacity-50'>~ChatGPT</p>
            </div>
            <div className='h-auto w-[250px] lg:w-[300px]'>
                <img
                    className='rounded-lg'
                    src="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/Dhruv_pf_image.jpeg?raw=true"
                    alt="Dhruv Mali"
                />
            </div>
        </div>
    );
};

export default Body;

import React from 'react';

const Body = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-evenly items-center mt-16 lg:mt-32 bg-black p-4 lg:p-0'>
            <div className='text-center lg:text-left mb-8 lg:mb-0'>
                <pre>
                    <h1 className='text-4xl bold text-cyan-500 font-serif'>Hey,</h1>
                    <h1 className='text-4xl bold text-white font-serif'>Dhruv Mali here</h1>
                </pre>
                <pre className='text-lg lg:text-xl bold text-white mt-4 font-serif'>
                    Aspiring MERN full-stack developer with a passion for building scalable, <br />
                    efficient web applications.Driven by curiosity and a love for technology,<br />
                    Dhruv is honing his expertise in JavaScript frameworks and modern development practices.<br />
                    With a strong foundation in front-end and back-end technologies,<br />
                    he is committed to crafting seamless user experiences and robust solutions <br />
                </pre>
                <p className='text-l bold text-white mt-3 font-serif opacity-50'>~Chatgpt</p>
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
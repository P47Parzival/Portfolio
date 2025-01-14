import React from 'react'
import Ball from './bounce_ball'

const Myjourney = () => {
    return (
        <div>
            <div className='text-center mt-32 mb-32'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl bold text-cyan-500 font-serif'>My&nbsp;</h1>
                    <h1 className='text-4xl bold text-white font-serif'>Journey so far</h1>
                </div>
                <p className='text-white font-serif mt-5 text-xl'>Climbing the ladders of my life Till i reach the top</p>
            </div>
            <div className='flex justify-evenly'>
                <Ball></Ball>
                <div>
                    <ul>
                        <li className='text-white font-serif pb-5 animate-pulse'>Currently 2nd Year Btech(CSE(AIML))</li>
                        <li className='text-white font-serif pb-5'>Completed Class 12th year(2023)</li>
                        <li className='text-white font-serif pb-5'>Completed Class 10th year(2021)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Myjourney
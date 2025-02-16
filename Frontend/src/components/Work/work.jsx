import React from 'react'
import Workcard from './workcard'

const Work = () => {
    return (
        <div className='pt-28 flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-screen-lg place-items-center'>
                <Workcard 
                    sitelink="https://astrolabdm.netlify.app/" 
                    pcontent="This was my first website made solely on HTML & CSS" 
                    appname="Astrodm" 
                    imagesource="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/blackhole.png?raw=true" 
                />
                <Workcard 
                    sitelink="#" 
                    pcontent="My portfolio which you are currently on" 
                    appname="Portfolio" 
                    imagesource="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/Dhruv_pf_image.jpeg?raw=true" 
                />
                <Workcard 
                    sitelink="https://github.com/P47Parzival/Thinkbiz-heckathon-" 
                    pcontent="My techathon project on food loss" 
                    appname="Hunger Run" 
                    imagesource="https://github.com/P47Parzival/Thinkbiz-heckathon-/blob/main/src/images/wha.jpg?raw=true" 
                />
            </div>
        </div>
    )
}

export default Work

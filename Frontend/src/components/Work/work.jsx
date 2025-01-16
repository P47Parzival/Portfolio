import React from 'react'
import Workcard from './workcard'

const Work = () => {
    return (
        <div className='pt-28 flex justify-evenly'>
            <Workcard sitelink="https://astrolabdm.netlify.app/" pcontent="These was my first website made solely on HTML & CSS(Tailwind css) in 1st year of college" appname="Astrodm" imagesource="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/blackhole.png?raw=true">
            </Workcard>
            <Workcard sitelink="#" pcontent="My portfolio which you are currently on" appname="Portfolio" imagesource="https://github.com/P47Parzival/Portfolio/blob/main/Frontend/src/assets/Dhruv_pf_image.jpeg?raw=true">
            </Workcard>
            <Workcard sitelink="https://github.com/P47Parzival/Thinkbiz-heckathon-" pcontent="My techathon project on food loss" appname="Hunger Run" imagesource="https://github.com/P47Parzival/Thinkbiz-heckathon-/blob/main/src/images/wha.jpg?raw=true">
            </Workcard>
        </div>
    )
}

export default Work

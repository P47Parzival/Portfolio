import React from 'react'
import Cardcerti from './certi_card'
import styled from 'styled-components'

const Certificates = () => {
  return (
    <section>
      <div className='flex justify-center mt-32'>
        <h1 className='text-4xl bold text-cyan-500 font-serif'>My&nbsp;</h1>
        <h1 className='text-4xl bold text-white font-serif'>Certificates</h1>
      </div>
      <div className='grid-container mt-14 pl-20' style={myStyle}>
        <Cardcerti image="src\assets\sql_basic certificate_page-0001.jpg" Card_title="HackerRank SQL Certificate"
        Description="Recently Earned an SQL Knowledge Certificate and even got 5⭐ Badge on Hackerrank for solving Basic to Advance level quetions">
        </Cardcerti>
        <Cardcerti image="src\assets\Lets updgrade node js certificate_page-0001.jpg" Card_title="MERN Stack Certificate"
        Description="Recently got and opportunity to attend a bootcamp from let's upgrade which helped me advance my knowledge about MERN stack">
        </Cardcerti>
        <Cardcerti image="src\assets\tic_tac_toe.jpg" Card_title="Hackathon Certificate"
        Description="Gained Knowledge and experience afer attending a 36 hour in-person hackathon at DAIICT">
        </Cardcerti>
        <Cardcerti image="src\assets\tata_imagination.jpg" Card_title="TATA Imagination Quiz"
        Description="TATA imagination quiz organized by tata foundation">
        </Cardcerti>
      </div>
    </section>
  )
}

const myStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  rowGap: '45px',
  // padding: '20px'
};

export default Certificates

import React from 'react';
import styled from 'styled-components';

const Ball = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 0 auto;
  }

  .loader:before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #2a9d8f;
    animation: loading-bounce 0.5s ease-in-out infinite alternate;
  }

  .loader:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
    animation: loading-step 1s ease-in-out infinite;
  }

  @keyframes loading-bounce {
    0% {
      transform: scale(1, 0.7);
    }

    40% {
      transform: scale(0.8, 1.2);
    }

    60% {
      transform: scale(1, 1);
    }

    100% {
      bottom: 140px;
    }
  }

  @keyframes loading-step {
    0% {
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
              0 10px 0 #f2f2f2,
              -35px 50px 0 #f2f2f2,
              -70px 90px 0 #f2f2f2;
    }

    100% {
      box-shadow: 0 10px 0 #f2f2f2,
              -35px 50px 0 #f2f2f2,
              -70px 90px 0 #f2f2f2,
              -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }`;

export default Ball;


// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const Ball = () => {
//   const [step, setStep] = useState(0);

//   // Journey texts
//   const journeyTexts = [
//     "Completed Class 10",
//     "Completed Class 12",
//     "Currently pursuing B.Tech (2nd Year)",
//   ];

//   useEffect(() => {
//     // Update step every second (or match the animation duration)
//     const interval = setInterval(() => {
//       setStep((prevStep) => (prevStep + 1) % journeyTexts.length);
//     }, 1000); // Change to match the timing of your animation

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [journeyTexts.length]);

//   return (
//     <StyledWrapper>
//       <div className="loader" />
//       <div className="text-container">{journeyTexts[step]}</div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .loader {
//     position: relative;
//     width: 120px;
//     height: 90px;
//     margin: 0 auto;
//   }

//   .text-container {
//     margin-top: 20px;
//     font-size: 16px;
//     font-weight: bold;
//     color: #264653;
//     text-align: center;
//     font-family: Arial, sans-serif;
//     animation: fade-in-out 5s ease-in-out infinite;
//   }

//   .loader:before {
//     content: "";
//     position: absolute;
//     bottom: 30px;
//     left: 50px;
//     height: 30px;
//     width: 30px;
//     border-radius: 50%;
//     background: #2a9d8f;
//     animation: loading-bounce 2.5s ease-in-out infinite alternate;
//   }

//   .loader:after {
//     content: "";
//     position: absolute;
//     right: 0;
//     top: 0;
//     height: 7px;
//     width: 45px;
//     border-radius: 4px;
//     box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
//     animation: loading-step 5s ease-in-out infinite;
//   }

//   @keyframes loading-bounce {
//     0% {
//       transform: scale(1, 0.7);
//     }
//     40% {
//       transform: scale(0.8, 1.2);
//     }
//     60% {
//       transform: scale(1, 1);
//     }
//     100% {
//       bottom: 140px;
//     }
//   }

//   @keyframes loading-step {
//     0% {
//       box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
//                   0 10px 0 #f2f2f2,
//                   -35px 50px 0 #f2f2f2,
//                   -70px 90px 0 #f2f2f2;
//     }
//     100% {
//       box-shadow: 0 10px 0 #f2f2f2,
//                   -35px 50px 0 #f2f2f2,
//                   -70px 90px 0 #f2f2f2,
//                   -70px 90px 0 rgba(0, 0, 0, 0);
//     }
//   }

//   @keyframes fade-in-out {
//     0%, 100% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//   }
// `;

// export default Ball;

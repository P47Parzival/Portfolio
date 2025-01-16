import React from 'react';
import styled from 'styled-components';


const Workcard = ({ appname, imagesource, sitelink, pcontent }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="image_container">
                    <img className='image' src={imagesource} alt="black hole image" />
                </div>
                <div className="text-center text-white font-serif rounded-lg">
                    <p className='rounded-lg'>{appname}</p>
                </div>
                <a className='font-serif rounded-lg text-white hover:bg-violet-700 animate-pulse text-center' href={sitelink}>Visit!</a>
                <p className='text-white font serif rounded-lg bg-white font-serif text-[15px]'>
                    {pcontent}
                </p>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    --bg-card: #27272a;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    padding: 1rem;
    width: 14rem;
    background-color: var(--bg-card);

    border-radius: 1rem;
  }

  .image_container {
    /* overflow: hidden; */
    /* cursor: pointer; */

    position: relative;
    /* z-index: 5; */

    width: 100%;
    height: 9rem;
    background-color: var(--primary-800);

    border-radius: 10px;
  }

  .image_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 9rem;
    border-radius: 10px;
    /* width: 3rem; */
    fill: var(--light);
  }

  .size {
    font-size: 0.75rem;
    color: var(--light);
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #171979;
    display: flex;
    align-items: center;
    justify-content: center;
  }`;

export default Workcard;

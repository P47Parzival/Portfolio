import React from 'react';
import styled from 'styled-components';
import axios from "axios"
import { useState } from 'react';

const Contact = () => {

  // const [email, setemail] = useState('')
  // const [message, setmessage] = useState('')

  // const handlesubmit = async(e) => {
  //   e.preventDefault()

  //   const contactData = {email, message}

  //   try {
  //     const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, contactData)
  //     if(response.data.success){
  //       alert("Message sent Succesfully")
  //       setemail('')
  //       setmessage('')
  //     }
  //     else{
  //       alert('failed to send message')
  //     }
  //   } catch (error) {
  //     console.log("Error: ", error)
  //     alert("error occured")
  //   }
  // }
  
  return (
    <StyledWrapper>
      <div className="form-container">
        <form action='https://api.web3forms.com/submit' method='post' className="form">
          <input type="hidden" name='access_key' value="9db1465d-456c-4ea7-8d5e-b8c0445b0dc5"/>
          <div className="form-group">
            <label htmlFor="email">Company/Personal Email</label>
            <input required name="email" id="email" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={"          "} />
          </div>
          <button type="submit" className="form-submit-btn" onClick={() => alert("Thanks for Connection, I will reach out to you as soon as possible")}>Submit</button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: black; /* Example background color */

  .form-container {
    width: 400px;
    background: linear-gradient( #000, black) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    /* display: flex;
    flex-direction: column; */
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }`;

export default Contact;

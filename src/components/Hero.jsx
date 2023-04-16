import React, { useState } from 'react';
import axios from 'axios';
import {HashLink} from "react-router-hash-link"

import {AiOutlineClose} from 'react-icons/ai'
import d1 from '../Assets/d1.png'
import t1 from '../Assets/t1.png'
import m1 from '../Assets/m1.png'

const Hero = ({windowSize, setShowSpin}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);


  const handleChange = (event) => {
    setEmail(event.target.value);
    setIsValid(true);
  };

  // EMAIL AUTHENTICATION

  const authenticateEmail = async (email) => {
    try {
      // Make a mock API call to validate the email address
      const response = await axios.get(
        `https://api.apilayer.com/email_verification/${email}`
      );

      return response.data;
    } 
      catch (error) {
      console.error(error);
    }
  };

  const handleShowSpin = () =>{
    setShowSpin(true);

  }


  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    const response = await authenticateEmail(email);
    setIsValid(response.isValid);
  };
  

    // CHECKBOX 

     const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

  return (
    <div>
      {(()=>{
        if(windowSize[0] > 950){
          return (
            <>
            {/* IAMGE */}

            <div className="flex flex-col justify-center items-center m-auto h-[100vh]">
            <div className='flex items-center'>
             <img src={d1} alt='d1' className="w-full max-w-md"/>
            
            {/* FORM */}

            <div className="w-full flex flex-col items-center justify-center">
             <form onSubmit={handleEmailSubmit} className="p-8 rounded-lg shadow-lg max-w-[50%]">
              <h2 className="text-xl text-center text-bold text-black mb-6">Please enter your email and phone number to spin the wheel</h2>

                <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>

                <input onChange={handleChange} required type="email" id="email" value={email} placeholder="Enter your email address" className={`w-full text-black border-gray-400 g p-3 mb-4 ${
                    isValid ? 'border-green-500' : 'border-gray-300'
                  }`}/>

                  <label htmlFor="phone" className="block font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="number" id="number" name="phone number" required placeholder="Enter your phone number" className="w-full border-gray-400 p-3 mb-4 text-black" />

                 {/* CHECKBOX */}
 
                <div className='flex border rounded-md border-black px-3 py-1'>
                <input type="checkbox" id="termsCheckbox" name="termsCheckbox" checked={isChecked} onChange={handleCheckboxChange} className="required form-checkbox h-5 w-5 rounded-md border-gray-300 focus:outline-none"
                />
                <label htmlFor="termsCheckbox" className="ml-2 block text-gray-700 text-xs">
                  I agree to receiving recurring automated messages at the number I have provided. Consent is not a condition to purchase.
                </label>
                </div>

               {/* BUTTON */}

      
                <button onClick={handleShowSpin} type="submit"  className={`required w-full bg-[#146531] hover:bg-[#0b8636] text-white rounded-full py-3 mt-3 ${isValid ? 'bg-[#146531] hover:bg-[#0b8636] text-white' : 'bg-[] text-white'} text-bold`} disabled={!email || isLoading}>
                <HashLink smooth to="#spin">
                {isLoading ? 'Checking...' : isValid ? 'Try Your Luck' : 'Try your luck'}
                </HashLink>
                </button>

        {/* disclaimer */}

        <p className='text-xs text-center italic text-black'>*You can spin the wheel only once! *If you win you can claim your coupon for 10 minutes only!</p> 
        </form>

        <div className='flex'>
        <p className=' text-black text-bold italic mt-1'>No, I don't feel lucky today</p>
        <AiOutlineClose size={25} className='m-1 text-black cursor-pointer'/>
        </div>
       </div>         
          </div>
          </div>
            </>
          )
        }

        // TAB VIEW 

        else if(windowSize[0] > 480){
         return (
          <>
          <div className='flex items-center justify-center h-[100vh] px-2'>

            {/* IMAGE */}

           <img src={t1} alt='t1' className="absolute left-[0%] w-[25%] justify-start"/>

          {/* FORM */}

           <div className="w-[50%] flex flex-col ml-[200px]">
           <form onSubmit={handleEmailSubmit} className=" p-4 rounded-lg shadow-lg">
        <h3 className="text-[20px] text-center text-bold text-black mb-6">Please enter your email and phone number to spin the wheel</h3>

        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>

        <input onChange={handleChange} required type="email" id="email" value={email} placeholder="Enter your email address" className={`w-full text-black border-gray-400 g p-3 mb-4 ${
            isValid ? 'border-green-500' : 'border-gray-300'
          }`}/>

        <label htmlFor="phone" className="block font-medium text-gray-700 mb-2">Phone Number</label>
        <input type="number" id="number" name="phone number" required placeholder="Enter your phone number" className="w-full border-gray-400 p-3 mb-4 text-black" />

        {/* CHECKBOX */}

       <div className='flex border rounded-md border-black px-3 py-1'>
       <input type="checkbox" id="termsCheckbox" name="termsCheckbox" checked={isChecked} onChange={handleCheckboxChange} className=" required form-checkbox h-5 w-5 rounded-md border-gray-300 focus:outline-none"
      />
      <label htmlFor="termsCheckbox" className="ml-2 block text-gray-700 text-xs ">
        I agree to receiving recurring automated messages at the number I have provided. Consent is not a condition to purchase.
      </label>
       </div>

      {/* BUTTON */}
          <button onClick={handleShowSpin} type="submit"  className={`required w-full bg-[#146531] hover:bg-[#0b8636] text-white rounded-full py-3 mt-3 ${isValid ? 'bg-[#146531] hover:bg-[#0b8636] text-white' : 'bg-[] text-white'} text-bold`} disabled={!email || isLoading}>
            <HashLink smooth to="#spin">
            {isLoading ? 'Checking...' : isValid ? 'Try Your Luck' : 'your luck'}
            </HashLink>
        </button>

        {/* disclaimer */}
        <p className='text-xs italic text-black'>*You can spin the wheel only once! *If you win you can claim your coupon for 10 minutes only!</p>
        </form>
        

        <div className='flex'>
        <p className=' text-black text-bold italic mt-1'>No, I don't feel lucky today</p>
          <AiOutlineClose size={25} className='m-1 text-black cursor-pointer'/>
        </div>
        </div>
        </div>
          </>
         )

        }
        //  MOBILE VEIW 
        else{

        return (
          <>
          <div className='flex flex-col items-center px-2'> 

           <img src={m1} alt='m1' className="w-[200px] h-[170px]"/>

              {/* FORM */}

           <div className="w-[300px] h-[550px] flex flex-col items-center justify-center scale-90">
           <form onSubmit={handleEmailSubmit} className=" p-2 rounded-lg shadow-lg">
        <h3 className="text-[15px] text-center text-bold text-black mb-6">Please enter your email and phone number to spin the wheel</h3>

        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>

        <input onChange={handleChange} required type="email" id="email" value={email} placeholder="Enter your email address" className={`w-full text-black border-gray-400 g p-3 mb-4 ${
            isValid ? 'border-green-500' : 'border-gray-300'
          }`}/>

        <label htmlFor="phone" className="block font-medium text-gray-700 mb-2">Phone Number</label>
        <input type="number" id="number" name="phone number" required placeholder="Enter your phone number" className="w-full border-gray-400 p-3 mb-4 text-black" />

        {/* CHECKBOX */}

       <div className='flex border rounded-md border-black px-3 py-1'>
       <input type="checkbox" id="termsCheckbox" name="termsCheckbox" checked={isChecked} onChange={handleCheckboxChange} className="form-checkbox h-5 w-5 rounded-md border-gray-300 focus:outline-none"
      />
      <label htmlFor="termsCheckbox" className="ml-2 block text-gray-700 text-xs ">
        I agree to receiving recurring automated messages at the number I have provided. Consent is not a condition to purchase.
      </label>
       </div>

      {/* BUTTON */}
      <button onClick={handleShowSpin} type="submit"  className={`required w-full bg-[#146531] hover:bg-[#0b8636] text-white rounded-full py-3 mt-3 ${isValid ? 'bg-[#146531] hover:bg-[#0b8636] text-white' : 'bg-[] text-white'} text-bold`} disabled={!email || isLoading}>
        <HashLink smooth to="#spin">
        {isLoading ? 'Checking...' : isValid ? 'Try Your Luck' : 'your luck'}
        </HashLink>
      </button>

        {/* disclaimer */}
        <p className='text-xs italic text-black'>*You can spin the wheel only once! *If you win you can claim your coupon for 10 minutes only!</p>
        </form>
        

        <div className='flex'>
        <p className=' text-black text-bold italic mt-1'>No, I don't feel lucky today</p>
        <AiOutlineClose size={25} className='m-1 text-black cursor-pointer'/>
        </div>
        </div>
        </div>
          </>
         )

        }
      })()}
  </div>
  );
};


export default Hero;

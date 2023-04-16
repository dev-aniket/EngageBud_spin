import React, {useEffect} from 'react'
import d1 from '../Assets/d1.png'
import t1 from "../Assets/t1.png"
import m1 from "../Assets/m1.png"

const Output = ({gameResult, windowSize, showOutput }) => {

  useEffect(()=>{
  },[windowSize])
  

  return (
   <div className={`${showOutput ? "block" : "hidden"}`}>

      {(() =>{
        if(windowSize[0] > 980){
          return (
            <>
              <div id = "output" className="flex justify-center items-center m-auto h-[100vh]">

          {/* IAMGE */}

          <div className="flex items-center">
          <img src={d1} alt="desktop" className="w-full max-w-md" />
          </div>

          {/* FORM */}

          <div className="items-center justify-center p-10">
            <form className="p-8 rounded-lg shadow-lg max-w-[400px]">
            <h3 className="text-xl text-bold text-black text-center mb-6">Congrats! You Won:</h3>
            <h1 className="text-2xl text-center text-bold text-black mb-6">{gameResult}</h1>
            <div className='flex justify-center items-center'>
            <div className='bg-[rgba(49,76,64,.3)] rounded flex items-center '>
              <input className='bg-transparent p-2 focus:outline-none' type='text'value = 'XVSFTR6G' placeholder='XVSFTR6G' />

          </div>
          <button className='flex bg-[#146531] rounded h-[40px] p-2 text-center' >Copy</button>
          </div>

             {/* BUTTON */}

          <button type="submit"  className="w-full bg-[#146531] hover:bg-[#0b8636] text-white rounded-full py-3 mt-3">Close Panel & Copy </button>
          </form>
          <div className='flex'>
              <p className=' text-[#146531] text-center italic mt-1'>You can claim your coupon for 10 minutes only!</p>
              </div>
          </div>

          </div>
            </>
          )
        }

            // TAB

        else if(windowSize[0] > 480){
          return (
            <>
           <div id='output' className="flex justify-center items-center m-auto h-[100vh]">

          {/* IAMGE */}

          <div className="flex items-center">
          <img src={t1} alt="desktop" className=" absolute left-[0%] w-[20%] " />
          </div>

          {/* FORM */}

          <div className="items-center justify-center p-10">
          <form className="p-8 rounded-lg shadow-lg max-w-[400px]">
          <h3 className="text-xl text-bold text-black text-center mb-6">Congrats! You Won:</h3>
          <h1 className="text-2xl text-center text-bold text-black mb-6">{gameResult}</h1>
          <div className='flex justify-center items-center'>
          <div className='bg-[rgba(49,76,64,.3)] rounded flex items-center '>
          <input className='bg-transparent p-2 focus:outline-none' type='text'value = 'XVSFTR6G' placeholder='XVSFTR6G' />

          </div>
          <button className='flex bg-[#146531] rounded h-[40px] p-2 text-center' >Copy</button>
          </div>



          <button type="submit"  className="w-full bg-[#146531] hover:bg-[#0b8636] text-white rounded-full py-3 mt-3">Close Panel & Copy </button>
          </form>
          <div className='flex'>
              <p className=' text-[#146531] text-center italic mt-1'>You can claim your coupon for 10 minutes only!</p>
              </div>
          </div>
                
          </div>
            </>
          )
        }

            // MOBILE

        else{
          return (
            <>
            <div id = "output" className=" justify-center items-center m-auto h-[100vh]">

           {/* IAMGE */}

          <div className="flex flex-col items-center px-2">
            <img src={m1} alt="mobile" className="w-[200px] h-[170px]" />
          </div>

          {/* FORM */}

          <div className="items-center justify-center p-10">
            <form className="p-8 rounded-lg shadow-lg max-w-[400px]">
            <h3 className="text-xl text-bold text-black text-center mb-6">Congrats! You Won:</h3>
            <h1 className="text-2xl text-center text-bold text-black mb-6">{gameResult}</h1>
            <div className='flex justify-center items-center'>
            <div className='bg-[rgba(49,76,64,.3)] rounded flex items-center '>
              <input className='bg-transparent p-2 focus:outline-none' type='text'value = 'XVSFTR6G' placeholder='XVSFTR6G' />

          </div>
          <button className='flex bg-[#146531] rounded h-[40px] p-2 text-center' >Copy</button>
          </div>

            {/* BUTTON */}

          <button type="submit"  className="w-full bg-[#146531] hover:bg-[#0b8636] text-white rounded-full py-3 mt-3">Close Panel & Copy </button>
          </form>
          <div className='flex'>
              <p className=' text-[#146531] text-center italic mt-1'>You can claim your coupon for 10 minutes only!</p>
              </div>
          </div>

        </div>
            </>
          )
        }
      }
      )()}

</div>

  )
}

export default Output
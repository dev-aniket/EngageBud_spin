import React, { useState} from 'react';
import s1 from '../Assets/s1.png'
import arrow from '../Assets/arrow.png'
import "./spin.css";

import { HashLink } from 'react-router-hash-link';

const Spin = ({ setGameResult, windowSize, showSpin, setShowOutput}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isOutput, setOutput] = useState('');

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => {

      setIsSpinning(false);
      let ans = generateOutput();
      setOutput(ans);
      setGameResult(ans);
      handleShowOutput();
    }, 1000);
  };




const handleShowOutput = () =>{
  setShowOutput(true);
}

  // OUTPUT
  
  const generateOutput = () => {
    const outputs = ['30% SITEWIDE OFF', 'BUY 1 GET 1 FREE', 'FREE COFFEE MUG ON PURCHASE WORTH 1000', 'BUY 2 EFFERVESCENT TABLETS & GET 1 FREE', 'FREE 50G TEA ON PURCHASE OF RS.500', 'HOT CHOCOLATE FREE WITH TEA'];
    const randomIndex = Math.floor(Math.random() * outputs.length);
    return outputs[randomIndex];
  };


  return (
    <div className={`${showSpin ? "block" : "hidden"}`}>
    
    {(() =>{
      if(windowSize[0] > 950){
          return (
            <>
              <div id = "spin" className="flex flex-col h-[100vh] justify-center items-center">

                {/* IMAGE */}

                <div className="relative ">
                <img src={arrow} alt='arrow' className='absolute mt-[165px] ml-[185px] w-[45px]'/>
                 <img
                    src={s1}
                    alt="Pizza"
                    className={`w-[415px] h-[400px] ${isSpinning ? 'animate-spin' : ''}`}
                />

                </div>

                {/* BUTTON */}

                <button className="py-4 px-16 bg-[#146531] hover:bg-[#0b8636] text-white rounded-full mt-8"  onClick={handleClick}>
                  <HashLink smooth to="#output">
                     Spin
                 </HashLink>
                </button>
                </div>
            </>
          )
      }
      
      // TAB VIEW

      else if(windowSize[0] > 480){
        return (
          <>
              <div id = "spin" className="flex flex-col h-[100vh] justify-center items-center">

                  {/* IMAGE */}

                  <div className="relative ">
                  <img src={arrow} alt='arrow' className='absolute mt-[120px] ml-[135px] w-[45px]'/>
                  <img
                    src={s1}
                    alt="Pizza"
                    className={`w-full h-[300px] ${isSpinning ? 'animate-spin' : ''}`}
                  />
                  </div>

                  {/* BUTTON */}

                  <button className="py-4 px-16 bg-[#146531] hover:bg-[#0b8636] text-white rounded-full mt-8"  onClick={handleClick}>
                  <HashLink smooth to="#output">
                    Spin
                  </HashLink>
                  </button>
                  </div>
          </>
        )
      }

      // MOBILE VIEW

      else {
        return (
          <>
               <div id = "spin" className="flex flex-col h-[100vh] justify-center items-center">

            {/* IMAGE */}

            <div className="relative ">
            <img src={arrow} alt='arrow' className='absolute mt-[120px] ml-[135px] w-[45px]'/>
            <img
              src={s1}
              alt="Pizza"
              className={`w-full h-[300px] ${isSpinning ? 'animate-spin' : ''}`}
            />
            </div>

            {/* BUTTON */}

            <button className="py-4 px-16 bg-[#146531] hover:bg-[#0b8636] text-white rounded-full mt-8"  onClick={handleClick}>
            <HashLink smooth to="#output">
              Spin
            </HashLink>
            </button>
            </div>
          </>
        )
      }

    })()}
    
  </div>
  );
}

export default Spin;



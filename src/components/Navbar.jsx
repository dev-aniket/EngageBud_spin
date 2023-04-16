import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'


const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    
    <div className='bg-[#c6efc8]/10 mx-auto flex justify-between items-center p-4 shadow '>

      {/* LEFT SIDE */}

      <div className='flex items-center'>
        {/* <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30}/>
        </div> */}
       <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl px-2 text-[#146531]'>SPINIT</h1>

       <div className="hidden lg:flex items-center p-1 text-black text-[18px]">
        <p className='p-2 text-bold cursor-pointer'>HOME</p>
        <p className='p-2 text-bold cursor-pointer'>ABOUT</p>
       </div>
      </div>

    {/* SEARCH BAR */}

    <div className='bg-[rgba(49,76,64,.3)] rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search'></input>
    </div>

      {/* BUTTON */}

      <button className='text-[18px] text-white p-2 bg-[#2c775c] rounded-[10px] hidden md:flex items-center py-2'>
      <BsFillBookmarkHeartFill/>
      </button>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30}/>
        </div>

      {/* MOBILE MENU  */}

      {/* OVERLAY */}

      {nav ? <div className='bg-black/40 fixed w-full h-full top-0 left-0 z-10'>
      </div> : ""}

      {/* SIDE DRAWER MENU */}

    <div className={nav ? 'fixed top-0 left-0 w-[300px]  h-screen bg-[#c6efc8] z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px]  h-screen bg-[#c6efc8] z-10 duration-300'}>
      <AiOutlineClose onClick ={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
      <h2 className='text-2xl text-bold p-4 text-[#146531]'>SPINIT</h2>
      <nav>
        <ul className='flex flex-col p-4'>
          <li className='text-xl cursor-pointer text-black p-4 flex'>HOME</li>
          <li className='text-xl cursor-pointer text-black  p-4 flex'>ABOUT</li>
        </ul>
      </nav>
      
    </div>

  </div>
  
  )
}

export default Navbar
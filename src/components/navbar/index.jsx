import React from 'react'
import { Avtar, Notification, Searchbar } from '../../assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 bg-white w-full rounded-b-[30px] shadow-[-4px 10px 24px 0px] h-[100px]'>
      <div className='flex space-x-3 rounded-[14px] items-center px-4 w-[29.28vw] h-[8vh] bg-[#F2F2F2]'>
        <img className='h-[24px] w-[24px]' src={Searchbar} alt="Searchbar.svg" />
        <input type="text" placeholder='Search' className='bg-transparent w-full outline-none' />
      </div>
      <div className='flex space-x-6'>
        <img className='cursor-pointer' src={Notification} alt="Notification.svg" />
        <div className='h-[56px] w-[56px] rounded-full border overflow-hidden'>
          <img className='w-full h-full cursor-pointer' src={Avtar} alt="Avtar.svg" />
        </div>
        <p className='text-[20px] font-normal font-sans cursor-pointer leading-[66px]'>Reem Alqahtani</p>
      </div>
    </div>
  )
}

export default Navbar

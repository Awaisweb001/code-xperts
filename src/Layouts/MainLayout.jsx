import React from 'react'
import { MainSidebar, Navbar } from '../components'
import { useSelector } from 'react-redux'

const MainLayout = () => {

  const IsmainSidebar = useSelector((state) => state.Mainsidebar);
  return (
    <div className={`flex gap-6 `} >
      <div className={` ${IsmainSidebar ? "w-[26.20vw]" : "w-[6vw]"} min-h-screen transition-all`} >
        <MainSidebar />
      </div>
      <div className={`  ${IsmainSidebar ? "w-[77vw]" : "w-[93vw]"} h-screen transition-all`}>
        <Navbar />
        <div className='mt-10  border w-full text-center border-red-600'>
          Remaining Part
        </div>
      </div>
    </div >
  )
}

export default MainLayout

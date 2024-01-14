import React, { useState } from 'react';
import { HarmarBurger, Support } from '../../assets';
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineChartPie } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { AssignMainSideTrue } from '../../lib/store/slices/Allslices';
import { CiSettings } from "react-icons/ci";



const MainSidebar = () => {

  const IsmainSidebar = useSelector((state) => state.Mainsidebar);

  const [selectedItemId, setSelectedItemId] = useState(1);

  const ItemsList = [
    {
      id: 1,
      title: "Mind maps",
      icon: <HiOutlineChartPie className='text-[24px]' />,
      value: "0",
    },
    {
      id: 2,
      title: "Feed",
      icon: <CgFileDocument className='text-[24px]' />,
      value: "8",
    },
    {
      id: 3,
      title: "Profile",
      icon: <HiOutlineUser className='text-[24px]' />,
      value: "0",
    },
  ];


  const dispatch = useDispatch()

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };

  return (
    <div className='w-full flex flex-col relative items-center h-screen bg-white rounded-r-[30px] overflow-y-scroll'>
      <div className={`  h-[100px] flex items-center space-x-2 ${IsmainSidebar ? "w-[70%]" : "w-[90%] justify-center"} `}>
        <img onClick={() => dispatch(AssignMainSideTrue())} className='cursor-pointer' src={HarmarBurger} alt="Harburger.svg" />
        <h1 className={`text-[28px] ${IsmainSidebar ? "block" : "hidden"} text-[#505050] font-semibold font-sans leading-[66px]`}>Hakeim Mind</h1>
      </div>
      <div className={`mt-6 ${IsmainSidebar ? "w-[70%]" : "w-[90%] justify-center"}`}>
        {ItemsList &&
          ItemsList.map((list) => (
            <div
              key={list.id}
              className={`w-full h-[50px] mb-2 flex justify-between items-center px-2 rounded-[10px] cursor-pointer ${selectedItemId === list.id ? 'bg-blue-500 text-white' : ''
                }`}
              onClick={() => handleItemClick(list.id)}
            >
              <div className={`flex items-center w-full  space-x-2  ${IsmainSidebar ? "" : "justify-center"} `}>
                <span className={`  ${selectedItemId === list.id ? 'text-white ' : 'text-[#2F50F5]'
                  }`}>{list.icon}</span>
                <p className={`font-sans text-[20px] font-normal leading-[66px] ${selectedItemId === list.id ? 'text-white ' : 'text-[#808080]'
                  } ${IsmainSidebar ? "block" : "hidden"}  `}>{list.title}</p>
              </div>
              <div
                className={`w-[26.992px] ${IsmainSidebar ? "block" : "hidden"}  ${selectedItemId === list.id ? 'text-[#808080] ' : ''} ${list.value !== "0" ? "block" : "hidden"} h-[26.453px] flex justify-center items-center rounded-[8px] bg-[#D0F1E9]`}
              >
                {list.value}
              </div>
            </div>
          ))}
      </div>

      <div className={`bg-[#F5F6FE] rounded-[30px] w-[70%] flex flex-col items-center ${IsmainSidebar ? "block" : "hidden"}`}>
        <img className='-mt-5 w-auto' src={Support} alt="Support.svg" />
        <h1 className='font-sans mb-2 text-[#010101] text-[20px] text-center leading-normal font-medium'>You can easily go
          to the ouginational view any time</h1>
        <button className='bg-[#2F50F5] w-[155px] text h-[50px] rounded-[10px] text-white'>Support Us</button>
      </div>
      <div className={`w-[70%] ${IsmainSidebar ? "static" : "absolute bottom-0"} `}>

        <div

          className={` h-[50px] mt-10 w-full flex justify-between items-center px-2 rounded-[10px] cursor-pointer `}
        >
          <div className={`flex items-center w-full  space-x-2  ${IsmainSidebar ? "" : "justify-center"} `}>
            <span ><CiSettings className='text-[24px] text-[#2F50F5] ' /> </span>
            <p className={`font-sans text-[20px] font-normal leading-[66px] text-[#808080] '
            } ${IsmainSidebar ? "block" : "hidden"}  `}>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;

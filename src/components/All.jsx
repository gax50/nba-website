import React from 'react';
import allstarLogo from '../assets/all.png';
import vs from '../assets/vs.png';

const All = () => {
  return (
    <div className=" fg relative w-full bg-gradient-to-r from- via-blue-300 to-grey-600 h-[85px] xl:h-[110px] flex items-center justify-between px-4     xl:px-10 shadow-md shadow-blue-900/20">
      
      {/*Ombrebloc */}
      <div className="absolute top-0 left-0 w-full h-2 shadow-[inset_0_-3px_4px_-2px_rgba(0,0,0,0.25)] pointer-events-none z-0" />

      {/*  Logo gauche */}
      <img
        src={allstarLogo}
        alt="AllStar"
        className=" str h-7 xl:h-12  "
      />

      {/*Bloc"Eastern Western*/}
      <div className="mamo   gap-1  space-y-2  relative flex items-center ml-1 mt-1 xl:px-11 xl:py-2   bg-[#ECF8F6] px-1 py-1 rounded-lg shadow-lg shadow-black/20 border-none  z-0 animate-soft-bounce" style={{ fontFamily: "'Poppins', sans-serif"} }>
        {/* Eastern */}
        <div className="est text-center mr-4 ml-3">
          <h2 className="font-semibold text-[10px] xl:text-[15px]">Eastern</h2>
          <p className="text-[8px] xl:text-sm text-[#0B162C]">Conference</p>
        </div>

        {/* VS */}
        <div className="vs ">
        <img src={vs} alt=""className='al h-10 object-cover' />
        </div>

        {/* Western */}
        <div className="ouest text-center mr-2 ml-3 -mt-2">
          <h2 className="font-semibold text-[10px] xl:text-[15px]">Western</h2>
          <p className="text-xs xl:text-sm text-[#0B162C] text-[8px]">Conference</p>
        </div>
      </div>

      {/*Logo droite */}
      <img
        src={allstarLogo}
        alt="AllStar"
        className="str h-[31px] xl:h-12  "
      />
    </div>
  );
};

export default All;

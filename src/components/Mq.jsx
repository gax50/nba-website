import React from 'react';

import back from '../assets/1.png';
import direct from '../assets/direct.png';
import basket1 from '../assets/Design sans titre (6)-Photoroom.png';
import basket2 from '../assets/nike.png';
import nba from '../assets/NBA-Photoroom.png'

const Mq1 = () => {
  return (
    <div
      className=" w-full  bg-cover bg-center  shadow-md px-6 py-6  lg:h-[480px] xl:h-[500px] h-[350px] sm:h-[470px] z-0"
      style={{ backgroundImage: `url(${back})` }}
    >
      
      
    <div className=" grid grid-cols-2 gap-12 h-full items-center text-white   grid grid-cols-1 md:grid-cols-3 gap-4 h-full items-center text-white">
       
      
        {/* Colonne 1   */}
        <div className=" mk flex flex-col justify-between h-full sm:ml-8 ml-2 -mt-15 lg:-mt-10 xl:-mt-12 " >
          <div>
            <div className="flex mt-3">
                <h1 className=' xl:text-4xl text-xl mt-8 font-bold drop-shadow-[2px_2px_0px_black] lg:text-3xl lg:mt-8 sm:text-2xl' style={{ fontFamily: "'Poppins', sans-serif" }} >NBA</h1>
                <img src={nba} alt="logo nba"    className=" xl:h-12 xl:w-12 xl:mt-4 object-cover  w-7 h-8 drop-shadow-[2px_4px_4px_black] ml-1  mt-5 lg:w-10  lg:h-10 lg:mt-5 sm:mt-6"/>
             </div>
          
            <div className="flex lg:mt-10 ">
             <h2 className="text-sm xl:text-3xl text-WHITE-600 font-bold mt-8 drop-shadow-[2px_2px_2px_black]  lg:text-2xl sm:text-xl"     style={{ fontFamily: "'Poppins', sans-serif"} }   >BASKET
             </h2>
             <h1 className="text-lg text-[#ff0023] xl:mt-[30px] xl:text-4xl font-bold  mt-[26px]  ml-2 drop-shadow-[1px_2px_2px_black] lg:text-3xl lg:mt-7 lg:ml-6 sm:text-2xl sm:mt-[29px] sm:ml-4"     style={{ fontFamily: "'Poppins', sans-serif"} }   >BALL
             </h1>
            </div>
          </div>
           <div className="direct flex mt-12 lg:mt-2 xl:mt-25">
           <span className="relative flex size-3 mt-3 ml-2   z-10 lg:size-5 lg:mt-4 lg:-mr-2.5 hidden sm:flex ">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80"></span>
           
              </span>
            
          <div className="-mt-2 -ml-7 drop-shadow-[2px_3px_4px_black]  ">
   
            <button >
             
            <img
              src={direct}
              alt="Lien direct"
              className="hidden sm:flex w-32 opacity-95 hover:scale-105 transition-transform duration-400 hover:opacity-100 lg:w-42 ml-5 sm:-ml-[1px]"
            />
           
            </button>
          </div>
           </div>
          <br />
         
        <div className=" -mt-5  lg:-mt-22 xl:mt-7 sm:mt-5 flex flex-col md:flex-row gap-3 md:gap-5 space-y-2 md:space-y-0  " style={{ fontFamily: "'Poppins', sans-serif"} } >
          <button className="relative xl:px-12 xl:py-3 lg:px-6 group overflow-hidden px-12 py-2 bg-gradient-to-t from-white via-gray-100 to-white text-black hover:scale-105 transition-transform duration-300 shadow-md drop-shadow-[2px_2px_4px_4px_black] rounded-md flex items-center justify-center">
           <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></span>
            <span className="relative z-20 text-xs">Calendrier</span>
          </button>

            <button className="lg:px-8 xl:px-12 xl:py-3 relative group overflow-hidden px-13 py-2 rounded-md bg-gradient-to-t from-sky-800 to-blue-900 text-white  hover:scale-105 transition-transform duration-300 shadow-md drop-shadow-[2px_2px_2px_2px_black] flex items-center justify-center">
             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></span>
             <span className="relative z-10 text-xs">Résultats</span>
           </button>


        </div>
        
          <br />
      

        </div>

        {/* Colonne 2 */}
       
       
         <img
            src={basket2}
            alt="Basket 1"
            className=" ba opacity-95 hidden drop-shadow-[5px_5px_5px_black] md:flex xl:h-[340px] xl:w-[390px] w-[20px] h-[140px] object-cover -mt-22 lg:w-[300px] lg:h-[280px] lg:mr-20 xl:-mt-10"
          />
       
     
        {/* Colonne 3 */}
        
          <img
            src={basket1}
            alt="Basket 2"
            className="yes  z-0 w-[140px] lg:-mt-[10px] h-[250px] md:ml-4   drop-shadow-[3px_3px_3px_black]  object-cover   md:h-[350px]  mt-[1px] z-10 sm:h-[350px] sm:w-[220px] sm:-mt-1 lg:w-75 lg:h-[450px] ml-7 xl:-mt-5"
          />
        
      </div>
    </div>
  );
};

export default Mq1;

import React from 'react';
import Img from '../assets/decod.png'; 
import Imge from '../assets/deco.png'; 
import back from '../assets/video-bg.png'
const Nba = () => {
  return (
    <div
      className="w-full h-[380px] sm:h-[350px] bg-cover bg-center px-1 py-4 z-0 md:mt-5 mt-15"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="flex items-center justify-center h-full gap-6 text-center">
       
        <div className="w-1/4 flex justify-center">
          <img src={Imge} alt="Logo gauche" className="h-70 hidden lg:block w-auto object-contain drop-shadow-[1px_2px_2px_black]" />
        </div>

        {/* Texte au centre */}
        <div className="w-full  lg:w-2/4 "style={{ fontFamily: "'Urbanist', sans-serif"} }>
          <h1 className="font-semibold lg:text-2xl text-md text-gray-500  mb-10 sm:-mt-3 mt-5">
            La NBA c'est bien plus que du basket
          </h1>
          <blockquote className="md:text-sm text-[12px] italic text-gray-400  leading-relaxed max-w-xl mx-auto ">
            "J’ai raté plus de 9000 tirs dans ma carrière. J’ai perdu presque 300 matchs. 26 fois, on m’a fait confiance pour le tir de la victoire et je l’ai manqué. J’ai échoué encore et encore dans ma vie. Et c’est pourquoi je réussis." – Michael Jordan
          </blockquote>
        </div>

     
        <div className="w-1/4 flex justify-center -mt-2">
          <img src= {Img}alt="Logo droite" className="hidden lg:block h-65 w-auto object-contain drop-shadow-[1px_2px_2px_black] " />
        </div>
      </div>
    </div>
  );
};

export default Nba;

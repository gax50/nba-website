import React from 'react';
import { Trophy, PlaySquare, Calendar, BarChart2 } from 'lucide-react';
import logo from '../assets/logo.png';

const Plaque = () => {
  return (
    <div className="w-full flex flex-col items-center py-20"style={{ fontFamily: "'Urbanist', sans-serif"} }>

    
      <div className="flex items-center gap-3 mb-8 opacity-90">
        <img src={logo} alt="NbaVision Logo" className="h-9 w-9 object-contain" />
        <h1 className="text-3xl font-bold text-gray-800">Nba <span className='text-blue-500'>Vision</span> </h1>
      </div>

      
      <p className="text-gray-500 sm:text-xl text-sm mb-16 font-semibold">
        Le site parfait pour tous les fans de NBA.
      </p>

      {/* plq */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:px-25 px-5 mt-4">

        {/*  1 */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <div className="bg-indigo-100 rounded-full p-3 mb-4">
            <Trophy className="h-8 w-8 text-indigo-400" />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Comparer les équipes</h2>
          <p className="text-gray-500 text-[12px] mt-5">
            Compare les équipes avant les rencontres avec des tableaux clairs et des analyses visuelles.
          </p>
        </div>

        {/*  2 */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <div className="bg-rose-100 rounded-full p-3 mb-4">
            <PlaySquare className="h-8 w-8 text-rose-400" />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Voir les meilleures actions</h2>
          <p className="text-gray-500 text-[12px] mt-5">
            Regarde les actions spectaculaires grâce à des extraits vidéos triés et mis en avant.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <div className="bg-green-100 rounded-full p-3 mb-4">
            <Calendar className="h-8 w-8 text-green-400" />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700 ">Planifier ta saison</h2>
          <p className="text-gray-500 text-[12px] mt-5">
            Planifie ta saison NBA avec un calendrier interactif pour ne manquer aucun match important.
          </p>
        </div>

        {/*  4 */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <div className="bg-blue-100 rounded-full p-3 mb-4">
            <BarChart2 className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Analyser le classement</h2>
          <p className="text-gray-500 text-[12px] mt-5">
            Analyse le classement en temps réel et comprends les enjeux des prochaines rencontres.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Plaque;

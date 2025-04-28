import React from 'react';
import kjo from '../assets/kbj.png';

const Section = () => {
  return (
    <section 
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-28 py-5" 
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      
      <div className="flex-1 mb-10 lg:mb-5 md:mr-10 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-6 text-gray-600">
          Vivez la passion NBA <br /> <span className="text-indigo-400">comme jamais</span>
        </h1>
        
        <p className="text-gray-600 mb-4 text-[12px]">
          Rejoignez-nous et profitez d'offres exclusives sur NBA Vision ! Inscrivez-vous dès aujourd'hui pour vivre chaque moment intense de la NBA comme jamais auparavant.
        </p>

        
        <p className="text-gray-600 mb-10 text-[12px]">
           À propos : Nous sommes une équipe de passionnés de basketball, réunis pour offrir aux fans une plateforme unique dédiée à la NBA.  
           Chez NBA Vision, notre mission est de vous rapprocher de votre passion : actualités, produits officiels, événements exclusifs et analyses approfondies.  
          Nous croyons que chaque fan mérite de vivre la NBA avec intensité et authenticité.
       </p>

        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Inscrivez-vous
        </button>
      </div>

    
      <div className="flex-1 flex justify-center">
        <img
          src={kjo}
          alt="kobejordan"
          className="max-w-full h-auto "
        />
      </div>

    </section>
  );
};

export default Section;

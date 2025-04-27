import React, { useState, useEffect } from "react";

import nba from "../assets/NBA-Photoroom.png";
import { CheckCircle } from "lucide-react"; //icn 
import { AnimatePresence, motion } from "framer-motion"; //  animation

const cardsData = [
  // Page 1
  [
    {
      title: "BOSTON CELTICS",
      season: "1957 - 1969",
      description:
        "Période de domination sans précédent avec 11 titres en 13 saisons. Les Celtics ont établi les bases de l’excellence en NBA.",
      highlights: [
        "11 titres NBA",
        "Dynastie la plus dominante de l'histoire",
        "Fondation de la culture de la gagne",
      ],
    },
    {
      title: "LOS ANGELES LAKERS",
      season: "1980 - 1988",
      description:
        "La période du 'Showtime' avec un jeu spectaculaire, une domination de l’Ouest et de nombreuses finales disputées.",
      highlights: [
        "5 titres NBA",
        "Domination de la conférence Ouest",
        "Montée en puissance du spectacle en NBA",
      ],
    },
    {
      title: "CHICAGO BULLS",
      season: "1991 - 1998",
      description:
        "L’équipe a marqué les années 90 avec deux triplés consécutifs (1991-1993 & 1996-1998), une performance historique.",
      highlights: [
        "6 titres en 8 ans",
        "Équipe symbole des années 90",
        "Domination mondiale du basket",
      ],
    },
  ],
  // Page 2
  [
    {
      title: "SAN ANTONIO SPURS",
      season: "1999 - 2014",
      description:
        "Une constance impressionnante avec 5 titres en 15 ans et une gestion d’équipe exemplaire.",
      highlights: [
        "5 titres NBA",
        "Exemple de stabilité et de discipline",
        "Culture de l'efficacité",
      ],
    },
    {
      title: "DETROIT PISTONS",
      season: "1988 - 1990",
      description:
        "L’ère des 'Bad Boys', une défense de fer et une identité dure qui a mis fin à l’hégémonie des Celtics et Lakers.",
      highlights: [
        "2 titres NBA",
        "Réputation défensive unique",
        "Rivalités légendaires",
      ],
    },
    {
      title: "GOLDEN STATE WARRIORS",
      season: "2015 - 2022",
      description:
        "Réinvention du jeu avec le tir à 3 points et une domination offensive historique.",
      highlights: [
        "4 titres NBA",
        "Style de jeu révolutionnaire",
        "Dynastie moderne",
      ],
    },
  ],
  // Page 3
  [
    {
      title: "PHILADELPHIA 76ERS",
      season: "1967",
      description:
        "L’une des meilleures équipes de l’histoire en 1967, dominant la ligue avec un style puissant et organisé.",
      highlights: [
        "Titre NBA 1967",
        "Meilleur bilan de la saison",
        "Arrêt de la domination Celtics",
      ],
    },
    {
      title: "NEW YORK KNICKS",
      season: "1970 - 1973",
      description:
        "Une période dorée pour New York, avec deux titres et une image de jeu collectif remarquable.",
      highlights: [
        "2 titres NBA",
        "Équipe culte de New York",
        "Jeu d’équipe exemplaire",
      ],
    },
    {
      title: "MIAMI HEAT",
      season: "2011 - 2014",
      description:
        "Une franchise jeune devenue rapidement une référence avec deux titres consécutifs et 4 finales de suite.",
      highlights: [
        "2 titres NBA",
        "Franchise en pleine ascension",
        "Stabilité et ambition",
      ],
    },
  ],
  // Page 4
  [
    {
      title: "CLEVELAND CAVALIERS",
      season: "2016",
      description:
        "Un retour historique dans la finale après un déficit de 3-1, marquant un moment marquant pour la franchise.",
      highlights: [
        "Premier titre NBA",
        "Remontée historique",
        "Moment fondateur pour la franchise",
      ],
    },
    {
      title: "TORONTO RAPTORS",
      season: "2019",
      description:
        "Premier titre pour une équipe canadienne. Un impact majeur pour le développement du basket au Canada.",
      highlights: [
        "Premier titre NBA",
        "Explosion de la popularité du basket au Canada",
        "Victoire historique",
      ],
    },
    {
      title: "MILWAUKEE BUCKS",
      season: "2021",
      description:
        "Un retour au sommet après 50 ans. L’équipe a démontré une forte cohésion et une vision claire.",
      highlights: [
        "Titre NBA après 50 ans",
        "Franchise patiente et stratégique",
        "Unité et constance",
      ],
    },
  ],

  //page 5
  [
    {
      title: "HOUSTON ROCKETS",
      season: "1994 - 1995",
      description:
        "Grâce à Hakeem Olajuwon, les Rockets ont remporté deux titres consécutifs pendant la retraite de Jordan.",
      highlights: [
        "2 titres NBA",
        "Domination sans superstar secondaire",
        "Hakeem au sommet de son art",
      ],
    },
    {
      title: "ORLANDO MAGIC",
      season: "1995",
      description:
        "Équipe jeune menée par Shaquille O’Neal et Penny Hardaway, finaliste NBA avant l’explosion.",
      highlights: [
        "Finale NBA atteinte très tôt",
        "Duo jeune et explosif",
        "Franchise pleine de promesses",
      ],
    },
    {
      title: "SEATTLE SUPERSONICS",
      season: "1996",
      description:
        "Avec Gary Payton et Shawn Kemp, les Sonics ont marqué les 90s malgré leur perte en finale contre les Bulls.",
      highlights: [
        "Finale NBA 1996",
        "Équipe emblématique des années 90",
        "Style de jeu intense",
      ],
    },
  ],
//page6
[
  {
    title: "PHOENIX SUNS",
    season: "2021",
    description:
      "Portés par Chris Paul et Devin Booker, les Suns atteignent la finale après une longue disette.",
    highlights: [
      "Retour en finale NBA",
      "Duo CP3 - Booker",
      "Résilience et reconstruction",
    ],
  },
  {
    title: "OKLAHOMA CITY THUNDER",
    season: "2010 - 2016",
    description:
      "Une génération dorée avec Durant, Westbrook, Harden et Ibaka, proche de la consécration.",
    highlights: [
      "Finale NBA 2012",
      "Noyau jeune exceptionnel",
      "Base de talents bruts",
    ],
  },
  {
    title: "PORTLAND TRAIL BLAZERS",
    season: "1977",
    description:
      "Un titre historique avec Bill Walton, symbole de collectif et de détermination.",
    highlights: [
      "Champion NBA 1977",
      "Équipe surprise",
      "Bill Walton MVP des Finales",
    ],
  },
],
//page7 
[
  {
    title: "DALLAS MAVERICKS",
    season: "2011",
    description:
      "Dirk Nowitzki mène l’équipe à un titre inattendu contre le Heat des stars.",
    highlights: [
      "Premier titre NBA",
      "Performance légendaire de Dirk",
      "Victoire contre une super team",
    ],
  },
  {
    title: "INDIANA PACERS",
    season: "2000 - 2004",
    description:
      "Sous Reggie Miller, les Pacers ont brillé par leur combativité et rivalités à l’Est.",
    highlights: [
      "Finale NBA 2000",
      "Rivalité avec les Knicks",
      "Icône locale : Reggie Miller",
    ],
  },
  {
    title: "UTAH JAZZ",
    season: "1997 - 1998",
    description:
      "Deux finales consécutives contre les Bulls de Jordan. Stockton et Malone, duo inoubliable.",
    highlights: [
      "2 Finales NBA",
      "Duo historique Stockton-Malone",
      "Solidité offensive et défensive",
    ],
  },
]
,
//page8
[
  {
    title: "BROOKLYN NETS",
    season: "2021",
    description:
      "Avec Durant, Harden et Irving, les Nets ont tenté une superteam moderne, sans succès en titre.",
    highlights: [
      "Superteam ambitieuse",
      "Talent pur au sommet",
      "Déception en playoffs",
    ],
  },
  {
    title: "DENVER NUGGETS",
    season: "2023",
    description:
      "Emmenés par Jokic, les Nuggets ont décroché leur premier titre NBA dans une démonstration collective.",
    highlights: [
      "Premier titre NBA",
      "Jokic MVP des Finales",
      "Jeu d’équipe remarquable",
    ],
  },
  {
    title: "CHARLOTTE HORNETS",
    season: "1990s",
    description:
      "Une équipe jeune et populaire dans les années 90 avec un style excitant malgré l’absence de titres.",
    highlights: [
      "Explosion de popularité",
      "Joueurs emblématiques : LJ, Mourning",
      "Jeu rapide et fun",
    ],
  },
],

//page9
[
  {
    title: "MINNESOTA TIMBERWOLVES",
    season: "2004",
    description:
      "Kevin Garnett mène l’équipe en finale de conférence avec une intensité inégalée.",
    highlights: [
      "Finale de Conférence 2004",
      "Saison MVP pour KG",
      "Passion et intensité",
    ],
  },
  {
    title: "NEW ORLEANS PELICANS",
    season: "2018",
    description:
      "Une série impressionnante en playoffs avec Anthony Davis en pleine puissance.",
    highlights: [
      "Série de playoffs dominée",
      "AD au sommet",
      "Équipe sous-estimée",
    ],
  },
  {
    title: "MEMPHIS GRIZZLIES",
    season: "2011 - 2015",
    description:
      "Une défense féroce, une identité dure, et une présence constante en playoffs.",
    highlights: [
      "Surnommée 'Grit and Grind'",
      "Marc Gasol, Z-Bo, Tony Allen",
      "Identité défensive unique",
    ],
  },
]
,
//page10
[
  {
    title: "ATLANTA HAWKS",
    season: "2021",
    description:
      "Emmenés par un jeune Trae Young, les Hawks surprennent tout le monde en atteignant la finale de conférence.",
    highlights: [
      "Finale de conférence inattendue",
      "Trae Young leader flamboyant",
      "Réveil d’une franchise historique",
    ],
  },
  {
    title: "SACRAMENTO KINGS",
    season: "2002",
    description:
      "L'une des meilleures équipes à ne pas avoir gagné le titre, controversée face aux Lakers.",
    highlights: [
      "Finale de conférence 2002",
      "Collectif impressionnant",
      "Injustice en playoffs",
    ],
  },
  {
    title: "WASHINGTON BULLETS",
    season: "1978",
    description:
      "L’unique titre de la franchise (aujourd’hui Wizards) avec une équipe très solide.",
    highlights: [
      "Champion NBA 1978",
      "Équipe sous-estimée",
      "Force collective",
    ],
  },
]




];
const Card = ({ title, season, description, highlights }) => (
  <div className="card bg-white px-8 py-6 rounded-xl shadow-lg text-left space-y-4 mt-2" style={{ fontFamily: "'Urbanist', sans-serif" }}>
    <h3 className="text-[#2e3d91] font-bold text-sm sm:text-lg">{title}</h3>
    <div className="flex items-center gap-2 text-[#2e3d91] font-semibold">
      <h4 className="text-sm ">Saison : {season}</h4>
    </div>
    <p className="sm:text-sm text-[10px] text-gray-700">{description}</p>
    <ul className="list-none pl-0 sm:text-sm text-[10px] text-gray-600 mt-8">
      {highlights.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 mt-2">
          <CheckCircle className="sm:w-4 sm:h-4 w-3 h-3 text-green-500" />
          {item}
        </li>
      ))}
    </ul>
    <div className="h-1 w-35 bg-red-400 mt-15" />
  </div>
);

const Photo = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(cardsData.flat().length / cardsPerPage);
  const currentCards = cardsData.flat().slice(
    pageIndex * cardsPerPage,
    (pageIndex + 1) * cardsPerPage
  );

  // Gestion du resize pour détecter mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Changement automatique de page toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex(prevIndex => (prevIndex + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval); // Nettoyage à la destruction du composant
  }, [totalPages]); 

  return (
    <div
      className="stat bg-[#f4f9fa] px-6 sm:px-10 lg:px-24 xl:px-20 py-6 md:mt-8 mt-5 mx-auto"
      style={{ fontFamily: "'Urbanist', sans-serif" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        {/* Côté gauche */}
        <div className="flex items-center gap-2">
          <img src={nba} alt="NBA logo" className="w-8 h-8" />
          <div>
            <h2 className="text-xs sm:text-sm text-[#2e3d91] font-semibold">
              Moments Historiques de la NBA
            </h2>
            <p className="italic font-bold text-xs sm:text-sm">Team & Players</p>
          </div>
        </div>
        {/* Côté droit (affiché seulement sur xl) */}
        <div className="items-center gap-2 xl:flex hidden">
          <div className="text-right">
            <h2 className="text-xs sm:text-sm text-[#2e3d91] font-semibold">
              Moments Historiques de la NBA
            </h2>
            <p className="italic font-bold text-xs sm:text-sm">Team & Players</p>
          </div>
          <img src={nba} alt="NBA logo" className="w-8 h-8" />
        </div>
      </div>

      {/* Cartes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`grid gap-4 mb-8 ${isMobile ? 'grid-cols-1' : 'xl:grid-cols-3'}`}
        >
          {currentCards.map((card, idx) => (
            <div key={idx} className="max-w-full w-full">
              <Card {...card} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-20 flex-wrap">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPageIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === pageIndex ? "bg-indigo-500 scale-110 w-4" : "bg-gray-300 w-2"
            } ${isMobile ? 'my-1' : 'mx-1'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Photo;
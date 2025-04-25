import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import chamb from "../assets/wilt-chamberlain.jpg"
import wilt from "../assets/wilt.jpg"
import curry from "../assets/stp.webp"
import stp from "../assets/steph.png"
import kb from "../assets/kb.jpg"
import kobe from "../assets/kobe.jpg"
const cards = [
  {
    date: "06/01/1984",
    image:chamb ,
    title: "Wilt's 100-point game",
    description: "Wilt Chamberlain marque 100 points contre les Knicks, un record toujours inégalé.",
    youtube: "https://www.youtube.com/embed/K5VLz_ciou0",
    player: {
      name: "Wilt Chamberlain",
      position: "Center",
      image: wilt,
    },
  },
  {
    date: "22/01/2006",
    image: kb,
    title: "Kobe's 81-point game",
    description: "Kobe Bryant inscrit 81 points contre les Raptors, 2e meilleure performance de l'histoire.",
    youtube: "https://www.youtube.com/embed/fake-url-2",
    player: {
      name: "Kobe Bryant",
      position: "Shooting Guard",
      image: kobe,
    },
  },
  {
    date: "17/11/2016",
    image: curry,
    title: "Curry's 402 Three-pointers",
    description: "Stephen Curry établit un record de 402 tirs à trois points en une saison.",
    youtube: "https://www.youtube.com/embed/fake-url-3",
    player: {
      name: "Stephen Curry",
      position: "Point Guard",
      image: stp,
    },
  },
  {
    date: "10/05/2021",
    image: "/images/card-4.jpg",
    title: "Westbrook's Triple-Double Record",
    description: "Russell Westbrook dépasse Oscar Robertson avec son 182e triple-double en carrière.",
    youtube: "https://www.youtube.com/embed/fake-url-4",
    player: {
      name: "Russell Westbrook",
      position: "Point Guard",
      image: "/images/avatar-4.jpg",
    },
  },
  {
    date: "24/04/1994",
    image: "/images/card-6.jpg",
    title: "David Robinson's 71 points",
    description: "David Robinson inscrit 71 points pour remporter le titre de meilleur scoreur.",
    youtube: "https://www.youtube.com/embed/fake-url-6",
    player: {
      name: "David Robinson",
      position: "Center",
      image: "/images/avatar-5.jpg",
    },
  },
  {
    date: "04/03/2014",
    image: "/images/card-7.jpg",
    title: "Most 3-pt shots in a game",
    description: "Klay Thompson marque 14 tirs à 3 points dans un seul match, un record NBA.",
    youtube: "https://www.youtube.com/embed/fake-url-7",
    player: {
      name: "Klay Thompson",
      position: "Shooting Guard",
      image: "/images/avatar-6.jpg",
    },
  },
  {
    date: "25/12/2021",
    image: "/images/card-8.jpg",
    title: "Most Career Points",
    description: "LeBron James devient le meilleur marqueur de l'histoire de la NBA.",
    youtube: "https://www.youtube.com/embed/fake-url-8",
    player: {
      name: "LeBron James",
      position: "Small Forward",
      image: "/images/avatar-7.jpg",
    },
  },
  {
    date: "30/12/1990",
    image: "/images/card-9.jpg",
    title: "Most Assists in a Game",
    description: "Scott Skiles distribue 30 passes décisives dans un match en 1990.",
    youtube: "https://www.youtube.com/embed/fake-url-9",
    player: {
      name: "Scott Skiles",
      position: "Point Guard",
      image: "/images/avatar-8.jpg",
    },
  },
  {
    date: "28/10/1973",
    image: "/images/card-10.jpg",
    title: "Most Blocks in a Game",
    description: "Elmore Smith détient le record avec 17 contres dans un match.",
    youtube: "https://www.youtube.com/embed/fake-url-10",
    player: {
      name: "Elmore Smith",
      position: "Center",
      image: "/images/avatar-9.jpg",
    },
  },
  {
    date: "20/11/2010",
    image: "/images/card-11.jpg",
    title: "Kevin Love's 31 rebounds",
    description: "Kevin Love capte 31 rebonds contre les Knicks, un exploit rare à l'ère moderne.",
    youtube: "https://www.youtube.com/embed/fake-url-11",
    player: {
      name: "Kevin Love",
      position: "Power Forward",
      image: "/images/avatar-10.jpg",
    },
  },
  {
    date: "12/12/2000",
    image: "/images/card-12.jpg",
    title: "Most Technical Fouls in a Season",
    description: "Rasheed Wallace établit le record avec 41 fautes techniques en une saison.",
    youtube: "https://www.youtube.com/embed/fake-url-12",
    player: {
      name: "Rasheed Wallace",
      position: "Power Forward",
      image: "/images/avatar-11.jpg",
    },
  },
  {
    date: "23/03/1991",
    image: "/images/card-13.jpg",
    title: "Most Steals in a Game",
    description: "Larry Kenon et Kendall Gill partagent le record avec 11 interceptions dans un match.",
    youtube: "https://www.youtube.com/embed/fake-url-13",
    player: {
      name: "Kendall Gill",
      position: "Shooting Guard",
      image: "/images/avatar-12.jpg",
    },
  },
  {
    date: "15/02/1994",
    image: "/images/card-14.jpg",
    title: "Fastest Foul Out",
    description: "Bubba Wells est exclu après seulement 3 minutes de jeu pour 6 fautes.",
    youtube: "https://www.youtube.com/embed/fake-url-14",
    player: {
      name: "Bubba Wells",
      position: "Forward",
      image: "/images/avatar-13.jpg",
    },
  },
  {
    date: "02/03/2008",
    image: "/images/card-15.jpg",
    title: "Most Turnovers in a Game",
    description: "James Harden détient le record de pertes de balle avec 13 en un match.",
    youtube: "https://www.youtube.com/embed/fake-url-15",
    player: {
      name: "James Harden",
      position: "Shooting Guard",
      image: "/images/avatar-14.jpg",
    },
  },
  {
    date: "14/04/2016",
    image: "/images/card-16.jpg",
    title: "Kobe's Farewell Game",
    description: "Kobe Bryant marque 60 points lors de son dernier match NBA.",
    youtube: "https://www.youtube.com/embed/fake-url-16",
    player: {
      name: "Kobe Bryant",
      position: "Shooting Guard",
      image: "/images/avatar-2.jpg",
    },
  },
  {
    date: "20/04/1986",
    image: "/images/card-17.jpg",
    title: "Jordan's 63 in Playoffs",
    description: "Michael Jordan marque 63 points en playoffs contre les Celtics.",
    youtube: "https://www.youtube.com/embed/fake-url-17",
    player: {
      name: "Michael Jordan",
      position: "Shooting Guard",
      image: "/images/avatar-15.jpg",
    },
  },
  {
    date: "31/03/2019",
    image: "/images/card-18.jpg",
    title: "Dirk's Final Home Game",
    description: "Dirk Nowitzki reçoit une standing ovation après 21 saisons à Dallas.",
    youtube: "https://www.youtube.com/embed/fake-url-18",
    player: {
      name: "Dirk Nowitzki",
      position: "Power Forward",
      image: "/images/avatar-16.jpg",
    },
  },
  {
    date: "30/01/2020",
    image: "/images/card-19.jpg",
    title: "Lillard's 61 points",
    description: "Damian Lillard marque 61 points face aux Warriors, un record personnel.",
    youtube: "https://www.youtube.com/embed/fake-url-19",
    player: {
      name: "Damian Lillard",
      position: "Point Guard",
      image: "/images/avatar-17.jpg",
    },
  },
  {
    date: "01/03/2004",
    image: "/images/card-20.jpg",
    title: "Youngest Player to Score 50",
    description: "Brandon Jennings marque 55 points en tant que rookie à 20 ans.",
    youtube: "https://www.youtube.com/embed/fake-url-20",
    player: {
      name: "Brandon Jennings",
      position: "Point Guard",
      image: "/images/avatar-18.jpg",
    },
  },
  {
    date: "13/01/1999",
    image: "/images/card-21.jpg",
    title: "Longest NBA Game",
    description: "Les Grizzlies et les SuperSonics jouent un match de 4 prolongations.",
    youtube: "https://www.youtube.com/embed/fake-url-21",
    player: {
      name: "Gary Payton",
      position: "Point Guard",
      image: "/images/avatar-19.jpg",
    },
  },
  {
    date: "07/12/2019",
    image: "/images/card-22.jpg",
    title: "Most Points in a Quarter",
    description: "Klay Thompson marque 37 points dans un seul quart-temps.",
    youtube: "https://www.youtube.com/embed/fake-url-22",
    player: {
      name: "Klay Thompson",
      position: "Shooting Guard",
      image: "/images/avatar-6.jpg",
    },
  },
  {
    date: "15/03/2004",
    image: "/images/card-23.jpg",
    title: "Most Consecutive Games Played",
    description: "A.C. Green joue 1 192 matchs consécutifs sans interruption.",
    youtube: "https://www.youtube.com/embed/fake-url-23",
    player: {
      name: "A.C. Green",
      position: "Power Forward",
      image: "/images/avatar-20.jpg",
    },
  },
  {
    date: "02/12/2020",
    image: "/images/card-24.jpg",
    title: "Fastest Triple-Double",
    description: "Nikola Jokic réalise un triple-double en seulement 14 minutes.",
    youtube: "https://www.youtube.com/embed/fake-url-24",
    player: {
      name: "Nikola Jokic",
      position: "Center",
      image: "/images/avatar-21.jpg",
    },
  },
  {
    date: "04/02/2009",
    image: "/images/card-25.jpg",
    title: "Most 3s in a Season by a Team",
    description: "Les Houston Rockets établissent un record collectif de 1 323 tirs à 3 pts.",
    youtube: "https://www.youtube.com/embed/fake-url-25",
    player: {
      name: "James Harden",
      position: "Shooting Guard",
      image: "/images/avatar-14.jpg",
    },
  },
  {
    date: "03/04/2017",
    image: "/images/card-26.jpg",
    title: "Booker's 70 points",
    description: "Devin Booker inscrit 70 points à seulement 20 ans contre Boston.",
    youtube: "https://www.youtube.com/embed/fake-url-26",
    player: {
      name: "Devin Booker",
      position: "Shooting Guard",
      image: "/images/avatar-22.jpg",
    },
  },
  {
    date: "05/01/2023",
    image: "/images/card-27.jpg",
    title: "Doncic's 60-20-10",
    description: "Luka Doncic signe un incroyable match à 60 points, 21 rebonds, 10 passes.",
    youtube: "https://www.youtube.com/embed/fake-url-27",
    player: {
      name: "Luka Doncic",
      position: "Point Guard",
      image: "/images/avatar-23.jpg",
    },
  },
  {
    date: "20/12/2022",
    image: "/images/card-28.jpg",
    title: "Most Points in Overtime",
    description: "Donovan Mitchell marque 13 points en prolongation pour conclure un match à 71 points.",
    youtube: "https://www.youtube.com/embed/fake-url-28",
    player: {
      name: "Donovan Mitchell",
      position: "Shooting Guard",
      image: "/images/avatar-24.jpg",
    },
  },
  {
    date: "27/11/1990",
    image: "/images/card-29.jpg",
    title: "Youngest MVP",
    description: "Derrick Rose devient le plus jeune MVP à 22 ans.",
    youtube: "https://www.youtube.com/embed/fake-url-29",
    player: {
      name: "Derrick Rose",
      position: "Point Guard",
      image: "/images/avatar-25.jpg",
    },
  },
  {
    date: "21/02/2018",
    image: "/images/card-30.jpg",
    title: "Most Points off Bench",
    description: "Lou Williams marque 50 points en sortie de banc contre les Warriors.",
    youtube: "https://www.youtube.com/embed/fake-url-30",
    player: {
      name: "Lou Williams",
      position: "Shooting Guard",
      image: "/images/avatar-26.jpg",
    },
  },
  {
    date: "18/12/2018",
    image: "/images/card-31.jpg",
    title: "First Triple-Double Rookie Debut",
    description: "Markelle Fultz devient le plus jeune à réaliser un triple-double à ses débuts.",
    youtube: "https://www.youtube.com/embed/fake-url-31",
    player: {
      name: "Markelle Fultz",
      position: "Point Guard",
      image: "/images/avatar-27.jpg",
    },
  },
  {
    date: "05/03/2019",
    image: "/images/card-32.jpg",
    title: "Most Rebounds in a Season",
    description: "Dennis Rodman détient le record de rebonds par match sur une saison moderne.",
    youtube: "https://www.youtube.com/embed/fake-url-32",
    player: {
      name: "Dennis Rodman",
      position: "Power Forward",
      image: "/images/avatar-28.jpg",
    },
  },
  {
    date: "25/04/2023",
    image: "/images/card-33.jpg",
    title: "First 40-Point Triple-Double Debut",
    description: "Ja Morant enregistre un triple-double à 40 points lors de ses débuts en playoffs.",
    youtube: "https://www.youtube.com/embed/fake-url-33",
    player: {
      name: "Ja Morant",
      position: "Point Guard",
      image: "/images/avatar-29.jpg",
    },
  },
  {
    date: "16/06/2013",
    image: "/images/card-34.jpg",
    title: "Ray Allen's Clutch 3",
    description: "Ray Allen sauve le Heat avec un tir à trois points décisif en finale 2013.",
    youtube: "https://www.youtube.com/embed/fake-url-34",
    player: {
      name: "Ray Allen",
      position: "Shooting Guard",
      image: "/images/avatar-30.jpg",
    },
  },
  {
    date: "04/02/2024",
    image: "/images/card-35.jpg",
    title: "Wembanyama's 10 blocks",
    description: "Victor Wembanyama impressionne avec un match à 10 contres dès sa saison rookie.",
    youtube: "https://www.youtube.com/embed/fake-url-35",
    player: {
      name: "Victor Wembanyama",
      position: "Center",
      image: "/images/avatar-31.jpg",
    },
  },
  {
    date: "19/06/2016",
    image: "/images/card-36.jpg",
    title: "LeBron's Block in Game 7",
    description: "LeBron James réalise un contre légendaire sur Andre Iguodala lors des Finales NBA 2016.",
    youtube: "https://www.youtube.com/embed/fake-url-36",
    player: {
      name: "LeBron James",
      position: "Small Forward",
      image: "/images/avatar-7.jpg",
    },
  },
  {
    date: "10/05/2022",
    image: "/images/card-37.jpg",
    title: "Giannis' 50-point Finals Game",
    description: "Giannis Antetokounmpo marque 50 points en finale NBA pour donner le titre aux Bucks en 2021.",
    youtube: "https://www.youtube.com/embed/fake-url-37",
    player: {
      name: "Giannis Antetokounmpo",
      position: "Power Forward",
      image: "/images/avatar-32.jpg",
    },
  }
  
];

const itemsPerPage = 3;

export default function Joueur() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showVideoIndex, setShowVideoIndex] = useState(null);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const paginatedCards = cards.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-15 mt-5" style={{ fontFamily: "'Urbanist', sans-serif" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {paginatedCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between transform transition-all duration-500 ease-in-out hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="text-sm text-gray-500 mb-2">{card.date}</div>
                <h2 className="font-semibold text-xl">{card.title}</h2>
                <p className="text-sm text-gray-700">{card.description}</p>

               
                <div className="mt-8 flex items-center space-x-2 ">
                  <img
                    src={card.player.image}
                    alt={card.player.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{card.player.name}</h3>
                    <p className="text-xs text-gray-500">{card.player.position}</p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setShowVideoIndex(showVideoIndex === index ? null : index)
                  }
                  className="ml-auto sm:-mt-7 mt-2 mb-5 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md"
                >
                  {showVideoIndex === index ? "Masquer" : "Voir Vidéo"}
                </button>

                {showVideoIndex === index && (
                  <div className="mt-4">
                    <iframe
                      width="100%"
                      height="315"
                      src={card.youtube}
                      
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* navig  */}
      <div className="flex justify-between mt-15  text-[12px]">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-3 py-2 bg-gray-200 text-black rounded-md hover:scale-105 duration-400 hover:opacity-95"
        >
           &lt;  Précédent
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-gray-200 text-black rounded-md hover:scale-105 duration-400 hover:opacity-80"
        >
          Suivant      &gt;
        </button>
      </div>

     
      <div className="text-center sm:-mt-7 -mt-18 text-sm text-gray-500">
        Page {currentPage + 1} sur {totalPages}
      </div>
    </div>
  );
}

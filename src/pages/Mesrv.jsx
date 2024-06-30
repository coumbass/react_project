import React from 'react';
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import userphoto from "../assets/user.png";

const rvs = [
  { date: 'Aujourd\'hui', time: '09H:00', name: 'Moussa Ba', icon: '👤' },
  { date: '28/05/2023', time: '08H:00', name: 'Equipe Xarala', icon: '👥' },
  { date: '28/05/2023', time: '11H:00', name: 'Réunion d\'affaire', icon: '👥' },
  { date: '22/05/2023', time: '10H:00', name: 'Pathé Fall', icon: '👤' },
];

const Mesrv = () => {
  return (
    <div className="space-y-12 p-10">
      <div className="flex items-center justify-between">
        <input type='search' placeholder="Rechercher" className="bg-black p-4 text-white rounded-full w-full" />
        <div className="flex items-center gap-3">
          <BsFillBellFill className="text-3xl" />
          <img className="w-10 h-10 rounded-full" src={userphoto} alt="user" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mes Rendez-vous</h2>
        <Link to="/page/AjoutRv">
            <button className="bg-blue-500 text-white p-1 rounded-full">
              <AiOutlinePlus className="text-xl" />
            </button>
        </Link>
        
      </div>
      <div className="divide-y">
        {rvs.map((rv, index) => (
          <div key={index} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl">{rv.icon}</div>
              <div>
                <div className="text-gray-500">
                  {index === 1 ? (
                    <Link to="/page/InfoRv" className="text-gray-500">{rv.date}</Link>
                  ) : (
                    rv.date
                  )}
                </div>
                <div className="text-blue-500">
                  {index === 1 ? (
                    <Link to="/page/InfoRv" className="text-blue-500">{rv.name}</Link>
                  ) : (
                    rv.name
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-gray-500">{rv.time}</div>
              {index === 1 ? (
                <Link to="/page/InfoRv"><AiOutlineRight className="text-xl text-blue-500" /></Link>
              ) : (
                <AiOutlineRight className="text-xl" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mesrv;

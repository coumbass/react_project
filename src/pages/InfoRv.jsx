import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import userphoto from "../assets/user.png";

const detailsRendezVous = {
  titre: 'Réunion de travail',
  avec: 'Equipe Xarala',
  date: '28/05/2023',
  heure: '08H:00',
  lieu: 'Campus Liberté 6'
};

const InfoRv = () => {
  const details = [
    { label: 'Titre', value: detailsRendezVous.titre },
    { label: 'Avec', value: detailsRendezVous.avec },
    { label: 'Date', value: detailsRendezVous.date },
    { label: 'Heure', value: detailsRendezVous.heure },
    { label: 'Lieu', value: detailsRendezVous.lieu },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-full shadow-md mb-6">
        <img className="w-20 h-20" src={userphoto} alt="Profil" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 w-96">
        <div className="space-y-4">
          {details.map((detail, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div className='font-bold'>{detail.label}:</div>
              <div>{detail.value}</div>
              <AiOutlineEdit className="text-gray-400" />
            </div>
          ))}
        </div>
        <Link to="/dashbord/rv" className="w-full">
          <button className="w-full bg-blue-500 text-white py-2 rounded mt-6">
            Enregistrer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InfoRv;

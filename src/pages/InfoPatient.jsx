import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import userphoto from "../assets/user.png";

const InfoPatient = () => {
  return (
    <div className="flex flex-col items-center p-10 space-y-6">
      <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center">
        <img src={userphoto} alt="Profile" className="w-16 h-16 rounded-full" />
      </div>
      <div className="border border-gray-300 rounded-lg p-6 space-y-4 w-full max-w-md">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Prénom:</span>
          <span>Pathé</span>
          <AiOutlineEdit className="text-gray-500" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Nom:</span>
          <span>FALL</span>
          <AiOutlineEdit className="text-gray-500" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Âge:</span>
          <span>22 ans</span>
          <AiOutlineEdit className="text-gray-500" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Adresse:</span>
          <span>Cité Senghor</span>
          <AiOutlineEdit className="text-gray-500" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Téléphone:</span>
          <span>+221 77 000 00 00</span>
          <AiOutlineEdit className="text-gray-500" />
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/dashbord/patient">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4">
              Enregistrer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoPatient;

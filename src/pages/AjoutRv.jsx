import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/RVS 1.png";

const AjoutRv = () => {
  return (
    <div className="flex flex-col items-center p-10 space-y-6">
      <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center">
        <img src={logo} alt="Rendez-vous" className="w-16 h-16 rounded-full" />
      </div>
      <div className="border border-gray-300 rounded-lg p-6 space-y-4 w-full max-w-md">
        <div>
          <input
            type="text"
            placeholder="Titre Rendez-vous"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="AVEC QUI ?"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date Rendez-vous"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div>
          <input
            type="time"
            placeholder="Heure Rendez-vous"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Lieu Rendez-vous"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/dashbord/rv">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
              Valider
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AjoutRv;

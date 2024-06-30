import React from "react";
import { Link } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";

export const Inscription = () => {
  return (
    <div className="relative min-h-screen flex">
      <div className="w-1/3 h-screen flex items-center justify-center">
        <div className="relative bottom-16">
          <div className="bg-sky-950 absolute right-5 rotate-45 w-48 h-48 rounded-xl"></div>
          <div className="bg-sky-500 absolute right-16 rotate-45 w-48 h-48 rounded-xl"></div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center w-1/3 mt-12 ml-9">
        <h2 className="text-6xl mb-8">S'inscrire</h2>
        <input className="w-full p-2 m-2 bg-gray-100 rounded" type="text" placeholder="Entrer votre nom" />
        <input className="w-full p-2 m-2 bg-gray-100 rounded" type="text" placeholder="Entrer votre prénom" />
        <input className="w-full p-2 m-2 bg-gray-100 rounded" type="text" placeholder="Adresse mail" />
        <input className="w-full p-2 m-2 bg-gray-100 rounded" type="password" placeholder="Mot de passe" />
        <Link to="/connexion" className="w-full">
          <button className="bg-sky-600 text-white py-2 rounded-xl text-xl font-bold w-full">
            S'inscrire
          </button>
        </Link>
        <Link to="/dashbord" className="w-full">
          <button className="bg-black my-5 flex items-center justify-center text-white py-2 rounded-xl text-xl font-bold w-full">
            Continuer avec Google
            <SlSocialGoogle className="mx-5" />
          </button>
        </Link>
      </div>

      <div className="w-1/3 h-screen flex items-end justify-end p-5">
        
      </div>
    </div>
  );
};

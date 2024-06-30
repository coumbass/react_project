import React from "react";
import logo from "../assets/RVS 1.png";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={logo} alt="fghjkl" />
        <nav>
          <ul className="flex">
            <li>
              <Link to="/"> Accueil</Link>
            </li>
            <li className="mx-20">
              <Link to="/dashbord/rv">Mes Rendez-vous</Link>
            </li>
            <li>
              <Link to="/dashbord/compte">Mon Compte</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link to="/connexion">
          <button className="bg-sky-600 p-4 rounded-xl text-white">
            Connexion
          </button>
          </Link>
          
          <button className="mx-10 bg-black p-4 rounded-xl text-white">
            Deconnexion
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

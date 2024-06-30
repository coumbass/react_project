import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import userphoto from "../assets/user.png";
import { Link } from 'react-router-dom';

const doctorInfo = {
  name: 'Docteur Ndiaye',
  profession: 'Dentiste',
  address: 'Cité Avion, Ouakam',
  telephone: '+221 77 000 00 02',
  email: 'astou.ndiaye90@gmail.com'
};

const Compte = () => {
  const doctorDetails = [
    { label: 'Nom', value: doctorInfo.name },
    { label: 'Profession', value: doctorInfo.profession },
    { label: 'Adresse', value: doctorInfo.address },
    { label: 'Téléphone', value: doctorInfo.telephone },
    { label: 'E-mail', value: doctorInfo.email }
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl text-blue-500 mb-6">Rendez-vous</h1>
      <div className="flex items-center mb-10  justify-center">
      <div className="bg-blue-500 rounded-full p-2 inline-block">
    <img src={userphoto} alt="Profile" className="w-16 h-16 rounded-full" />
  </div>
        <h2 className="text-xl font-bold bg-blue-500 w-4/5 py-3 mr-0">Mon compte</h2>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-3 w-80">
          <div className="space-y-4">
            {doctorDetails.map((detail, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div className='font-bold w-1/3'>{detail.label}:</div>
                <div className='w-2/3'>{detail.value}</div>
                <AiOutlineEdit className="text-gray-400" />
              </div>
            ))}
          </div>
          <Link to="/dashbord/rv">
          <button className="w-full bg-blue-500 text-white py-2 rounded mt-6">
            Enregistrer
          </button>
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default Compte;

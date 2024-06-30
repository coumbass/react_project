import React from 'react';
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import userphoto from "../assets/user.png";
import { Link } from 'react-router-dom';

const patients = [
  { icon: '👤', firstName: 'Moustapha', lastName: 'FALL', profile: 'VOIR' },
  { icon: '👥', firstName: 'Alimatou', lastName: 'SECK', profile: 'VOIR' },
  { icon: '👥', firstName: 'Pathé', lastName: 'FALL', profile: 'VOIR' },
  { icon: '👤', firstName: 'Cheikh Bara', lastName: 'DIOP', profile: 'VOIR' },
];

const Patient = () => {
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
        <h2 className="text-2xl font-bold pl-16">Mes Patients</h2>
        <Link to="/page/AjoutPatient">
          <button className="bg-blue-500 text-white p-1 rounded-full">
            <AiOutlinePlus className="text-xl" />
          </button>
        </Link>
        
      </div>
      <div className="w-full overflow-x-auto pl-16">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profil</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                  <div className="text-2xl">{patient.icon}</div>
                  {index === 2 ? (
                    <Link to="/page/InfoPatient" className="text-black-500">
                      {patient.firstName}
                    </Link>
                  ) : (
                    <div>{patient.firstName}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {index === 2 ? (
                    <Link to="/page/InfoPatient" className="text-black-500">
                      {patient.lastName}
                    </Link>
                  ) : (
                    <div>{patient.lastName}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {index === 2 ? (
                    <Link to="/page/InfoPatient">
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">
                        {patient.profile}
                      </button>
                    </Link>
                  ) : (
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full" disabled>
                      {patient.profile}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patient;

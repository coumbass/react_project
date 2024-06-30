import React from "react";
import { Navbar } from "./components/Navbar";
import FirstSreen from "./components/FirstSreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connexion } from "./pages/auth/Connexion";

import { Inscription } from "./pages/auth/Inscription";

import { NoPage } from "./pages/auth/NoPage";
import Dashboard from "./components/Dashboard";
import Accueil from "./pages/Accueil";
import  Mesrv  from "./pages/Mesrv";
import Patient  from "./pages/Patient";
import  Compte  from "./pages/Compte";
import InfoRv from "./pages/InfoRv";
import InfoPatient from "./pages/InfoPatient";
import AjoutPatient from "./pages/AjoutPatient";
import AjoutRv from "./pages/AjoutRv";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<FirstSreen />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/Inscription" element={<Inscription />} />
          </Route>

          {/* dashboard */}
          <Route path="/dashbord" element={<Dashboard />}>
            
            <Route index element={<Accueil />} />
            <Route path="/dashbord/rv" element={<Mesrv />} />
            <Route path="/dashbord/patient" element={<Patient />} />
            <Route path="/dashbord/compte" element={<Compte />} />

          </Route>
          <Route>
            <Route path="/page/InfoRv" element={<InfoRv />} />
            <Route path="page/InfoPatient" element={<InfoPatient />} /> 
            <Route path="page/AjoutPatient" element={<AjoutPatient />} /> 
            <Route path="page/AjoutRv" element={<AjoutRv />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

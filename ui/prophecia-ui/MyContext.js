"use client"
import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/paciente')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  const selectPatient = (nusha) => {
    fetch(`http://localhost:3001/paciente/${nusha}`)
      .then(response => response.json())
      .then(patient => {
        setSelectedPatient(patient);
        localStorage.setItem('selectedPatientId', patient.nusha);
      })
      .catch(error => console.error('Error al obtener los datos del paciente:', error));
  };

  return (
    <MyContext.Provider value={{ data, selectedPatient, selectPatient }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;

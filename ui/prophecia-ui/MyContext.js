'use client'

import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/paciente')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
      })
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

  const filterData = (filters) => {
    let filtered = data;

    if (filters.nombre) {
      filtered = filtered.filter(item => item.nombre.toLowerCase().includes(filters.nombre.toLowerCase()));
    }
    if (filters.apellidos) {
      filtered = filtered.filter(item => item.apellidos.toLowerCase().includes(filters.apellidos.toLowerCase()));
    }
    if (filters.dni) {
      filtered = filtered.filter(item => item.dni.toLowerCase().includes(filters.dni.toLowerCase()));
    }
    if (filters.nusha) {
      filtered = filtered.filter(item => item.nusha.toLowerCase().includes(filters.nusha.toLowerCase()));
    }

    setFilteredData(filtered);
  };

  return (
    <MyContext.Provider value={{ data, filteredData, selectedPatient, selectPatient, filterData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;

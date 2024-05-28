"use client";

import React, { useContext, useEffect, useState } from 'react';
import TableRiesgoPaciente from '../../ui/tableRisk';
import CalculadoraPaciente from '../../ui/riskCalculator';
import { MyContext } from '../../../MyContext';
import { LineChart } from '@mui/x-charts';
import { useRouter } from 'next/navigation';

export default function PacienteInfo() {
  const router = useRouter();
  const { selectedPatient, selectPatient } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const [showAllConsultas, setShowAllConsultas] = useState(false);
  useEffect(() => {
    const storedPatientId = localStorage.getItem('selectedPatientId');
    if (storedPatientId) {
      selectPatient(storedPatientId);
    }
    setLoading(false);
  }, [selectPatient]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div role="status">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!selectedPatient) {
    return <p>No hay paciente seleccionado</p>;
  }

  const columns = ["Ultima Fecha", "Riesgo", ""];
  const consultasToShow = showAllConsultas ? selectedPatient.consultas.slice().reverse() : selectedPatient.consultas.slice().reverse().slice(0, 4);

  const data1 = consultasToShow.map((consulta) => {
    const fecha = new Date(consulta.timestamp).toLocaleDateString();
    const riesgo = `${consulta.calculation_result}%`;
    let color;
    if (consulta.calculation_result > 75) {
      color = 'Rojo';
    } else if (consulta.calculation_result > 50) {
      color = 'Naranja';
    } else if (consulta.calculation_result > 25) {
      color = 'Amarillo';
    } else {
      color = 'Verde';
    }
    return [fecha, riesgo, color];
  });

  const renderCellContent = (cell, cellIndex) => {
    if (cellIndex === 2) {
      return cell === "Rojo" ? (
        <div className="w-4 h-4 rounded-full bg-red-500" />
      ) : cell === "Amarillo" ? (
        <div className="w-4 h-4 rounded-full bg-yellow-500" />
      ) : cell === "Naranja" ? (
        <div className="w-4 h-4 rounded-full bg-orange-500" />
      ) : cell === "Verde" ? (
        <div className="w-4 h-4 rounded-full bg-green-500" />
      ) : (
        cell
      );
    }
    return cell;
  };


  const latestConsulta = selectedPatient.consultas.length > 0 ? selectedPatient.consultas[selectedPatient.consultas.length - 1] : null;

  return (
    <div className='m-7 flex flex-col'>
      <h1 className='text-start mt-4'>
        <strong>PACIENTE</strong> : {`${selectedPatient.apellidos}, ${selectedPatient.nombre}`} | {selectedPatient.nusha}
      </h1>
      <hr className="border-gray-700 mb-4" />
      <div className='flex'>
        <div className='w-1/4 flex flex-col'>
          <div>
            <h1>Indicadores</h1>
            <hr className="border-gray-700 mb-4" />
            <div className='flex'>
              <div>
                {data1.length > 0 ? (
                  <>
                    <TableRiesgoPaciente columns={columns} data={data1} renderCellContent={renderCellContent} />
                    <button 
                      className="mt-4 px-4 py-2 bg-[#087021] text-white rounded"
                      onClick={() => setShowAllConsultas(!showAllConsultas)}
                    >
                      {showAllConsultas ? "Mostrar menos" : "Mostrar más"}
                    </button>
                  </>
                ) : (
                  <p>No hay consultas realizadas</p>
                )}
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <h1>Calculadora</h1>
            <hr className="border-gray-700 mb-4" />
            <div className='flex'>
              <div>
                <CalculadoraPaciente
                  columns={["FRCV", "Valor"]}
                  data={[["Hipertensión", "Si"], ["Obesidad Mórbida", "Dato4"]]}
                  dropdownOptions={{
                    "Valor": ["Si", "No"]
                  }}
                  nusha={selectedPatient.nusha}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='w-3/4 ml-12'>
          <h1>Última Consulta</h1>
          <hr className="border-gray-700 mb-4" />
          {latestConsulta ? (
            <div className='flex flex-col'>
              <p><strong>Fecha:</strong> {new Date(latestConsulta.timestamp).toLocaleDateString()}</p>
              <p><strong>Riesgo de Ictus:</strong> {latestConsulta.calculation_result}%</p>
              <LineChart
                xAxis={[{ data : consultasToShow.slice().reverse().map(consulta => new Date(consulta.timestamp)).map((_, index) => index + 1) }]}
                series={[
                  {
                    data: consultasToShow.slice().reverse().map(consulta => consulta.calculation_result),
                  },
                ]}
                width={900}
                height={300}
              />
              <h2 className='mt-4 font-semibold text-lg'>Recomendaciones:</h2>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                {latestConsulta.selected_recommendations.map((rec) => (
                  <li key={rec.id} className='bg-gray-100 p-2 rounded-lg shadow-sm'>{rec.recomendacion}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No hay consultas realizadas</p>
          )}
        </div>
      </div>
    </div>
  );
}

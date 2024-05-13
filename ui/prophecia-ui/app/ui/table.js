import React from 'react';
import { useRouter } from 'next/navigation'; 
import { useState, useEffect } from 'react';

export default function TablePaciente({ rowClickUrl = '' }) {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/paciente')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error al obtener los datos:', error));
     }, []);
     

    const handleRowClick = (url, rowData) => {
        router.push(url);
    };

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-[#087021]">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Apellidos
                            </th>
                            <th scope="col" className="px-6 py-3">
                                NUSHA
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DNI
                            </th>
                            <th scope="col" className="px-6 py-3">
                                FECHA DE NACIMIENTO
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DOMICILIO
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'} border-b hover:bg-blue-200 transition-colors duration-300 ease-in-out cursor-pointer`} onClick={() => handleRowClick(rowClickUrl, row)}>
                                <td className="px-6 py-4 whitespace-nowrap">{row.nombre}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.apellidos}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.nusha}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.dni}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.fechaDenacimiento}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.domicilio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

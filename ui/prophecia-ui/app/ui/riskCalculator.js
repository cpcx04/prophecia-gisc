import React from 'react';

export default function CalculadoraPaciente({ columns = [], data = [], rowClickUrl = '', dropdownOptions = {} }) {

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-[#087021]">
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'} border-b hover:bg-blue-200 transition-colors duration-300 ease-in-out cursor-pointer`}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                                        {dropdownOptions[columns[cellIndex]] ? (
                                            <select className="outline-none border-none">
                                                {dropdownOptions[columns[cellIndex]].map((option, optionIndex) => (
                                                    <option key={optionIndex} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            cell
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-4">
                <button type="button" className="w-[30%] bg-[#087021] hover:bg-green-400 text-white hover:text-black font-bold py-2 px-4 rounded">
                    Calcular
                </button>
                <button type="button" className="w-[30%] bg-[#087021] hover:bg-green-400 text-white hover:text-black font-bold py-2 px-4 rounded">
                    Plan de Prevención
                </button>
                <button type="button" className="w-[30%] bg-[#087021] hover:bg-green-400 text-white hover:text-black font-bold py-2 px-4 rounded">
                    Guardar
                </button>
            </div>
        </div>
    );
}

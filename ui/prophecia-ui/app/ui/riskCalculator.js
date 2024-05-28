import React, { useState } from 'react';

export default function CalculadoraPaciente({ columns = [], data = [], rowClickUrl = '', dropdownOptions = {}, nusha }) {
    const [formData, setFormData] = useState(data);

    const handleCalculate = async () => {
        const inputData = formData.reduce((acc, row) => {
            row.forEach((cell, index) => {
                acc[columns[index]] = cell;
            });
            return acc;
        }, {});

        try {
            const response = await fetch(`http://localhost:3001/paciente/calculate/${nusha}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputData)
            });

            if (response.ok) {
                const updatedProduct = await response.json();
                console.log('Updated Product:', updatedProduct);
            } else {
                console.error('Error calculating risk:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleInputChange = (rowIndex, cellIndex, value) => {
        const updatedData = [...formData];
        updatedData[rowIndex][cellIndex] = value;
        setFormData(updatedData);
    };

    const addRow = () => {
        const newRow = columns.map(() => '');
        setFormData([...formData, newRow]);
    };

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
                        {formData.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'} border-b hover:bg-blue-200 transition-colors duration-300 ease-in-out cursor-pointer`}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                                        {dropdownOptions[columns[cellIndex]] ? (
                                            <select
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                                value={cell}
                                                onChange={(e) => handleInputChange(rowIndex, cellIndex, e.target.value)}
                                            >
                                                {dropdownOptions[columns[cellIndex]].map((option, optionIndex) => (
                                                    <option key={optionIndex} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                                value={cell}
                                                onChange={(e) => handleInputChange(rowIndex, cellIndex, e.target.value)}
                                            />
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    className="bg-[#087021] hover:bg-green-400 text-white hover:text-black font-bold py-2 px-4 rounded"
                    onClick={handleCalculate}
                >
                    Calcular
                </button>
                
                <button
                    type="button"
                    className="bg-[#087021] hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                    onClick={addRow}
                >
                    Añadir Fila
                </button>
            </div>
        </div>
    );
}

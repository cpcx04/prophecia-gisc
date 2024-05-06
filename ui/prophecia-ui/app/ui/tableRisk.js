import React from 'react';

export default function TableRiesgoPaciente({ columns = [], data = [], renderCellContent }) {
    const getColorClassName = (color) => {
        switch (color.toLowerCase()) {
            case 'rojo':
                return 'bg-red-500';
            case 'amarillo':
                return 'bg-yellow-500';
            case 'naranja':
                return 'bg-orange-500';
            default:
                return '';
        }
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
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'} border-b hover:bg-blue-200 transition-colors duration-300 ease-in-out cursor-pointer`}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                                        {cellIndex === 2 ? (
                                            <div className={`w-4 h-4 rounded-full ${getColorClassName(cell)}`} /> // Utiliza la función para obtener la clase de color
                                        ) : (
                                            renderCellContent ? renderCellContent(cell) : cell // Renderizar el contenido de la celda
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

'use client'

import { useContext, useState } from 'react';
import { MyContext } from '../../MyContext';

export default function Searcher() {
    const { filterData } = useContext(MyContext);
    const [filters, setFilters] = useState({
        nombre: '',
        apellidos: '',
        dni: '',
        nusha: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        const newFilters = { ...filters, [id]: value };
        setFilters(newFilters);
        filterData(newFilters);
    };

    return (
        <form className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="nombre" className="mb-2 text-sm font-medium text-gray-900 sr-only">Nombre</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Nombre" 
                        value={filters.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="dni" className="mb-2 text-sm font-medium text-gray-900 sr-only">DNI</label>
                    <input 
                        type="text" 
                        id="dni" 
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="DNI" 
                        value={filters.dni}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="apellidos" className="mb-2 text-sm font-medium text-gray-900 sr-only">Apellidos</label>
                <input 
                    type="text" 
                    id="apellidos" 
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Apellidos" 
                    value={filters.apellidos}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mt-5 mb-3">
                <label htmlFor="nusha" className="mb-2 text-sm font-medium text-gray-900 sr-only">NUHSA</label>
                <input 
                    type="text" 
                    id="nusha" 
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="NUSHA" 
                    value={filters.nusha}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    );
}

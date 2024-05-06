'use client'

import { useRouter } from 'next/navigation';

export default function Searcher(){
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/results');
    };
    return (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>  

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="nombre" className="mb-2 text-sm font-medium text-gray-900 sr-only">Nombre</label>
                    <input type="text" id="nombre" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Nombre" required />
                </div>
                <div>
                    <label htmlFor="dni" className="mb-2 text-sm font-medium text-gray-900 sr-only">DNI</label>
                    <input type="text" id="dni" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="DNI" required />
                </div>
            </div>
        
       
                <div>
                    <label htmlFor="apellidos" className="mb-2 text-sm font-medium text-gray-900 sr-only">Apellidos</label>
                    <input type="text" id="apellidos" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Apellidos" required />
                </div>
                <div className="mt-5 mb-3">
                    <label htmlFor="nuhsa" className="mb-2 text-sm font-medium text-gray-900 sr-only">NUHSA</label>
                    <input type="text" id="nuhsa" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="NUSHA" required />
                </div>
      

            <button type="submit"  className="w-full bg-[#087021] hover:bg-green-400 text-white hover:text-black font-bold py-2 px-4 rounded">
                Buscar
            </button>

        </form>
    );
}

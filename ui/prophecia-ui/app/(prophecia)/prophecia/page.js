'use client'

import { useState } from 'react';
import TablePaciente from '../../ui/table';
import ColectivoComponent from '../../ui/colectivo'
import Searcher from '../../ui/searcher';

export default function PropheciaPage() {
    const [view, setView] = useState('individual');

    const toggleView = () => {
        setView(view === 'individual' ? 'colectivo' : 'individual');
    };

    return (
        <>
            <div className="flex m-5">
                <div className="w-full p-4">
                    <h1 className="text-start mb-4"><strong>ULTIMAS CONSULTAS</strong></h1>
                    <hr className="border-gray-700 my-4" />
                    {view === 'individual' && <TablePaciente rowClickUrl="/paciente" />}
                    
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                    <h1 className="mb-4">
                        <span
                            onClick={() => setView('individual')}
                            className={`cursor-pointer ${view === 'individual' ? 'font-bold' : ''}`}
                        >
                            INDIVIDUAL
                        </span>
                        {' | '}
                        <span
                            onClick={() => setView('colectivo')}
                            className={`cursor-pointer ${view === 'colectivo' ? 'font-bold' : ''}`}
                        >
                            COLECTIVO
                        </span>
                    </h1>
                    <hr className="border-gray-700 my-4" />
                    {view === 'individual' && <Searcher />}
                </div>
            </div>
            {view === 'colectivo' && <ColectivoComponent/>}
        </>
    );
}

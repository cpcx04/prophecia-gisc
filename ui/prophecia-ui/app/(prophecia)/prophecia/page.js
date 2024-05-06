'use client'

import NavBar from '../../ui/navbar';
import TablePaciente from '../../ui/table';
import Searcher from '../../ui/searcher';

export default function PropheciaPage() {

   return (
      <>
         <div className='flex m-5'>
            <div className='w-full p-4'>
               <h1 className='text-start mb-4'><strong>ULTIMAS CONSULTAS</strong></h1>
               <hr className="border-gray-700 my-4" />
               <TablePaciente rowClickUrl='/paciente'/>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
               <h1 className='mb-4'><strong>INDIVIDUAL | </strong>COLECTIVO</h1>
               <hr className="border-gray-700 my-4" />
               <Searcher />
            </div>
         </div>
      </>
   );
}
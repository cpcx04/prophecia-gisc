'use client'
import TablePaciente from '../../ui/table';
import { useRouter } from 'next/navigation';

export default function SearchResult() {
    const router = useRouter();
    const columns = ["Apellidos", "Nombre", "NUSHA", "DNI","Fecha de Nacimiento","Domicilio" ];
    const data1 = [
        ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
    ];
    const data = [
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
       ["Apellido1,Apellido2 ", "Nombre1", "AN-XXXXXX", "XXXXXXXXA","12/11/2024","C/Condes de Bustillo,10A"],
   ];

    return(
        <div className='m-10'>
            <h1 className='text-center'><strong>RESULTADOS</strong></h1>
            <hr className="border-gray-700 my-4 mb-10" />
            <TablePaciente columns={columns} data={data} rowClickUrl='/paciente'/>
        </div>
    );
}
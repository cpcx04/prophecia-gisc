import React from 'react';
import TableRiesgoPaciente from '../../ui/tableRisk';
import CalculadoraPaciente from '../../ui/riskCalculator'
export default function PacienteInfo() {
    const columns = ["Ultimas Consultas", "Riesgo de Ictus", ""];
    const riesgo = ["FRCV", "Valor"];
    const info = ["HIPERTENSION",["SI","NO"]]
    const data1 = [
        ["12/11/2024", "12%", "Rojo"],
        ["12/10/2024", "8%", "Rojo"],
        ["12/9/2024", "7%", "Amarillo"],
        ["12/5/2024", "3%", "Naranja"],
    ];

    const renderCellContent = (cell) => {
        return cell === "Rojo" ? (
            <div className="w-4 h-4 rounded-full bg-red-500" />
        ) : cell === "Amarillo" ? (
            <div className="w-4 h-4 rounded-full bg-yellow-500" />
        ) : cell === "Naranja" ? (
            <div className="w-4 h-4 rounded-full bg-orange-500" />
        ) : cell;
    };

    return (
        <div className='m-7 flex flex-col'>
            <h1 className='text-start mt-4'><strong>PACIENTE</strong> :  Apellido1, Apellido2, Nombre  |  AN-886575</h1>
            <hr className="border-gray-700 mb-4" />
            <div className='flex'>
                <div className='w-1/4'>
                    <div>
                        <h1>Indicadores</h1>
                        <hr className="border-gray-700 mb-4 " />
                        <div className='flex'>
                            <div>
                                <TableRiesgoPaciente columns={columns} data={data1} renderCellContent={renderCellContent} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-3/4 ml-12'>
                    <h1>Ultima Consulta</h1>
                    <hr className="border-gray-700 mb-4 " />
                    <div className='flex items-center justify-center'>
                    </div>
                </div>
            </div>
            <div className='flex mt-6'>
                <div className='w-1/4'>
                    <div>
                        <h1>Calculadora</h1>
                        <hr className="border-gray-700 mb-4 " />
                        <div className='flex'>
                            <div>
                            <CalculadoraPaciente
                                columns={["FRCV", "Valor"]}
                                data={[["Hipertension", "Si"], ["Obesidad Morbida", "Dato4"]]}
                                dropdownOptions={{
                                    "Valor": ["Si", "No"]
                                }}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

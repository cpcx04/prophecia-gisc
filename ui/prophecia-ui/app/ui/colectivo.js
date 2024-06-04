'use client';

import { useState } from 'react';
import { BarChart } from '@mui/x-charts';

export default function ColectivoComponent() {
  const [ageRange, setAgeRange] = useState([20, 50]);
  const [city, setCity] = useState('');
  const [showCityOptions, setShowCityOptions] = useState(false);
  const [selectedFRCV, setSelectedFRCV] = useState([]);
  const [searchFRCV, setSearchFRCV] = useState('');
  const [sex, setSex] = useState('');
  const [chartData, setChartData] = useState([]);


  const frcvOptions = ['Hipertensión', 'Diabetes', 'Tabaquismo', 'Dislipidemia', 'Obesidad', 'Colesterol', 'Inactividad Fisica'];
  const filteredFRCVOptions = frcvOptions.filter((option) => option.toLowerCase().includes(searchFRCV.toLowerCase()));
  const sexOptions = ['Masculino', 'Femenino'];

  const handleFRCVChange = (option) => {
    setSelectedFRCV((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleCitySearch = (e) => {
    setCity(e.target.value);
    setShowCityOptions(e.target.value.length > 0);
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setShowCityOptions(false);
  };

  const cities = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza'];

  const dataset = [
    { month: 'Enero', seoul: 50 },
    { month: 'Febrero', seoul: 20 },
    { month: 'Marzo', seoul: 30 },
    { month: 'Abril', seoul: 40 },
    { month: 'Mayo', seoul: 10 },
    { month: 'Junio', seoul: 70 },
    { month: 'Julio', seoul: 60 },
    { month: 'Agosto', seoul: 90 },
    { month: 'Septiembre', seoul: 80 },
    { month: 'Octubre', seoul: 50 },
    { month: 'Noviembre', seoul: 40 },
    { month: 'Diciembre', seoul: 30 },
  ];
  const filterData = () => {
    const filteredData = dataset.map((data) => {
      let riskMultiplier = 1;
      if (selectedFRCV.includes('Hipertensión')) riskMultiplier += 0.1;
      if (selectedFRCV.includes('Diabetes')) riskMultiplier += 0.1;
      if (selectedFRCV.includes('Tabaquismo')) riskMultiplier += 0.1;
      if (selectedFRCV.includes('Dislipidemia')) riskMultiplier += 0.1;
      if (selectedFRCV.includes('Obesidad')) riskMultiplier += 0.1;

      if (sex === 'Masculino') riskMultiplier += 0.1;
      if (ageRange[0] < 40) riskMultiplier -= 0.1;
      if (ageRange[0] >= 60) riskMultiplier += 0.1;

      return { ...data, seoul: data.seoul * riskMultiplier };
    });

    setChartData(filteredData);
  };

  return (
    <div className="flex">
      <div className="flex flex-col p-4 space-y-6 w-full">
        {/* Age Range */}
        <div className="border p-4 rounded space-y-4">
          <h2 className="font-bold text-lg mb-2">Rango de Edad</h2>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="100"
            value={ageRange[0]}
            onChange={(e) => setAgeRange([Number(e.target.value), ageRange[1]])}
          />
          <div className="flex justify-between mt-2">
            <span>Edad: {ageRange[0]} años</span>
          </div>
        </div>

        {/* City Search */}
        <div className="border p-4 rounded space-y-4">
          <h2 className="font-bold text-lg mb-2">Ciudad</h2>
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Buscar ciudad"
            value={city}
            onChange={handleCitySearch}
          />
          {showCityOptions && (
            <div className="mt-2 max-h-40 overflow-y-auto">
              {cities
                .filter((c) => c.toLowerCase().includes(city.toLowerCase()))
                .map((filteredCity) => (
                  <div
                    key={filteredCity}
                    className="cursor-pointer p-2 hover:bg-gray-200 rounded"
                    onClick={() => handleCitySelect(filteredCity)}
                  >
                    {filteredCity}
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* FRCV */}
        <div className="border p-4 rounded space-y-4">
          <h2 className="font-bold text-lg mb-2">FACTORES DE RIESGO CARDIOVASCULARES (FRCV)</h2>
          <input
            type="text"
            className="border p-2 rounded w-full mb-4"
            placeholder="Buscar FRCV"
            value={searchFRCV}
            onChange={(e) => setSearchFRCV(e.target.value)}
          />
          <div className="flex flex-wrap space-x-4">
            {filteredFRCVOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFRCV.includes(option)}
                  onChange={() => handleFRCVChange(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sex */}
        <div className="border p-4 rounded space-y-4">
          <h2 className="font-bold text-lg mb-2">Sexo</h2>
          <div className="flex space-x-4">
            {sexOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="sex"
                  value={option}
                  checked={sex === option}
                  onChange={(e) => setSex(e.target.value)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          className="bg-[#087021] hover:bg-green-400 text-white p-2 rounded"
          onClick={filterData}
        >
          Actualizar Gráfica
        </button>
      </div>

      <div className="w-full p-4 flex justify-end">
        {/* Bar Chart */}
        <div className="border p-4 rounded w-full">
          <h2 className="font-bold text-lg mb-2">Riesgo por meses según casos</h2>
          <div className="h-96 bg-gray-100 rounded flex items-center justify-center">
            <BarChart
              dataset={chartData.length ? chartData : dataset}
              yAxis={[{scaleType: 'band', dataKey: 'month' }]}
              series={[{color: '#087021', dataKey: 'seoul', label: 'Riesgo de Ictus' }]}
              layout="horizontal"
              borderRadius={15}            
              />
          </div>
        </div>
      </div>
    </div>
  );
}

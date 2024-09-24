import React, { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";

const App = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [showTrigonometry, setShowTrigonometry] = useState(false);

  const operators = ['+', '-', '*', '/', '.'];

  const calculateTrigonometry = (func, value) => {
    const degrees = parseFloat(value);
    const radians = degrees * (Math.PI / 180);

    switch (func) {
      case 'Sin':
        return Math.sin(radians);
      case 'Cos':
        return Math.cos(radians);
      case 'Tan':
        return Math.tan(radians);
      case 'Log':
        return Math.log(degrees);
        case 'Exp':
          return Math.exp(degrees);
      default:
        return null;
    }
  };

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplayValue('');
    } else if (value === 'DE') {
      setDisplayValue(displayValue.slice(0, -1));
    } else if (value === '=') {
      try {
        const trigonometryMatch = displayValue.match(/(Sin|Cos|Tan|Log|Exp)\(([^)]+)\)/);
        if (trigonometryMatch) {
          const func = trigonometryMatch[1];
          const angleOrValue = trigonometryMatch[2];
          const result = calculateTrigonometry(func, angleOrValue);
          setDisplayValue(result.toString());
        } else {
          setDisplayValue(eval(displayValue).toString());
        }
      }
      catch {
        setDisplayValue('error');
      }
    } else {
      const lastChar = displayValue[displayValue.length - 1];
      if (operators.includes(lastChar)) {
        if (operators.includes(value)) {
          setDisplayValue(prev => prev.slice(0, -1) + value);
          return;
        }
      }
      setDisplayValue(prev => prev + value);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-gray-800 p-4 rounded-2xl shadow-lg w-96 space-y-4">
        <div>
          <input
            type="text"
            name="display"
            className="w-full text-right text-black text-3xl p-4 bg-gray-200 rounded-lg"
            value={displayValue}
            readOnly
          />
          <div className='flex mt-1 -mb-2  justify-end'>
            <FaChevronCircleDown
              className='flex text-white cursor-pointer'
              onClick={() => setShowTrigonometry(!showTrigonometry)}
            />
          </div>
          {showTrigonometry && (
            <div className="grid grid-cols-4 mt-3 font-bold gap-1">
              <input
                type="button"
                value="Sin"
                className="bg-gray-300  cursor-pointer p-4 rounded-lg text-xl"
                onClick={() => handleButtonClick('Sin(')}
              />
              <input
                type="button"
                value="Cos"
                className="bg-gray-300  cursor-pointer p-4 rounded-lg text-xl"
                onClick={() => handleButtonClick('Cos(')}
              />
              <input
                type="button"
                value="Tan"
                className=" cursor-pointer bg-gray-300 p-4  rounded-lg text-xl"
                onClick={() => handleButtonClick('Tan(')}
              />
              <input
                type="button"
                value="Log"
                className=" cursor-pointer bg-gray-300 p-4  rounded-lg text-xl"
                onClick={() => handleButtonClick('Log(')}
              />
              <input
                type="button"
                value="Exp"
                className=" cursor-pointer bg-gray-300 p-4  rounded-lg text-xl"
                onClick={() => handleButtonClick('Exp(')}
              />
              <input
                type="button"
                value="("
                className=" cursor-pointer bg-gray-300 p-4  rounded-lg text-xl"
                onClick={() => handleButtonClick('(')}
              />
              <input
                type="button"
                value=")"
                className=" cursor-pointer bg-gray-300 p-4  rounded-lg text-xl"
                onClick={() => handleButtonClick(')')}
              />
            </div>
          )}
        </div>
        <div className="grid  grid-cols-4 font-bold gap-1">
          <input
            type="button"
            value="AC"
            className="bg-red-500 text-white cursor-pointer p-4 rounded-lg text-xl"
            onClick={() => handleButtonClick('AC')}
          />
          <input
            type="button"
            value="DE"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('DE')}
          />
          <input
            type="button"
            value="."
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('.')}
          />
          <input
            type="button"
            value="/"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('/')}
          />

          <input
            type="button"
            value="7"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('7')}
          />
          <input
            type="button"
            value="8"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('8')}
          />
          <input
            type="button"
            value="9"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('9')}
          />
          <input
            type="button"
            value="*"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('*')}
          />

          <input
            type="button"
            value="4"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('4')}
          />
          <input
            type="button"
            value="5"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('5')}
          />
          <input
            type="button"
            value="6"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('6')}
          />
          <input
            type="button"
            value="-"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('-')}
          />

          <input
            type="button"
            value="3"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('3')}
          />
          <input
            type="button"
            value="2"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('2')}
          />
          <input
            type="button"
            value="1"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('1')}
          />
          <input
            type="button"
            value="+"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('+')}
          />

          <input
            type="button"
            value="00"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('00')}
          />
          <input
            type="button"
            value="0"
            className="bg-gray-300 p-4 cursor-pointer rounded-lg text-xl"
            onClick={() => handleButtonClick('0')}
          />
          <input
            type="button"
            value="="
            className="col-span-2 bg-blue-500 cursor-pointer text-white p-4 rounded-lg text-xl"
            onClick={() => handleButtonClick('=')}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

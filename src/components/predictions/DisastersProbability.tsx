"use client"
import { useState } from 'react';
import ModuleTitle from '../ui/ModuleTitle';
import DisastersFetch from './DisastersFetch';


const DisastersProbability = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [disaster, setDisaster] = useState<any>('Flood');


  return (
    <div>
      <div className="flex flex-row justify-between">
        <ModuleTitle title="Probability of disasters" />

        {/* buttotn */}
        <div className="flex flex-row items-center space-x-3">
          <button
            className={`${
              disaster == 'Flood'
                ? 'bg-primary text-white'
                : 'text-primary bg-white'
            } w-full px-4 py-2 text-xs font-medium cursor-pointer  rounded-md border border-primary `}
            onClick={() => setDisaster('Flood')}
          >
            Flood
          </button>
          <button
            className={`${
              disaster == 'Drought'
                ? 'bg-primary text-white'
                : 'text-primary bg-white'
            } w-full px-4 py-2 text-xs font-medium cursor-pointer rounded-md border border-primary `}
            onClick={() => setDisaster('Drought')}
          >
            Drought
          </button>
        </div>
      </div>

      {/* probability */}
      <DisastersFetch disaster={disaster} />

    </div>
  );
};

export default DisastersProbability;

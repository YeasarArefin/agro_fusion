"use client"

import { useState } from 'react';
import ModuleTitle from '../ui/ModuleTitle';
import UVIndexChart from './UVIndexChart';
import UVSolution from './UVSolution';

interface uvindextype {
  uv: number;
  level: string;
}

const UVindexSituation = () => {
  const [uvindexarr, setuvindexarr] = useState<uvindextype[]>([]);

  return(
    (
      <>
    
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-2 border-b border-slate-200 px-10 py-5">
            <div>
              <div className="flex justify-between pb-3">
                <div>
                  <div className="mb-3">
                    <ModuleTitle title="UV Index" />
                  </div>
                  <h1 className="text-lg">Result: </h1>
                </div>
              </div>
              <UVIndexChart setuvindexarr={setuvindexarr} />
            </div>          </div>
          <div className="col-span-2 border-l border-b border-slate-200 px-10 py-5 flex flex-col gap-y-10">
            <UVSolution uvindexarr={uvindexarr} />
          </div>
        </div>
    
    
    
      </>
    )
  )
};

export default UVindexSituation;

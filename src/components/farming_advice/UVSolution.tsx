'use client';

import Link from 'next/link';
// import { useState } from 'react';
// import Markdown from '../help/markdown';
import ModuleTitle from '../ui/ModuleTitle';
import Markdown from '../help/markdown';


type uvindextype = {
  uv: number;
  level: string;

}




function UVSolution({ uvindexarr }:{uvindexarr:uvindextype[]}) {

 
  const solution_Data = [
    {
      id: 1,
      state: 'UV_HIGH',
      solution: `
      When UV levels go above 8, they can harm crops by damaging cells 
      and slowing growth. Farmers can protect crops with these simple steps:
**1.Shade Nets or Tunnels:** Use nets or UV-blocking greenhouses to reduce UV rays.

**2.Mulching:** Cover soil with organic or reflective mulch to lower heat and UV exposure.

**3.UV-Tolerant Crops:** Plant crops that can handle UV stress.

**4.Increase Watering:** Keep soil moist to help plants manage UV stress.

**5.Anti-Stress Agents:** Use biostimulants like seaweed extracts to boost plant resistance.

**6.Protective Sprays:** Apply UV-blocking sprays like kaolin clay to protect leaves.

**7.Dense Planting or Intercropping:** Plant crops closer or with taller plants to create shade.

**8.Monitor UV Levels:** Check UV levels to act when they get too high.

`,
    },
    {
      id: 2,
      state: 'UV_LOW',
      solution: `
**1.Low UV levels (below 3 UV index)**: Minimal effect on crops, potentially leading to less robust growth or lower production of protective compounds.

**2.Moderate UV levels (UV index of 3–7.5)**: Often beneficial as they can enhance crop hardiness, stress tolerance, and nutrient content without causing damage.

**3.High UV levels (UV index above 7.5):** May become detrimental, especially without adequate protective measures like shading or selective breeding for UV tolerance.
Optimal UV exposure depends on the crop species, geographic location, and existing adaptations to sunlight intensity.
preventive measures against UV (If level is over 7.5)

`,
    }
  ];
console.log(uvindexarr)

const filterUVindex = uvindexarr?.find((item) => item.level == "High");

  return (
    <div>
      <div className="flex justify-between pb-3">
        <div>
          <div className="mb-3">
            <ModuleTitle title="Possible Solutions: " />
          </div>
        </div>
      </div>

    

      {/* solution  */}
      <div>
      
              <div className="mt-6">

                {filterUVindex?.level == "High" ? (
                  <>
                    <div className="text-sm text-justify bg-red-200 p-4 rounded-md">
                      <Markdown text={solution_Data[0]?.solution} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm text-justify text-wrap bg-green-200 p-4 rounded-md">
                      <Markdown text={solution_Data[1]?.solution} />
                    </div>
                  </>
                )}

              </div>
           
       


        {/* help route  */}
        <Link href="/dashboard/help">
          <div className="cursor-pointer text-xs bg-green-50 border border-secondary py-3 px-3 rounded-md mt-4">
            Ask more help here:{' '}
            <Link href="/dashboard/help" className="font-bold text-primary">
              Help Center
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UVSolution;

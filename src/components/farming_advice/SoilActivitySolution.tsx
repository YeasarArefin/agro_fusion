'use client';

import Link from 'next/link';
import ModuleTitle from '../ui/ModuleTitle';

const SoilActivitySolution = () => {

  return (
    <div>
      <div className="flex justify-between pb-3">
        <div>
          <div className="mb-3">
            <ModuleTitle title="Recommendations: " />
          </div>
        </div>
      </div>



      <div>
        {/* Recommendations  */}
        <p className='font-semibold'>Crops that can be planted 
        </p>
        <ul className='list-disc'>
          <li>Cereals: Wheat, barley, maize, oats.</li>
          <li>Legumes: Peas, beans, lentils.          </li>
          <li>Root Crops: Potatoes, beets, carrots.          </li>
          <li>Vegetables: Cabbage, onions, tomatoes.</li>
          <li>Fruit Trees: Apples, pears, cherries.          </li>
          <li>Forage Crops: Alfalfa, clover for livestock feed.          </li>
        </ul>
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

export default SoilActivitySolution;

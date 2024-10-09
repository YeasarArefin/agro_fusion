'use client';

import Link from 'next/link';
import ModuleTitle from '../ui/ModuleTitle';

interface DiseaseSolutionProps {
  data: DiseaseData[]; // Replace 'any' with the appropriate type if known
}

interface DiseaseData {
  disease: string;
}

const DiseaseSolution = ({ data }: DiseaseSolutionProps) => {


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

        <p><Link href="/dashboard/help?ask=What to do if I have chilli antracnose,eggplant cercospora leaf spot,tomato antracnose,. Simplify and make the answer more direct. Also give me preventive measures." className="font-bold text-primary">
          Click here for recommendations
        </Link> </p>
        <div className='border border-slate-200 rounded-md p-4 mt-2'>
          What to do if I have {data?.map((item: DiseaseData, index) => (
            <span className='font-bold' key={index}>{item?.disease},</span>
          ))}. Simplify and make the answer more direct. Also give me preventive measures.
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

export default DiseaseSolution;

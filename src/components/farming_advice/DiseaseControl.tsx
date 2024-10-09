"use client";
import ModuleTitle from '../ui/ModuleTitle';

interface dData {
  id: number;
  name: string;
  disease: string; // Added the missing 'disease' property
}
interface DiseaseControlProps {

  data: dData[];

}

const DiseaseControl: React.FC<DiseaseControlProps> = ({ data }) => {

  return (
    <>
      <div>
        <div className="  pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="Disease Control " />
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col md:items-center gap-3 justify-center h-full'>
              <h1 className="text-lg font-bold">Total Disease Detected: </h1>
              <h1 className='text-primary text-7xl font-bold'>0{data.length}</h1>
            </div>

            {/* all disease   */}
            <div className='flex flex-col space-y-2'>
              <h1 className="text-lg font-bold">Detected Diseases: </h1>

              {
                data?.map((item, index) => {
                  return (
                    <>
                      <p className='p-3 w-full rounded-lg bg-green-100 capitalize' key={item?.id}>{index + 1}.{item?.disease}</p>
                    </>
                  );
                })
              }
            </div>
          </div>


          {/* content  */}
        </div>

      </div>
    </>
  );
};

export default DiseaseControl;

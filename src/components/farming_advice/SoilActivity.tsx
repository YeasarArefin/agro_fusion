import ModuleTitle from '../ui/ModuleTitle';
import SoilActivityState from './SoilActivityState';

const SoilActivity = () => {
  const soil_type = SoilActivityState();

  return (
    <>
      <div>
        <div className="flex justify-between pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="Soil Type" />
            </div>
          </div>
        </div>


        {/* details  */}
        <div className='flex flex-col space-y-4'>

        <div className='flex flex-col items-center justify-center'>
          <div className="bg-primary flex flex-col items-center w-40 h-40 justify-center rounded-xl p-4">
            <h1 className='text-3xl text-white'>{soil_type}</h1>
          </div>
        </div>


              {/* soil Details  */}
              <div>
              <h2 className='font-bold'>Soil Details</h2>
    <div className="border mt-2 border-slate-200 rounded-md flex flex-col items-center w-full justify-center p-4">
            <p className='text-sm text-slate-600'>Is clay rich and can be slightly acidic, has risk of waterlogging and is good for cultivation. Fertilizers play an important role in farming on these. </p>
          </div>
              </div>

     

        </div>
    
      </div>
    </>
  );
};

export default SoilActivity;

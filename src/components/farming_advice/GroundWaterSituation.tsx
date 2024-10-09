import ModuleTitle from '../ui/ModuleTitle';
import ViewReportBtn from '../ui/ViewReportBtn';
import GroundWaterLevelLineChart from './GroundWaterLevelLineChart';

const GroundWaterSituation = () => {
  return (
    <>
      <div>
        <div className="flex justify-between pb-3">
          <div>
            <div className="mb-3">
              <ModuleTitle title="Current Situation of Groundwater" />
            </div>
            <h1 className="text-lg">Result: </h1>
          </div>
          <ViewReportBtn />
        </div>

        <GroundWaterLevelLineChart />
      </div>
    </>
  );
};

export default GroundWaterSituation;

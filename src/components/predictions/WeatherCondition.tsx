import ModuleTitle from '../ui/ModuleTitle';
import WeatherFetch from './WeatherFetch';

const WeatherCondition = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <ModuleTitle title="Weather Conditions" />
        {/* <ViewReportBtn /> */}
      </div>

      <WeatherFetch />
    </div>
  );
};

export default WeatherCondition;

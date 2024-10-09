import DisastersProbability from '@/components/predictions/DisastersProbability';
import GroundWaterPredict from '@/components/predictions/GroundWaterPredict';
import LandCondition from '@/components/predictions/LandCondition';
import WeatherCondition from '@/components/predictions/WeatherCondition';
import PageTitle from '@/components/ui/PageTitle';
import LandTemp from '../../../../components/predictions/LandTemp';

export default function page() {
  return (
    <main className="lg:px-16">
      <PageTitle title="Predictions" />

      <div className="flex flex-col space-y-2 py-8">
        {/* 1st portion  */}

        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-2 border-b border-slate-200 md:px-10 md:py-5">
            <WeatherCondition />
          </div>
          <div className="col-span-2 border-l border-b border-slate-200 md:px-10 md:py-5">
            <DisastersProbability />
          </div>
        </div>
        {/* 2nd Portion  */}

        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-2 border-b border-slate-200 md:px-10 md:py-5">
            <LandTemp />
          </div>
          <div className="col-span-2 border-l border-b border-slate-200 md:px-10 md:py-5 ">
            <LandCondition />
          </div>
        </div>

        {/* 3rd portion  */}
        <div className="">
          <GroundWaterPredict />
        </div>
      </div>
    </main>
  );
}

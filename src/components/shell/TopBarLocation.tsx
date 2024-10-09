import { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";

const TopBarLocation = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [location, setLocation] = useState<any>({});

  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=23.8221&lon=90.4274&apiKey=6e6ddceb233743eb9fb3fcc4d111435d`)
      .then(response => response.json())
      .then(result => {
        setLocation(result?.features[0]?.properties);
        
      }
      )
      .catch(error => console.log('error', error));
  }, []);

  console.log(location)

  return (
    <div className='border border-slate-200 px-2 py-3 rounded-full flex flex-row items-center space-x-2'>

      <FaLocationDot className='text-primary text-lg' />
      <h1 className='text-xs'>Mohammadpur,Dhaka</h1>
      {/* <h1 className='text-xs'>{location?.address_line1}</h1> */}

    </div>
  );
};

export default TopBarLocation;

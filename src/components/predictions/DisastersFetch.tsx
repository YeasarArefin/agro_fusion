/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React from 'react'
import FloodChart from './FloodChart';
import DroughtChart from './DroughtChart';
// import FloodFetch from './FloodFetch';

interface DisastersFetchProps {
  disaster: string;

}
const floodProbablity = 45;
const droughtProbablity = 10;

  //push alert 
  setTimeout(() => {
    if (floodProbablity >= 90){
      axios.post('/api/alert', {
        alert: `The Chances of Flood ${floodProbablity}%`,
        description: `Flood is happending soon in your area.`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } 
  
    if (droughtProbablity >= 90){
      axios.post('/api/alert', {
        alert: `The Chances of Drought ${droughtProbablity}%`,
        description: `Drought is happending soon in your area.`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
  
  }, 21600000);


  //risk changes create 
  let floodriskChanges: string;   
  let droughtriskChanges: string;   
  
  //floods risk condition 
  if(floodProbablity >0 && floodProbablity <=40){
    floodriskChanges="Safe"

  }else if(floodProbablity >40 && floodProbablity <=90){
    floodriskChanges="Moderate"
  }else{
    floodriskChanges="High"
  }

  //drought risk condition 
  if(droughtProbablity >0 && droughtProbablity <=40){
    droughtriskChanges="Safe"

  }else if(droughtProbablity >40 && droughtProbablity <=90){
    droughtriskChanges="Moderate"
  }else{
    droughtriskChanges="High"

  }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DisastersFetch: React.FC<DisastersFetchProps> = ({disaster}) => {

  return (
  <>
         {/* probability */}

         {disaster === 'Flood' ? (
        <div className="mt-5">
          <div className={`w-full p-4  rounded-lg flex flex-row items-center justify-around ${floodriskChanges=="Safe" ? "text-green-700 border border-green-600 bg-green-100 ": floodriskChanges=="Moderate"?"border border-yellow-600 bg-yellow-100 text-yellow-700":"border border-red-600 bg-red-100 text-red-700"} `}>
            <h1 className="text-sm">Chances of floods: <span className='font-bold'>{floodProbablity}%</span></h1>
            <p className="text-sm">Risk Type: <span className='font-bold'>{floodriskChanges}</span></p>
           
          </div>

           {/* flood chart   */}
           <FloodChart />
        </div>
      ) : (
        <div className="mt-5">
        <div className={`w-full p-4  rounded-lg flex flex-row items-center justify-around ${droughtriskChanges=="Safe" ? "text-green-700 border border-green-600 bg-green-100 ": droughtriskChanges=="Moderate"?"border border-yellow-600 bg-yellow-100 text-yellow-700":"border border-red-600 bg-red-100 text-red-700"} `}>
          <h1 className="text-sm">Chances of Droughts: <span className='font-bold'>{droughtProbablity}%</span></h1>
          <p className="text-sm">Risk Type: <span className='font-bold'>{droughtriskChanges}</span></p>
         
        </div>

         {/* drought chart   */}
         <DroughtChart />
      </div>
      )}
  </>
  )
}

export default DisastersFetch

"use client"

import { Alert } from '@/types/types';
import React from 'react'

const AlertsComp = ({ data }: { data: Alert[]; }) => {

  return (
    <div className='flex flex-col-reverse'>
      {data?.map(item =>{

        const date = new Date(item?.createdAt);

        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Dhaka',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        };

        // Format the date and time in GMT+6
        const formattedDate = date.toLocaleString('en-US', options as Intl.DateTimeFormatOptions);

        return(
          <>
          <div key={item?._id} className='mt-6'>
            <div className="flex flex-col p-6 rounded-md bg-red-100 text-red-600">
              <h2 className='font-bold text-lg'>{item.alert}</h2>
              <p className='text-slate-600'>{item?.description}</p>
            <p className='text-slate-500 text-xs'> {formattedDate}</p>
            </div>
          </div>
          </>
        )
      } )}
    </div>
  )
}

export default AlertsComp

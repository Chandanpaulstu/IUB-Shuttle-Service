import React from 'react'
import {schedules} from '../utils/data'
function CustomerServicePanel() {
  
  return (
    
      <div className='bg-white w-2/3 h-full p-6 shadow-lg'>
        
        <div>
            <h2 className='uppercase font-bold text-3xl'>Todays update</h2>
        </div>
        <div className='my-4 flex w-full justify-between p-2 rounded-lg bg-slate-100  '>
          <p className='text-xl font-base'>Total seat booked </p>
          <p className='text-xl font-base font-bold'>50</p>
        </div>

        <div className='flex flex-col gap-8'>
          {
            schedules?.map(schedule => (
              <div key={schedule?.routeNo} className='flex flex-col rounded  gap-3 bg-gray-100 p-4'>
                <p className='font-bold text-gray-500 '>Route {schedule?.routeNo}</p>
                <div className='flex items-center justify-between'>
                    <p className='text-sm font-light text-gray-500'>Seat reservation</p>
                    <p className='text-sm font-bold text-gray-500'>25</p>
                </div>
              </div>
            ))

          }
          
          
        </div>

      </div>
  )
}

export default CustomerServicePanel
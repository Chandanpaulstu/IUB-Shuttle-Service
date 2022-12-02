import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetRoute, selectRoute, setRoute } from '../features/routeSlice'
import { schedules } from '../utils/data'
function Table({setShowBook}) {
  const dispatch = useDispatch();


//   useEffect(()=>{
//     dispatch(resetRoute(null))
//   },[])

  return (
   <div>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    
                    <table className="min-w-full text-center">
                    
                    <thead className="border-b bg-gray-800">
                        <tr>
                        {
                            schedules.map(schedule => (
                                <th key={schedule.routeNo} scope="col" className="text-sm border-r  font-medium text-white px-6 py-4">
                                    Route {schedule.routeNo}
                                </th>
                            ))
                        }
                        
                        
                        
                        </tr>
                    </thead >
                    <tbody>

                                {   schedules.map(schedule => (
                                    <td key={schedule.routeNo} className="text-sm align-top text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {
                                    
                                    schedule.routes.map(route=> (
                                        <tr onClick={
                                            () => { setShowBook(true)
                                                dispatch(setRoute(
                                                    { 
                                                        route: route,
                                                        staringTime: schedule.startingTime,
                                                        departureTime: schedule.departureTime,
                                                        routeNo: schedule.routeNo,
                                                        seat: schedule.seat
                                                    }
                                                  ))   
                                            }
                                        } key={route} className="bg-gray=300 border-b flex text-center text-base cursor-pointer hover:bg-slate-200  text-gray-900 font-light px-6  whitespace-nowrap">  
                                            {route}
                                        </tr>
                                    ))
                                    }
                                   </td>
                                ))}
                                
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table
import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import {MdOutlineCancel} from 'react-icons/md'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { Timestamp } from 'firebase/firestore';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

function Reservation() {
   const [reservation, setReservation] = useState([]);
   var date = new Date().toJSON().slice(0,10);
   const user = useSelector(selectUser);
   const [messages, loading] = useCollection(date &&  user?.email &&
    db.collection('reservation')
    .doc(date)
    .collection(user?.email)
    );
    
    const handleDelete = (id)=>{
      const docItem = db.collection('reservation')
      .doc(date)
      .collection(user?.email).doc(id).id
      // .doc(id).delete()
      // .then(() => {
      //   console.log("Document successfully deleted!")})
      // .catch((error) => {
      //     console.error("Error removing document: ", error);
      // });
    }  
    if(loading) return <Spinner message='We are adding new ideas to your feed!' />

  return (
    <div className='bg-white w-2/3 h-full p-6 shadow-lg'>
        
        <div>
            <h2 className='uppercase font-base text-3xl'>Reservation Info</h2>
        </div>

        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                <table class="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Picup
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Destination
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Time
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead >
          <tbody>

          {
          messages?.docs.map((doc, index) => {
              const { name, pickup,destination,email, time, timestamp} = doc.data();
             return (
              <tr key={doc.id} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index+ 1}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {pickup}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {destination}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {time}
                </td>
                <td  className="text-sm  text-gray-900 font-light px-6 py-4 cursor-pointer  whitespace-nowrap">
                    <MdOutlineCancel onClick={()=> {
                      const docItem = db.collection('reservation')
                      .doc(date)
                      .collection(user?.email).doc(doc?.id).delete()
                      .then(() => {
                           toast.success('Delete Successfully')})
                          .catch((error) => {
                            toast.success(error)
                         });
                      
                    }}  className='hover:text-green-500'  fontSize={24} />
                </td>
              </tr >
              )

          })
  } 
            
          </tbody>
        </table>

                </div>
                </div>
            </div>
        </div>
            
        
        
    </div>
  )
}

export default Reservation
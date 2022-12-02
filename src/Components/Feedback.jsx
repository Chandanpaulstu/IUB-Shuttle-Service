import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../utils/firebase';
import FeedbackMessage from './FeedbackMessage';

function Feedback({user}) {
  const [messages, setMessages] = useState([]);
  console.log(messages)
  useEffect(
    () => {
        
        db.collection('help')
        .orderBy('timestamp', 'asc' )
        .onSnapshot(snapshot => 
          (
              setMessages(snapshot.docs.filter(doc => user?.email === doc?.data()?.email)
                                        .map(doc => (
                                          {
                                            id: doc.id,
                                            data: doc.data(),
                                          }
                                        ))
                          )
          ))
                // {
                //   if(user?.email === doc?.data()?.email) {
                //     return (
                //       {
                //         id: doc.id,
                //         data: doc.data(),
                //       }
                //           )
                //   } 
                // }
              
        
    },[user])
  return (
    <div className='bg-white w-2/3 h-full p-6 shadow-lg'>
        <div>
            <h2 className='uppercase font-base text-3xl my-4 p-2 text-white bg-gray-800'>Feedback</h2>
        </div>
        {
            messages?.map(msg => {
                const { email, message, name, photoUrl, status, feedback, timestamp} = msg.data;
                
                return (
                    
                    <FeedbackMessage 
                        key={msg.id}
                        id={msg.id}
                        message = {message}
                        email = {email} 
                        photoUrl = {photoUrl}
                        status={status}
                        feedback={feedback}
                        name={name}
                        timestamp = {timestamp}
                        // setShowChatBox={setShowChatBox}
                    />
                )

            })
        }
    </div>
  )
}

export default Feedback
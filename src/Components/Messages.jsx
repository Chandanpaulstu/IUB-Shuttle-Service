import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebase';
import Message from './Message';
import Spinner from './Spinner';

function Messages({setShowChatBox}) {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
  useEffect(
    () => {
        setLoading(true)
        db.collection('help')
        .orderBy('timestamp', 'desc' )
        .onSnapshot(snapshot => 
            (
                setMessages(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            ))
        setLoading(false)
    },[])
    if(loading) return <Spinner message='Loading' />
  return (
    <div className='bg-white w-2/3 h-full p-6 shadow-lg'>
        <div>
            <h2 className='uppercase font-base text-3xl my-4 p-2 text-white bg-gray-800'>Messages</h2>
        </div>
        {
            messages?.map(msg => {
                const { email, message, name, photoUrl, status, feedback, timestamp} = msg.data;
                
                return (
                    
                    <Message 
                        key={msg.id}
                        id={msg.id}
                        message = {message}
                        email = {email} 
                        photoUrl = {photoUrl}
                        status={status}
                        feedback={feedback}
                        name={name}
                        timestamp = {timestamp}
                        setShowChatBox={setShowChatBox}
                    />
                )

            })
        }
    </div>
  )
}

export default Messages
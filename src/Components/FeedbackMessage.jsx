
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../features/messageSlice';
import { selectUser } from '../features/userSlice';
import {customerServiceImage} from '../utils/data'

function Message({id, email, message, name, photoUrl, status, feedback, timestamp, setShowChatBox}) {
  const user = useSelector(selectUser)
  const [chat, setChat] = useState();
  const dispatch = useDispatch();
  const replied = 'cursor-pointer bg-gray-200 flex items-center gap-8   p-2 border-b '
  const notReplied = 'cursor-pointer flex items-center gap-8  hover:shadow-md p-2 border-b hover:bg-gray-100'
  
  return (
    
        <div 
    //      onClick={() => {
    //   if(feedback === ''){
    //     dispatch(setMessage({
    //       id: id,
    //       email: email,
    //       message: message,
    //       name: name,
    //       photoUrl: photoUrl,
    //       status: status,
    //       feedback: feedback,
    //       timestamp: timestamp,
    //     }))
    //     setShowChatBox(true)}}} 
      className='flex flex-col'>
        <div className='cursor-pointer flex flex-row-reverse items-center gap-8  hover:shadow-md p-2 border-b hover:bg-gray-100'>
            <img src={photoUrl} className='cursor-pointer w-10 h-10 object-cover rounded-md '/>
            <div className='cursor-pointer flex-1' >
                <div className='cursor-pointer flex flex-row-reverse items-center justify-between '>
            
                    <h4 className='font-light'>{email}</h4>
                    <p className='cursor-pointer font-light text-xs'>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </p>
                    
                </div >
                <div className='flex flex-row-reverse'>
                    <p className='text-sm font-bold text-gray-500'>{message} </p>
                </div>
            </div>
            </div> 
        {
                feedback !== '' &&
            <div className='cursor-pointer flex items-center gap-8  hover:shadow-md p-2 border-b hover:bg-gray-100'>
            <img src={customerServiceImage} className='cursor-pointer w-10 h-10 object-cover rounded-md '/>
            <div className='cursor-pointer flex-1' >
                <div className='cursor-pointer flex items-center justify-between '>
            
                    <h4 className='font-light'>Customer service</h4>
                    <p className='cursor-pointer font-light text-xs'>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </p>
                    
                </div >
                <div>
                    <p className='text-sm font-bold text-gray-500'>{feedback} </p>
                </div>
            </div>
            </div>
            }
                
            
        

        </div>

    
  )
}

export default Message



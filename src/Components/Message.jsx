
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { setMessage } from '../features/messageSlice';
import { selectUser } from '../features/userSlice';


function Message({id, email, message, name, photoUrl, status, feedback, timestamp, setShowChatBox}) {
  const user = useSelector(selectUser)
  const [chat, setChat] = useState();
  const dispatch = useDispatch();
  const replied = 'cursor-pointer bg-gray-200 flex items-center gap-8   p-2 border-b '
  const notReplied = 'cursor-pointer flex items-center gap-8  hover:shadow-md p-2 border-b hover:bg-gray-100'
  
  return (
    <div onClick={() => {
      if(feedback === ''){
        dispatch(setMessage({
          id: id,
          email: email,
          message: message,
          name: name,
          photoUrl: photoUrl,
          status: status,
          feedback: feedback,
          timestamp: timestamp,
        }))
        setShowChatBox(true)

      }}} className={feedback !== '' ? `${replied}` : `${notReplied}`}>
            <img src={photoUrl} className='cursor-pointer w-10 h-10 object-cover rounded-md '/>
            <div className='cursor-pointer flex-1' >
                <div className='cursor-pointer flex items-center justify-between '>
            
                    <h4 className='font-light'>{email}</h4>
                    <p className='cursor-pointer font-light text-xs'>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </p>
                    
                </div >
                <div>
                    <p className='text-sm font-bold text-gray-500'>{message} </p>
                </div>
            </div>
        
        

    </div>
  )
}

export default Message


const MessageContainer = styled.div`
  width: 100% !important;
  display: flex;
  padding-left:10px !important ;
  margin: 20px 0 !important;
  
  
    :hover{
       
        background-color: rgba(65,65, 65, .6);
    }
    
`;


const MessageInfo = styled.div`
   
`

const MessageBody = styled.div`
   >p{
    color: gray;
    font-weight: 500;
    padding-bottom: 5px !important;
   }
`
const MessagHeader = styled.div`
     color: whitesmoke !important;
     display: flex;
     align-items: baseline;
     margin-top: 5px !important;
     h4{
        font-size: 18px;
     }
     
     
     > .timestamp{
        font-size: 12px;
        color: lightgray;
        margin-left: 10px !important;
     }
`;
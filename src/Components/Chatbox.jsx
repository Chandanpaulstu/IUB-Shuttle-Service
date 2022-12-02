import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../utils/firebase';
import firebase from 'firebase/compat/app';
import { selectMessage } from '../features/messageSlice';

function Chatbox({setShowChatBox}) {
  const [query, setQuery] = useState('');
  const user = useSelector(selectUser);
  const chatItem = useSelector(selectMessage);
  const {id, email, message, name, photoUrl, status, timestamp} = chatItem;
 
  const handleReply = () =>{

    if(query){
        const docItem = db.collection('help').doc(id).update({feedback: query})
        }
        setShowChatBox(false)
  }
  return (
    
    <div className='flex items-center justify-center bg-opacity-90 w-screen absolute top h-screen bg-black'>
        <div style={{width: '550px', MaxHeight: '500px'}} className='flex flex-col bg-white'>
            <div className='border-b flex items-center justify-between p-4'>
                <h2 className='font-extrabold text-2xl'>Chat</h2>
                <AiOutlineClose className='cursor-pointer hover:text-emerald-600 p-1'   fontSize={28} onClick={() => setShowChatBox(false)}/>
            </div>
            <div className=' flex flex-col items-center gap-4 justify-center w-full  p-4'>
            <div className='cursor-pointer flex items-center gap-4  py-2 border-b '>
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
        
        

    </div>                <div className=' flex gap-2 items-center '>
                        
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <textarea className='cursor-pointer w-full   placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none'
                             onChange={(e)=> setQuery(e.target.value)} value={query}
                             placeholder='type here..' cols="52" rows="10"></textarea>
                        </div>
                </div>
            </div>
            <div onClick={handleReply} className='border-t flex items-center justify-end py-4 px-6 '>
                <p style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='py-2 px-6 rounded-sm font-semibold cursor-pointer'> Reply</p>
            </div>
            
        </div>
    </div>
  )
}

export default Chatbox
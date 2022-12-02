import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../utils/firebase';
import firebase from 'firebase/compat/app';

function Help({setShowBox}) {
  const [query, setQuery] = useState('');
  const user = useSelector(selectUser);
 
  const handleSubmit = () =>{

    if(query){
        db.collection('help').add({
            name: user?.displayName,
            email:user?.email,
            message: query,
            photoUrl: user?.photoUrl,
            status: false,
            feedback:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setQuery('');
         }
        setShowBox(false)
  }
  return (
    
    <div className='flex items-center justify-center bg-opacity-90 w-screen absolute top h-screen bg-black'>
        <div style={{width: '550px', MaxHeight: '500px'}} className='flex flex-col bg-white'>
            <div className='border-b flex items-center justify-between p-4'>
                <h2 className='font-extrabold text-2xl'>Help</h2>
                <AiOutlineClose className='cursor-pointer hover:text-emerald-600 p-1'   fontSize={28} onClick={() => setShowBox(false)}/>
            </div>
            <div className=' flex flex-col items-center gap-4 justify-center w-full  p-4'>
                <p className='font-medium'>Do you have any question or complaint about anything ?</p>
                <div className=' flex gap-2 items-center '>
                        
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <textarea className='cursor-pointer w-full   placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none'
                             onChange={(e)=> setQuery(e.target.value)} value={query}
                             placeholder='type here..' cols="52" rows="10"></textarea>
                        </div>
                </div>
            </div>
            <div onClick={handleSubmit} className='border-t flex items-center justify-end py-4 px-6 '>
                <p style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='py-2 px-6 rounded-sm font-semibold cursor-pointer'> Submit</p>
            </div>
            
        </div>
    </div>
  )
}

export default Help
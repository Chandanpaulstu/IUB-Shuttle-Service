import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {MdSwapVert} from 'react-icons/md'
import { db } from '../utils/firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


function Book({setShowBook, selector}) {
  
  const [swap, setSwap] = useState(false);
  const [pickup, setpickup] = useState(selector?.route)
  const [destination, setdestination] = useState('Campus')
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const user = useSelector(selectUser);
  useEffect(()=> {
    
    if(swap){
        setpickup('Campus')
        setdestination(selector?.route)
        
    }
    else{
       
        setpickup(selector?.route)
        setdestination('Campus')
        
    }


    
  },[swap,time, selector])

  const handleReservation = () => {
    var timestamp = firebase.firestore.FieldValue.serverTimestamp();
    var date = new Date().toJSON().slice(0,10);
    if(time === '' || phone === '') return toast.error('Please fill out all the fields')
    db.collection('reservation').doc(date).collection(user?.email).add({
        destination: destination,
        pickup: pickup,
        time: time,
        phone: phone,
        name: user?.displayName,
        email: user?.email,
        timestamp: timestamp
    })
    
    setShowBook(false);  
    toast.success('Thank you. Your seat reservation is successfull'); 
    
  }

  
  


  return (
    <div className='flex items-center justify-center bg-opacity-90 w-screen absolute top h-screen bg-black'>
        <div style={{width: '550px', MaxHeight: '500px'}} className='flex flex-col bg-white'>
            <div className='border-b flex items-center justify-between p-4'>
                <h2 className='font-extrabold text-2xl'>Confirm your reservation</h2>
                <AiOutlineClose className='cursor-pointer hover:text-emerald-600 p-1'   fontSize={28} onClick={(e) => setShowBook(false)}/>
            </div>
            <div className=' flex flex-col items-center gap-4 justify-center w-full  p-4'>
                    <div className=' flex gap-2 items-center '>
                        <label className='text-xs font-semibold '>Pick up</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text"  value={pickup} readOnly
                            className='cursor-pointer w-full    placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>
                    <div className=' flex gap-2 items-center cursor-pointer p-1 bg-gray-200 hover:bg-gray-300 rounded-full'
                    onClick={() => 
                        {swap ? setSwap(false) : setSwap(true)}}>
                        <MdSwapVert fontSize={26} className='text-slate-900 cursor-pointer' />
                    </div>
                    <div className=' flex gap-2 items-center '>
                        <label className='text-xs font-semibold '>Destination</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text"  value={destination} readOnly
                            className='cursor-pointer w-full   placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>
                    
                    <div className='flex gap-2'>
                    {
                        pickup !== 'Campus'
                        ?(
                            <select
                            style={{border: '1px solid lightgrey'}}
                            required
                            name='time'
                            onChange={(e)=> setTime(e.target.value)}
                            className=" outline-none text-sm font-light   border-gray-200 p-2 rounded-sm cursor-pointer"
                            >
                            <option value="others" className="text-sm font-light">Select Time</option>
                            {selector?.staringTime?.map((item) => (
                                <option key={item} className="placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none" value={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                        )
                        :(
                            <select
                            style={{border: '1px solid lightgrey'}}
                            name='time'
                            required
                            onChange={(e)=> setTime(e.target.value)}
                            className=" outline-none text-sm font-light   border-gray-200 p-2 rounded-sm cursor-pointer"
                            >
                            <option value="others" className="text-sm font-light">Select Time</option>
                            {selector?.departureTime?.map((item) => (
                                <option key={item}  className="placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none" value={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                        )
                    }
                    </div>
                    <div className=' flex gap-2 items-center '>
                        <label className='text-xs font-semibold '>Phone No</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type='text' required value={phone} onChange={(e)=> setPhone(e.target.value)}
                            className='cursor-pointer w-full    placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>
            </div>
            <div onClick={handleReservation} className='border-t flex items-center justify-end py-4 px-6 '>
                <p style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='py-2 px-6 rounded-sm font-semibold cursor-pointer'> Submit</p>
            </div>
        </div>
    </div>
  )
}

export default Book
import React, { useEffect, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import {MdOutlineCancelPresentation} from 'react-icons/md'



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  
  return (
    <div className='max-w-screen min-h-screen flex items-center justify-center bg-slate-100'>
        <div className=' lg:w-2/5 md:w-2/4  sm:w-3/5 w-full flex flex-col lg:flex-row shadow-lg'>

            
            <div style={{ flex: '1',minHeight: '90vh'}}  className=' flex flex-col items-center bg-white'>
                <div className='flex flex-col w-5/6 h-4/5 gap-6 relative '>
                    <MdOutlineCancelPresentation 
                    fontSize={26}
                    onClick={()=> navigate('/')}  className= 'cursor-pointer absolute top-5 right-0' />
                    <h1 className='mt-12 mb-4 text-3xl font-extrabold'>Login </h1>
                    
                    <div>
                        <label className='text-xs font-semibold'>Enter your email</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text" onChange={(e) => setEmail(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>
                    
                    <div>
                        <label className='text-xs font-semibold'>Password</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="password" onChange={(e) => setPassword(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>

                    <button type='submit' style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='cursor-pointer p-2 rounded-sm mt-2'>
                        <p className='text-center font-semibold text-sm'>Log in</p>
                    </button>

                    <div className='flex items-center justify-between'>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>
                        <p>or</p>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>

                    </div>

                    <div style={{border: '1px solid lightgrey'}} className=' hover:bg-slate-100 flex p-2 items-center  rounded-sm'>
                        <FcGoogle fontSize={24} />
                        <p className='text-center flex-1  text-sm'>Continue with google</p>
                    </div>

                    <p className='font-light text-base'>Become a member? <span onClick={() => navigate('/Join')} className='cursor-pointer text-green-400 font-medium'>Join</span></p>
                    <p className='text-xs font-light text-gray-400'></p>

                    

                </div>   
            </div>



        </div>
    </div>
  )
}

export default Login
import React, { useEffect, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import {MdOutlineCancelPresentation} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { auth, provider } from '../utils/firebase';
import { login } from '../features/userSlice';
import {driverImage, customerServiceImage} from '../utils/data'


function Join() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let image = '';
//   const [userName, setUserName] = useState('');
  
  const dispatch = useDispatch();

  const singInByJoin = ()=>{
    if(!email || !password ){
        return alert("Please enter a full name");
    }

    if(email === 'customerservice@gmail.com') image =  customerServiceImage
    if(email === 'driver@gmail.com') image = driverImage
    
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login(
        {
          email: userAuth.user.email,
          password: userAuth.user.password,
          displayName:  '',
          photoURL: image
        }
      ))
      navigate('/')
    }).catch(error => alert(error))

    // auth.createUserWithEmailAndPassword(email, password)
    //   .then((userAuth) => { userAuth.user.updateProfile({
    //       displayName: userName,
    //       photoURL: '',
    //   })
    //   .then(() => {
    //     dispatch(login({
    //       email: userAuth.user.email,
    //       uid: userAuth.user.uid,
    //       displayName: userName,
    //       photoURL: ''
    //     }));
    //   });

    //   }).catch(error => {alert(error)} )
  }

  const signInWithGoogle = () => {

    auth.signInWithPopup(provider)
    .then(user => 
        {
        //   console.log(user.email)
        // if(user?.email?.slice(8, 17) !== "iub.edu.bd"){
        //   return alert('You are not authorized to login')
        // }
        dispatch(login(
          {
            id: user?.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          }
        ))
        navigate('/');
      }).catch(error => alert(error))
  };
  
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
                        <label className='text-xs font-semibold'>Add your email</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text" onChange={(e) => setEmail(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>

                    {/* <div>
                        <label className='text-xs font-semibold'>Pick a Username</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="text" onChange={(e) => setUserName(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div> */}
                    
                    <div>
                        <label className='text-xs font-semibold'>Choose a password</label>
                        <div style={{border: '1px solid lightgrey'}} className=' hover:border-gray-700 flex flex-col  p-2 rounded-sm'>
                            <input type="password" onChange={(e) => setPassword(e.target.value)}
                            className='cursor-pointer w-full  placeholder:text-slate-400 placeholder:font-light    font-light text-sm  outline-none' />
                        </div>
                    </div>

                    <button type='submit' onClick={singInByJoin}  style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='cursor-pointer p-2 rounded-sm mt-2'>
                        <p className='text-center font-semibold text-sm'>Login</p>
                    </button>

                    <div className='flex items-center justify-between'>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>
                        <p>or</p>
                        <div style={{height: '1px'}} className=' w-2/5  bg-gray-500'></div>

                    </div>

                    <div style={{border: '1px solid lightgrey'}} onClick={signInWithGoogle} className=' hover:bg-slate-100 flex p-2 items-center  rounded-sm'>
                        <FcGoogle fontSize={24} className='cursor-pointer' />
                        <p className='text-center flex-1 cursor-pointer text-sm'>Continue with google</p>
                    </div>

                    {/* <p className='font-light text-base'>Already a member? <span onClick={() => navigate('/login')} className='cursor-pointer text-green-400 font-medium'>Log In</span></p> */}
                    <p className='text-xs font-light text-gray-400'></p>

                    

                </div>   
            </div>



        </div>
    </div>
  )
}

export default Join

import {RiBarChartHorizontalLine} from 'react-icons/ri'
import {FiSearch} from 'react-icons/fi';
import {BsFillPersonFill} from 'react-icons/bs';
import Sidebar from './Sidebar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {GiBus} from 'react-icons/gi'
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import {CiSquareQuestion} from 'react-icons/ci'
function Navbar({sidebar, setSidebar, setShowPopup, setShowBox, setStatus, user}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signOut = () =>{
      setStatus({
        student:false,
        customerService: false,
        driver: false
      })
      dispatch(logout());
      auth.signOut();
      navigate('/join')

    }  

  
  const [hover, setHover] = useState(false);
  const showPost = () => { setShowPopup(true)};
 
  
  return (
    <div className='h-16 w-full flex justify-between bg-gray-900 shadow-lg items-center p-4 z-10 '>
        <div className='cursor-pointer flex items-center gap-6'>
            <div className='ml-3'
            onClick={()=> {
               sidebar ? setSidebar(false) : setSidebar(true)
            }}>
                <GiBus fontSize={30} className='hover:text-green-500 text-white' />
            </div>
            <div>
                <h2 className='text-white font-extrabold text-lg'>SHUTTLE</h2>
            </div>
            
        </div>
        <div style={{border: '1px solid #58595a', flex: '.6'}}
            className='hover:border-gray-500  outline-none p-2 rounded-sm flex item-center justify-between'>
                <input type="text"
                style={{fontWeight: '100'}}
                placeholder='Search & Dicover'
                className='cursor-pointer placeholder:text-sm w-50 placeholder:text-slate-400 placeholder:font-light px-1 bg-transparent text-white outline-none' />
                <FiSearch fontSize={22} color='white' />
            </div>
        <div className='flex gap-8 items-center justify-between'>
            <div className='cursor-pointer'
            onClick={()=> setShowBox(true)}>
                <CiSquareQuestion fontSize={24} color='white'  />                
            </div>
            {!user && 
            
                (<div className='flex gap-8 items-center justify-between'>
                    <h4 onClick={() => navigate('/join')} className='cursor-pointer text-white font-semibold mt-1 hidden sm:inline hover:text-green-400'>Join</h4>
                </div>)
            }

            <div className='cursor-pointer'>
                {
                    user ? <img src={user?.photoUrl} onClick={signOut} className='rounded-full cursor-pointer ml-2 h-10' alt="hi" />
                         : <BsFillPersonFill onClick={()=> navigate('/join')} color='white' className=' bg-gray-700 p-1 rounded-md' fontSize={26}/>
                }
                
            </div>
            {/* <div onMouseEnter={()=> setHover(true) } 
                 onMouseLeave={()=> setHover(false) }
                  className='h-16   items-center justify-center md:flex hidden'>
                <p style={{ background: 'linear-gradient(112deg,#4cddbd,#06f286)'}} className='py-2 px-6 rounded-sm font-semibold cursor-pointer'>+ Submit</p>
            </div> */}

            {/* {
                hover && <div onMouseEnter={()=> setHover(true) } onMouseLeave={()=> setHover(false) } className='w-40 flex shadow-lg flex-col items-center justify-center absolute right-5 top-16 bg-slate-50'>
                    <NavLink to={'/create'} className='font-light py-3 w-full text-center  text-base hover:bg-green-200'>
                        <p>Deviation</p>
                    </NavLink>
                    <NavLink to={'/'} onClick={showPost} className='font-light py-3 w-full text-center curs  text-base hover:bg-green-200'>
                        <p >Status update</p>
                    </NavLink>
                </div>
            } */}
            
        </div>
    </div>
  )
}

export default Navbar
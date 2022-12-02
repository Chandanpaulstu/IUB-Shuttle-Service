import React, { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {IoOptionsOutline} from 'react-icons/io5'
import {RiFeedbackLine} from 'react-icons/ri'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import {AiOutlineMessage} from 'react-icons/ai'
function Sidebar({sidebar, setSidebar, show, status}) {
    const activeBtn = useParams();
    const user = useSelector(selectUser)
    const navigate = useNavigate();
    const wideSidebar = 'w-72 bg-zinc-900 h-screen transition-all duration-200 ease-in-out relative cursor-pointer ';
    const lessWideSidebar = `w-0 bg-gray-300 overflow-hidden h-screen transition-all duration-200 ease-in-out relative cursor-pointer` 
    const activeBtnStyles = 'bg-gray-800 bg-opacity-90 w-full h-14 flex items-center';
    const notActiveBtnStyles = 'hover:bg-gray-500 w-full h-14 flex items-center'
  return (
  <div  className={`${sidebar ? wideSidebar : lessWideSidebar}`}>
    
        <NavLink 
            to={'/'}
            onClick={()=> setSidebar(false)}
        className={`${activeBtn['*'] === '' ? activeBtnStyles : notActiveBtnStyles}`}>
            <AiFillHome  fontSize={24} className={`${activeBtn['*'] === '' || activeBtn['*'] === 'posts' ? 'ml-6 text-green-500' : 'ml-6 text-white' }`}/>
            <p className='cursor-pointer text-white absolute left-20  text-sm font-light'>Home</p>
            
        </NavLink>
    
        {            
            user?.email !== 'customerservice@gmail.com'     &&    
             
            <>  <NavLink 
            to={'/reservation'}
            onClick={()=> setSidebar(false)}
            className={`${activeBtn['*'] === 'reservation' ? activeBtnStyles : notActiveBtnStyles}`}>
                <IoOptionsOutline fontSize={24} className={`${activeBtn['*'] === 'reservation' ? 'ml-6 text-green-500' : 'ml-6 text-white' }`}/>
                <p className='cursor-pointer text-white  absolute left-20  text-sm font-light' >Reservation</p>
            </NavLink>

            <NavLink 
            to={'/feedback'}
            onClick={()=> setSidebar(false)}
            className={`${activeBtn['*'] === 'feedback' ? activeBtnStyles : notActiveBtnStyles}`}>
                <RiFeedbackLine fontSize={24} className={`${activeBtn['*'] === 'feedback' ? 'ml-6 text-green-500' : 'ml-6 text-white' }`}/>
                <p className='cursor-pointer text-white  absolute left-20  text-sm font-light' >Feedback</p>
            
            </NavLink>
            </>
        }

{            
            user?.email === 'customerservice@gmail.com'     &&    
             
            <>  <NavLink 
            to={'/messages'}
            onClick={()=> setSidebar(false)}
            className={`${activeBtn['*'] === 'reservation' ? activeBtnStyles : notActiveBtnStyles}`}>
                <AiOutlineMessage fontSize={24} className={`${activeBtn['*'] === 'reservation' ? 'ml-6 text-green-500' : 'ml-6 text-white' }`}/>
                <p className='cursor-pointer text-white  absolute left-20  text-sm font-light' >Messages</p>
            </NavLink>
            </>
        }


        
        

        
        
        
    </div>
  )
}

export default Sidebar
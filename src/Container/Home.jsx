import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Book from '../Components/Book';

import CustomerServicePanel from '../Components/CustomerServicePanel';
import DriverPanel from '../Components/DriverPanel';
import Help from '../Components/Help';
import Feedback from '../Components/Feedback';
// import Feed from '../Components/Feed';
// import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
import Reservation from '../Components/Reservation';
import Sidebar from '../Components/Sidebar'
import StudentPanel from '../Components/StudentPanel';
import { selectRoute } from '../features/routeSlice';
import { selectUser } from '../features/userSlice';
import Messages from '../Components/Messages';
import Chatbox from '../Components/Chatbox';


function Home() {
  const navigate = useNavigate();
  const selector = useSelector(selectRoute);
  const [sidebar, setSidebar] = useState(false);
  const [activeBtn, setActiveBtn] = useState('deviations');
  const [show, setShow] = useState('');
  const [showBook, setShowBook] = useState(false);
  const [showbox, setShowBox] = useState(false);


  const [showchatBox, setShowChatBox] = useState(false);


  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({
    student: false,
    customerservice:false,
    driver: false
  })
  // useEffect(()=>{
    
  //   if(user?.email === 'customerservice@gmail.com' )  {setStatus({...status, customerservice: true}) 
  //                                                     }
  //   if(user?.email === 'driver@gmail.com' )  {setStatus({...status, driver: true})}
  //   else{
  //      if(user){
  //       setStatus({...status, student: true})
  //      }
     
  //   }
  //   console.log(status)
  // },[navigate])
  // useEffect(()=> {
  //   if(param['*'] === '' || param['*'] === 'posts' ||param['*'] === 'categories' ){
  //     setShow(true);
  //   }
  //   else{
  //     setShow(false)
  //   }
  //   console.log(showPopup)
  // },[param, showPopup])
  useEffect(()=> {
    console.log(showbox)
  },[showbox])
  
  const activeBtnStyles = ' border-b-2 border-green-500';
  return (
    <div className='max-w-screen flex  flex-col min-h-screen relative'>
      <div className={`${showBook ? 'absolute top-0 left-0 z-20' : 'hidden' }`}>
            <Book setShowBook={setShowBook} selector={selector}/>
      </div>
      <div className={`${showbox ? 'absolute top-0 left-0 z-30' : 'hidden' }`}>
            <Help  setShowBox={setShowBox}/>
      </div>

      {showchatBox && <div className={`${showchatBox ? 'absolute top-0 left-0 z-30' : 'hidden' }`}>
            <Chatbox  setShowChatBox={setShowChatBox}/>
      </div>}
    
        {/* navbar */}
        <div className='fixed top-0 w-full z-10'>
          <Navbar sidebar={sidebar} setSidebar={setSidebar} setStatus={setStatus} setShowBox={setShowBox} user= {user} />
        </div>
        
        {/* body */}
        <div className=" max-w-screen min-h-full mt-16  ">

          {/* sidebar */}
          <div className='fixed z-10'>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} show={show} status={status} />
          </div>

          {/* main */}
            <div style={{minHeight: 'calc(100vh - 4rem)'}}  className='absolute left-0 right-0 min-w-screen  flex items-center justify-center'>
                {
                  user?.email === 'customerservice@gmail.com'
                  &&
                  <>
                    <Routes>
                    <Route path="/*" element={<CustomerServicePanel  />} />  
                    <Route path="/messages" element={<Messages setShowChatBox={setShowChatBox}  />} />  
                  </Routes>
                  </>
                  
                }
                                {
                  user?.email === 'driver@gmail.com'
                  &&
                  <>
                    <Routes>
                    <Route path="/*" element={<DriverPanel  />} />  
                    <Route path="/feedback" element={<Feedback user={user} />} />
                  </Routes>
                  </>
                  
                }
                {/* {
                  status.driver
                  &&
                  <div>
                    
                    <Routes>
                    <Route path="/driver" element={<DriverPanel  />} />  
                  </Routes>
                  </div>
                } */}
                {
                  (user?.email !== 'customerservice@gmail.com' && user?.email !== 'driver@gmail.com')
                  &&
                  <>
                    <Routes>
                    <Route path="/*" element={<StudentPanel  setShowBook={setShowBook}/>} />  
                    <Route path="/reservation" element={<Reservation />} /> 
                    <Route path="/feedback" element={<Feedback user={user} />} />
                    </Routes>
                  
                  </>
                }   
                  
                  
                

                {/* header */}
                {/* {(param['*'] === '' || param['*'] === 'posts') && <div className='bg-gray-900  h-20 flex items-center  opacity-90 px-10'>
                <h2 className='text-white text-xl  mb-2 font-semibold '>Home</h2>
                
                <div className='flex items-baseline flex-1 justify-center gap-10 text-white text-sm font-light'>
                    <div 
                    
                    onClick={(e) => {
                        setActiveBtn('deviations');
                        navigate('/')
                    }}
                    className={`${activeBtn === 'deviations' && activeBtnStyles }`}>
                        <p className='h-20  cursor-pointer flex items-center'>Deviations</p>
                        
                    </div>
                    <div 
                        
                    onClick={(e) => {
                        setActiveBtn('posts');
                        navigate('/posts')
                    }}
                    className={`${activeBtn === 'posts' && activeBtnStyles }`}>
                        <p className='h-20  cursor-pointer flex items-center'>Posts</p>    
                    </div>
                </div>
                </div>} */}

                {/* {param['*'] === 'categories' && <div className='bg-gray-900 w-full  h-20 flex items-center gap-64 opacity-90 px-10'>
                <h2 className='text-white text-xl mb-2 font-semibold'>Category</h2>
                </div>} */}

                {/* <div>
                <Routes>
                    <Route path="/*" element={<Feed setShowPopup={setShowPopup}/>} />  
                    <Route path="/categories" element={<Categories />} />  
        
                </Routes>
                </div>      */}

            </div>

        </div>
        
          
    </div>
  )
}

export default Home
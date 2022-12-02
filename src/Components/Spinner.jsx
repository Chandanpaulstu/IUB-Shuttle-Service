import React from 'react'
import { Circles } from 'react-loader-spinner';



function Spinner({message}) {
  return (
    <div className='flex flex-col items-center justify-center'>
       <Circles
            height="50"
            width="200"
            color="#00c3ff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            className="mt-5"
            />
        <p className='pt-2 text-lg text-center px-2'>{message}</p>
    </div>
  )
}
  
export default Spinner
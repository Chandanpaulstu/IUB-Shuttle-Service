import React, { useState } from 'react'

import Table from './Table'
function StudentPanel({setShowBook}) {
  
  return (
    <div className='bg-white w-2/3 h-full p-6 shadow-lg'>
        
        <div>
            <h2 className='uppercase font-base text-3xl'>Shuttle service</h2>
        </div>


        
        <Table setShowBook={setShowBook} />
    </div>
  )
}

export default StudentPanel
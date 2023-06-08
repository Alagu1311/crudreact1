import React from 'react'
import { useNavigate } from 'react-router-dom';


function Main() {
    
  const navigate=useNavigate();
  return (
    <div>
        <div id='flex'>
        <button onClick={()=>navigate("/Addstud")}>Add student</button>
        <button onClick={()=>navigate('/Edit')}>Edit student</button>
        <button onClick={()=>navigate("/Mechcomp")}>Delete Student</button>
        </div>
        
        <h1 className='cntral'>Mechanical student Info</h1>
        <h4 className='cntral'>8th Semester Rank Holders</h4>

     

    </div>
  )
}

export default Main;
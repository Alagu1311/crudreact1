import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


function Main({title,description}) {
  const navigate=useNavigate();
  return (
    <div>
     
     
      <div id='flex'>
        <Button variant="contained" onClick={()=>navigate("/Base")}>Dashboard</Button>
        <Button variant="contained" onClick={()=>navigate("/Mechcomp")}>students</Button>
        <Button variant="contained" onClick={()=>navigate('/Addstud')}>Add student</Button>
        <Button variant="contained" onClick={() => navigate("/Edit")}>Edit  Student</Button>
       
      </div>
      <div>
        <h3 className='cntral'>{title}</h3>
        <h3 className='cntral'>{description}</h3>
        </div>
        
        

     

    </div>
  )
}

export default Main;
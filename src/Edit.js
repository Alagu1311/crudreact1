import React, { useContext, useEffect, useState } from 'react'
import { crtcontxt } from './App'
import Mechcomp from './Mechcomp'
import { TextField,Button } from '@mui/material'


function Edit() {
  const { mechstud, setmechstud, studId } = useContext(crtcontxt)
  const [id,setid]=useState("")
  const [Name,setName]=useState("")
  const [Department,setDepartment]=useState("")
  const [Semester,setsemester]=useState("")
  const [Cgpa,setcgpa]=useState("")
   
     useEffect(()=>{
    const finaldata=mechstud.find(stud=>stud.id===studId)
    if(finaldata){
    setid(finaldata.id)
    setName(finaldata.Name)
    setDepartment(finaldata.DepartMent)
    setsemester(finaldata.Semester)
    setcgpa(finaldata.Cgpa)
    }

  },[studId,mechstud])
  const Editfunc=()=>{
    let finalres=mechstud.findIndex(stud=>stud.id==studId)
    const arrobj={
      id,
     Name,
     Department,
     Semester,
     Cgpa
      
    }
    mechstud[finalres]=arrobj
   setmechstud ([...mechstud,arrobj])
   
  }
   
   
 
  return (
    <div>
     
      <Mechcomp/>
    <h2 className='center'>Edit student</h2>
        <form className='alincen'>
          <TextField fullWidth id="fullWidth" className='wid' type='text' value={id} placeholder='Enter Id' onChange={(e)=>setid(e.target.value)}></TextField><br></br>
          <TextField fullWidth id="fullWidth" className='wid' type='text' value={Name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)}></TextField><br></br>
          <TextField fullWidth id="fullWidth" className='wid' type='text' value={Department} placeholder='Enter  Department' onChange={(e) => setName(e.target.value)}></TextField><br></br>
          <TextField fullWidth id="fullWidth" className='wid' type='text'value={Semester} placeholder='Enter semester ' onChange={(e) => setName(e.target.value)}></TextField><br></br>
          <TextField fullWidth id="fullWidth" className='wid' type='text' value={Cgpa} placeholder='Enter CGPA' onChange={(e) => setName(e.target.value)}></TextField><br></br>
          <Button  variant="contained" size="medium" className='mar'  onClick={Editfunc}>Edit student</Button>
                

       </form>
       
    
     
      </div>
      
  )
}

export default Edit
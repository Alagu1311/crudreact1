import React, { useContext, useState } from 'react'
import { crtcontxt } from './App'
import Main from './Main'
import { TextField,Button } from '@mui/material'

function Addstud() {

  const {mechstud,setmechstud}=useContext(crtcontxt)
    const [id,setid]=useState("")
    const [Name,setName]=useState("")
    const [Department,setDepartment]=useState("")
    const  [sem,setsem]=useState("")
    const [Cgpa,setcgpa]=useState("")
    
    const addstud=()=>{
        
            const obj={
                id,
              Name,
                Department,
                sem,
                 Cgpa
            }
            setmechstud([...mechstud,obj])
setid("")
setName("")
setDepartment("")
setsem("")
setcgpa("")        

    }
  return (
    
    <div>
      <>
        <Main
          title={"Add students"}
          description={"Add students from the RankHolders students list"}

          
        >

        </Main>
       
      <h3 className='alcen'>Add student</h3>
      
         <div className='alincen'>
          <TextField fullWidth  id="fullWidth" className='wid' type='text' value={id} placeholder='Enter Id' onChange={(e)=>setid(e.target.value)}/><br></br>
       <TextField fullWidth  id="fullWidth" className='wid' type='text' value={Name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br></br>
       <TextField fullWidth  id="fullWidth" className='wid' type='text' value={Department} placeholder='Enter Department' onChange={(e)=>setDepartment(e.target.value)}/><br></br>
       <TextField fullWidth  id="fullWidth" className='wid' type='text' value={sem} placeholder='Semester' onChange={(e)=>setsem(e.target.value)}/><br></br>
          <TextField fullWidth id="fullWidth" className='wid' type='text' value={Cgpa} placeholder='CGPA' onChange={(e) => setcgpa(e.target.value)} /><br></br>
            <div>
          <Button variant="contained" size="medium" className='mar' onClick={addstud}>Add student</Button>
          </div>

         
       </div>
       
</>
    </div>
  )
  
}

export default Addstud
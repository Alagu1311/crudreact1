import React, { useState } from 'react'
import Mechcomp from './Mechcomp'
import Main from './Main'

function Addstud({mechstud,setmechstud}) {

    const [id,setid]=useState("")
    const [Name,setName]=useState("")
    const [Department,setDepartment]=useState("")
    const [sem,setsem]=useState("")
    const [cgpa,setcgpa]=useState("")
    
    const addstud=()=>{
        
            const obj={
                id,
                Name,
                sem,
                cgpa
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
      <h3 className='alcen'>Add student</h3>
      
         <div className='alincen'>
          <input className='wid' type='text' value={id} onChange={(e)=>setid(e.target.value)}/><br></br>
       <input className='wid' type='text' value={Name} onChange={(e)=>setName(e.target.value)}/><br></br>
       <input className='wid' type='text' value={Department} onChange={(e)=>setDepartment(e.target.value)}/><br></br>
       <input className='wid' type='text' value={sem} onChange={(e)=>setsem(e.target.value)}/><br></br>
       <input className='wid' type='text' value={cgpa} onChange={(e)=>setcgpa(e.target.value)}/><br></br>
       <button className='mar' onClick={addstud}>Add student</button>
       </div>
       <Mechcomp
       mechstud={mechstud}
       setmechstud={setmechstud}/>
    

    </div>
  )
  
}

export default Addstud
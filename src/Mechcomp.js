import React, { useEffect, useState } from 'react'



function Mechcomp({mechstud,setmechstud,studId}) {
    const delfunc=(studid)=>{
        let res=mechstud.filter((stud,indx)=>studid!==stud.id)
        setmechstud(res)
       }
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
  const Editfunc=(studId)=>{
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
      
      
        <h2 className='center'>Students Info</h2>
    <div id='flex'>
        {mechstud.map((arr,indx)=>(
            <div id='border'>
                <h3>Name:{arr.Name}</h3>
                <h3>Department:{arr.Department}</h3>
                <h3>Semester:{arr.Sem}</h3>
                <h3>CGPA:{arr.Cgpa}</h3>
                <div id='flex1'>
                    <button onClick={()=>Editfunc(arr.id)}>Edit</button>
                    <button onClick={()=>delfunc(arr.id)}>Delete</button>
                    </div>

                    
                </div>
        ))}
    </div>
   
 
    </div>
  )
}

export default Mechcomp;
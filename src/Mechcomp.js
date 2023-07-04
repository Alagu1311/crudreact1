import React, { useContext, useEffect, useState } from 'react'
import { crtcontxt } from './App'
import Main from './Main'
import { Paper } from '@mui/material'



function Mechcomp() {
  const {mechstud,setmechstud}=useContext(crtcontxt)
    const delfunc=(studid)=>{
        let res=mechstud.filter((stud,indx)=>studid!==stud.id)
        setmechstud(res)
       }
  
 
  
  return (
    <div>
      <>
      
        <Main
          title={"Rank Holders Students Info"}
          description={""}
        >
          
      </Main>
      
       
        <div id='flex'>
         
          {mechstud.map((arr, indx) => (
          <Paper elevation={3}>
          <div id='border'>
             
                <h3>Name:{arr.Name}</h3>
                <h3>Department:{arr.Dep}</h3>
                <h3>Semester:{arr.Sem}</h3>
            <h3>CGPA:{arr.Cgpa}</h3>
          
                <div id='flex1'>
                    <button onClick={{}}>Edit</button>
                    <button onClick={()=>delfunc(arr.id)}>Delete</button>
                </div>
                 
            

                    
              </div>
              </Paper>
              
              
              
        ))}
            
          </div>
         
   </>
 
    </div>
  )
}

export default Mechcomp;
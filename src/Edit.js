import React from 'react'
import Mechcomp from './Mechcomp'


function Edit(mechstud,setmechstud,studId) {
   
  return (
    <div>
        <Mechcomp
        mechstud={mechstud}
        setmechstud={setmechstud}
        studId={studId}>

        </Mechcomp>
    </div>
  )
}

export default Edit
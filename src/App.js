
import './App.css';
import { useState } from 'react';
import Mechstudentdata from './Mechdata';
import {Route,Routes} from 'react-router-dom'
import Main from './Main';
import Addstud from './Addstud';
import Mechcomp from './Mechcomp';
import Edit from './Edit';






function App() {
  const [mechstud,setmechstud]=useState(Mechstudentdata);
  
  return (
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route path='/Addstud' element={<Addstud
        mechstud={mechstud}
        setmechstud={setmechstud}/>}/>
        <Route path='/Mechcomp' element={<Mechcomp
        mechstud={mechstud}
        setmechstud={setmechstud}/>}/>
        <Route path='/Edit' element={<Edit/>}/>
       </Routes>
      
      
      
       
      
    
       
    </div>
  );
}

export default App;

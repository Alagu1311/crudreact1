
import './App.css';
import { createContext, useState } from 'react';
import Mechstudentdata from './Mechdata';
import {Route,Routes} from 'react-router-dom'
import Addstud from './Addstud';
import Mechcomp from './Mechcomp';
import Edit from './Edit';
import Base from './Base';
export const crtcontxt = createContext("");






function App() {
  const [mechstud,setmechstud]=useState(Mechstudentdata);
  
  return (
    <div className="App">
     
      <crtcontxt.Provider
        value={{mechstud,setmechstud}}
      >
      <Routes>
        <Route exact path='/' element={<Base/>}/>
        <Route path='/Addstud' element={<Addstud
        />}/>
        <Route path='/Mechcomp' element={<Mechcomp
       />}/>
          <Route path='/Edit' element={<Edit />} />
          <Route path='/Base' element={<Base/>}/>
        </Routes>
        </crtcontxt.Provider>














       
      
      
      
       
      
    
       
    </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import PoliceLogin from './pages/PoliceLogin.jsx';
import PoliceRegister from './pages/PoliceRegister.jsx';
import User from './pages/User.jsx'; 
import FirReg from './pages/FirReg.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/PoliceLogin' element={<PoliceLogin />} />
        <Route path='/PoliceRegister' element={<PoliceRegister />} />
        <Route path='/User' element={<User />} />
        <Route path='/FirReg' element={<FirReg />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

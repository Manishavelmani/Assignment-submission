
import React from 'react'
import Home from './Compounds/Home'
import {Route,Routes,Router} from 'react-router-dom'
import Signup from './Compounds/Signup'

import Contactus from './Compounds/Contactus'
import Front from './Compounds/Front'
import Aboutus from './Compounds/Aboutus'
import Slogin from './Compounds/slogin'
import Submit from './Compounds/Submit'
import Upload from './Compounds/Upload'
import Tlogin from './Compounds/Tlogin'

 function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='Signup'element={<Signup/>}/>
        <Route path='tlogin'element={<Tlogin/>}/>
        <Route path='contactus'element={<Contactus/>}/>
        
        <Route path='front'element={<Front/>}/>
        <Route path='aboutus'element={<Aboutus/>}/>
        <Route path='slogin'element={<Slogin/>}/>
        <Route path='submit'element={<Submit/>}/>
        <Route path='upload'element={<Upload/>}/>
        

        


      </Routes>
    </div>
  )
}
export default App

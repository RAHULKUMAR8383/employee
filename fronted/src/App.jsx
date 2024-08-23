import React, { useEffect, useState } from 'react';
import Login from './Component/Login';
import Admin from './Component/Admin';
import { Navigate, useNavigate } from "react-router-dom";
import Eror from './Component/Eror';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Login/>
//       </div>
//     ),
//   }
//   ,
//   {
//     path: "admin",
//     element: <Admin/>,
//   },
//   {
//     path: "error",
//     element: <><Eror/></>,
//   },
// ]);
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {
  
  // const [state,setState]=useState(false);
  // useEffect(()=>{
  //   state?<Navigate to="admin"/>:<Navigate to="error"/>
  // },[state])
  return (
    <div>
          <Router>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/eror' element={<Eror/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PasswordGen from './components/PasswordGen';
import Home from './components/Home';
import CustomHook from './components/CustomHook';
import Contact from './components/Contact';
import Books from './components/Books';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const route= createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//           path:'',
//           element:<Home/>
//       },
//       {
//           path:"password",
//           element:<PasswordGen/>
//       },{
//         path:'customhook',
//         element:<CustomHook/>
//       }
//     ]
//   }
// ])
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='password' element={<PasswordGen/>}/>
      <Route path='customhook' element={<CustomHook/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='book' element={<Books/>}/>
    </Route>
  )
)
root.render(
  <>
    <RouterProvider router={route}/>
  </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


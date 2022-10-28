import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home/Home';
import Profile from './component/Profile/Profile';
import About from './component/About/About';
import Service from './component/Service/Service';
import Contact from './component/Contact/Contact';
import Blog from './component/Blog/Blog';
import { BrowserRouter,Routes,Route,Link, Navigate,} from 'react-router-dom';

function Routescomponent(){
    return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route  path='Profile/:id' element={<Profile/>}></Route>
        <Route  path='Service' element={<Service/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Blog' element={<Blog/>}></Route>


        <Route path='*' element={<Navigate to ="/"/>}></Route>
    </Routes>
    </BrowserRouter>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < Routescomponent/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

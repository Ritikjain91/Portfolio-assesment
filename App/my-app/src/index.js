import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/AnimalDetails/Home.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AnimalDetail from './Components/AnimalDetails.jsx'
import Blog from './Components/Blog.jsx';
import NavBar from './NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
<NavBar/>

<Routes>
<Route exact  path='/' element={<App/>}>

</Route>
<Route  path='/home' element={<Home/>}>

</Route>
<Route  path='/animaldetail' element={<AnimalDetail/>}>

</Route>
<Route path='/blog' element={<Blog/>}>
  
</Route>
</Routes>

   
    </BrowserRouter>

);



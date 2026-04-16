// react Routing 
// Navigate from one page to another in Single page application (SPA)
// 
// Terms:
// What is a Route?
// Moving one page to another page in React app is called Routing
// We should install npm install react-router-dom
// we have cerated 3 Pages/ components --  0331_Home, 0331_about and 0331_contact

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./0331_home";
import About from "./0331_about";
import Contact from "./0331_contact";
import NavBar from "./0331_NavBar";

const WebSite =() => {


    return(
        <div>
               <BrowserRouter>  
                    <NavBar/>
                    // how to enable Routing
                    <Routes>
                        <Route path="/" element={<Home/>}> </Route>
                        <Route path="/about" element={<About/>}> </Route>
                        <Route path="/contact" element={<Contact/>}> </Route>

                        
                    </Routes>
               
                </BrowserRouter>
        </div> 
    );

}

export default WebSite;
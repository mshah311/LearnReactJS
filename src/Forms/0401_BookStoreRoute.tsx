// react Routing 
// Navigate from one page to another in Single page application (SPA)
// 
// Terms:
// What is a Route?
// Moving one page to another page in React app is called Routing
// We should install npm install react-router-dom

// we are going to use "useparams" to pass dynamic values from user selection / input.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./0401_Book";
import BookStore from "./0401_BookStore";
import PageNotFound from "./0401_pagenotfoud";
import NavBar from "./0331_NavBar";
import Home from "./0331_home";

const BookStoreRotes =() => {

    return(
        <div>
               <BrowserRouter>  
                    <NavBar/>
                    // how to enable Routing
                    <Routes>
                        <Route path="/" element={<Home/>}> </Route>
                        <Route path="/book/:BookID/:BookName" element={<Book/>}> </Route>
                        <Route path="/bookstore" element={<BookStore/>}> </Route>
                        <Route path="*" element={<PageNotFound/>}> </Route>
                        
                    </Routes>
               
                </BrowserRouter>
        </div> 
    );

}

export default BookStoreRotes;



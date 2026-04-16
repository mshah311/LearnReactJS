import { Link } from "react-router-dom";

const NavBar =() => {

    return(

        <div>
            <Link to = "/"> Home </Link>
            <br></br>
            <Link to = "/about"> About </Link>
            <br></br>
            <Link to = "/contact"> Contact </Link>
            <br></br>
            <Link to = "/book/123/AI"> Book </Link>
            <br></br>
            <Link to = "/book/Dhawan/Arpit"> Book </Link>
            <br></br>
            <Link to = "/Bookstore"> Book Store </Link>
        </div>
            
    );

}

export default NavBar;
import type React from "react";
import { useContext } from "react";
import { UserContext } from "./contexdata";

const GrandChild:React.FC = () => {

    const {UserName, UserLastName} = useContext(UserContext)

    return(
        <div>
            <h1> Grand Child Component </h1>
            <p> User Name: {UserName}</p>
            <p> User Last Name: {UserLastName}</p>
        </div>
    );

}
export default GrandChild;
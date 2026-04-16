import type React from "react";

type userProp = {UserName:string}

const GrandChild:React.FC<userProp> =({UserName}) => {

    return(
        <div>
            <h1> Grand Child Component </h1>
            <p> Welcome {UserName}</p>
        </div>
    );

}
export default GrandChild;
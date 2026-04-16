import type React from "react";
import GrandChild from "./grandchild";

type userProp = {UserName:string}

const Child:React.FC<userProp> =({UserName}) => {


    return(
        <div>
            <h1> Child  Component</h1>
            <GrandChild UserName={UserName} />

        </div>
    );

}
export default Child;
import type React from "react";
import Child from "./Child";

type userProp = {UserName:string}

const Parent:React.FC<userProp> =( {UserName}  ) => {


    return(
        <div>
            <h1> Parent Component</h1>
            <Child UserName={UserName} />
        </div>
    );

}
export default Parent;
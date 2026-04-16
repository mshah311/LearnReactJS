// API location --  https://jsonplaceholder.typicode.com/users

import { useEffect, useState } from "react";

// Using fetch method

interface UserDetail { id:number, name:string, username:string, email:string }

const GetUserDetail = () => {

const [vid, setid] = useState <UserDetail [] > ([]);

useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((api_response) => {
            if (!api_response.ok ) {
                   throw new Error("API cound be reached ... NO Data");
            }
            return api_response.json();
        })
    .then ((api_response:UserDetail[])=>{setid(api_response)})
    .catch ((api_error)=> {console.error(api_error.message ,api_error )} )
}, [] );

    return(
        <div>
            <ul> 
                {vid.map((id1)=>{
                    return <li key = {id1.id}>
                            {id1.id} {id1.name} {id1.username} {id1.email}
                    </li>
                })}    
             </ul>

        </div>
    );

}

export default GetUserDetail;

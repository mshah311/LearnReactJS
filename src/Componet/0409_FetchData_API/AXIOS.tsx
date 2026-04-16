// API location --  https://jsonplaceholder.typicode.com/users

import { useEffect, useState } from "react";
import axios from "axios";

// Using fetch method

interface UserDetail { id:number, name:string, username:string, email:string }

const GetUserDetailAxios = () => {

const [vid, setid] = useState <UserDetail [] > ([]);

useEffect(()=> {
    const id1 = async() => {
        const id2 = await axios.get<UserDetail[]> ("https://jsonplaceholder.typicode.com/users") 
        setid (id2.data);
    }
    id1 ();
    
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

export default GetUserDetailAxios;

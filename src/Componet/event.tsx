// Exmaple of Events
// onClick, onChange, formSubmitt, keyboardevents, mosuseevent
// React use Camel case for all event names.
// 

import React, { useState } from "react";

// const Animal = () => {
//     const [animalname,setanimalname] = useState("");

//     const Onclick_event = () => {
//         alert ("Get Animal detail");
//     }

//     const OnRightclick_event = () => {
//         alert ("Right Click");
//     }

//     const onChange_event = (e) => {
//         setanimalname(e.target.value );

//     }
//     return(
//         <div>
//             <button onClick = { Onclick_event   }> Click me </button>
//             <button onClick = { ()=> {alert ("Hello");}   }> Hello  </button>
//             <button onContextMenu={OnRightclick_event}> Right Click </button>

//             <br/>
//             <label> Animal Name </label>
//             <input type="text" onChange={onChange_event} placeholder="z" value={animalname}></input> 
//             <p> {animalname} </p>
//         </div>
//     );

// }

//  export default Animal;
// without creating a function how to do incremrnt and decrement


const GetAnimalDetail2 = () => {

const [animalid,setAnimalID] = useState(0);
const [fishid,setfishID] =useState("");
const [fishtype,setfishType] =useState("");

// below is synthetic events
// this will bring consitency accross browsers an bring high performace to react app
// it has same properties across diff browsers and platform

const onChange_fishID =(e:React.ChangeEvent<HTMLInputElement>) => {
    setfishID( e.target.value);
}

const onClick_fishType =(e:React.MouseEvent<HTMLButtonElement>) => {
    alert("Fish type is missing");
}

    return(
        <div>

            <button onClick = {() => {setAnimalID(animalid+1) } } > Increment me </button>
            <h1> {animalid} </h1>
            <button onClick = {() => {setAnimalID(animalid-1) }}> decrease me </button>
            <br></br>
            <label> Enter Fish ID  </label>
            <input type="text" value={fishid} onChange={onChange_fishID}></input>  
            <p> {fishid} </p>            
            <br></br>
            <button onClick={onClick_fishType}> Fish Type </button>
        </div>
    );

}

export default GetAnimalDetail2 ;


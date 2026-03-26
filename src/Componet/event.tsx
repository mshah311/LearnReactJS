// Exmaple of Events
// onClick, onChange, formSubmitt, keyboardevents, mosuseevent
// React use Camel case for all event names.
// 

import { useState } from "react";

const Animal = () => {
    const [animalname,setanimalname] = useState("");

    const Onclick_event = () => {
        alert ("Get Animal detail");
    }

    const OnRightclick_event = () => {
        alert ("Right Click");
    }

    const onChange_event = (e) => {
        setanimalname(e.target.value );

    }
    return(
        <div>
            <button onClick = { Onclick_event   }> Click me </button>
            <button onClick = { ()=> {alert ("Hello");}   }> Hello  </button>
            <button onContextMenu={OnRightclick_event}> Right Click </button>

            <br/>
            <label> Animal Name </label>
            <input type="text" onChange={onChange_event} placeholder="z" value={animalname}></input> 
            <p> {animalname} </p>
        </div>
    );

}

 export default Animal;
// without creating a function how to do incremrnt and decrement


const GetAnimalDetail2 = () => {

const [animalid,setAnimalID] = useState(0);

    return(
        <div>

            <button onClick = {() => {setAnimalID(animalid+1) } } > Increment me </button>
            <h1> {animalid} </h1>
            <button onClick = {() => {setAnimalID(animalid-1) }}> decrease me </button>

        </div>
    );

}

//export default GetAnimalDetail2 ;


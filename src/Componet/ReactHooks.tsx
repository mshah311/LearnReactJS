// From react v 16.8+ we can use hooks before this we have to use class component.

import { useState } from "react";

type Religiontype = {RID:number;RName:string;RPopulationGrowth?:number};

const Religion =() =>{
const [religionname, setreligionname ] = useState ("Sanatan");
const [religionid, setreligionid ] = useState (0);
const [religiongroup,setreligiongroup ] = useState <Religiontype> ({RID:0, RName:"Christinality", RPopulationGrowth:0} )
return (
        <div>
            <h1> {religionname} {religionid} </h1>
            <h1> {religiongroup.RID} {religiongroup.RName} {religiongroup.RPopulationGrowth} </h1>
            
            <button onClick={()=>{setreligionname("Hindu")}}> Update religion </button>
            <button onClick={()=>{setreligionid (religionid+1)}}>  Increment ID </button>
            {/* <button onClick={()=>{setreligiongroup ({...religiongroup, RPopulationGrowth: (religiongroup.RPopulationGrowth ?? 0) + 1})}}>  Set religion Growth </button> */}
            <button onClick={()=>{setreligiongroup ({...religiongroup, RPopulationGrowth: (religiongroup.RPopulationGrowth ?? 0 )  + 1})}}>  Set religion Growth </button>
        </div>
    );
}

export default Religion;

// ... is spread operator to copy one array / object from one to another.
const var1 =[3,2,1,0,-1,-2]
const var2 =[...var1,99,100]

console.log (var2);




type EducationInstitude ={Collegeid:string; collegename:string;collegestate?:string};

const   GetEducationDetail=({Collegeid,collegename,collegestate}:EducationInstitude )=>{
return (
<div>
    <h3> College ID:{Collegeid} </h3>
    <h3> College Name:{collegename}</h3>
    <h3> College State:{collegestate ?? "State is optional"}</h3>
</div>

);

}

export default GetEducationDetail;

import type React from "react";

type StudentType = {

    studentid:string;
    studentname:string;
};

const GetStudentData:React.FunctionComponent<StudentType>=({studentid,studentname})=> {

return(<div> <h1>  studentid:{studentid} </h1> <h2> studentname:{studentname}</h2> </div>);

}

export default GetStudentData;



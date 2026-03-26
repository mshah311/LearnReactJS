import React from "react";

interface StudentProps {
    studentid: string | number;
}

class Student extends React.Component<StudentProps>{

    render () {

        return ( <div>  
            
            <h1> Need curley braces within HTML tags {this.props.studentid} </h1>
            
             </div>);
    }


}

export default Student;


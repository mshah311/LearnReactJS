type Employee = {
    OnClick_EmployeeID:() => void;
}

const GetEmployeeDetail = ({OnClick_EmployeeID}:Employee ) => { 

    OnClick_EmployeeID = () => {
        alert ("Save Employee Detail");

    }


    return (

        <div>
            <button onClick={OnClick_EmployeeID}> Employee ID </button>

        </div>
    );
}

export default GetEmployeeDetail;  
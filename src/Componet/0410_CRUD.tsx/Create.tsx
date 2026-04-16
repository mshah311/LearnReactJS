import axios from "axios";
import React, { useState } from "react";

export interface CustDetail { id:number, name:string, username:string, email:string }
const API_URL ="http://localhost:5000/CustomerData";

interface AddCustDetailProps {
    onCustomerAdded: () => void;
}

const AddCustDetail = ({ onCustomerAdded }: AddCustDetailProps) => {

const [CustID,setCustID] = useState<CustDetail>({
    id: 0,
    name: "",
    username: "",
    email: ""
});

const OnChange =(a:React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = a.target;
        setCustID({
            ...CustID, 
            [name]: name === 'id' ? (value === '' ? 0 : parseInt(value) || 0) : value
        });
}

const OnButtonClick = async () => {

    await axios.post (API_URL,CustID);
    setCustID({
        id: 0,
        name: "",
        username: "",
        email: ""
    })
    onCustomerAdded(); // Refresh the customer list

}

return(
        <div>
            <h1> Add Customer </h1>
            <label> Enter Customr ID: </label>
                <input type="text" name="id" placeholder="Enter Customr ID" value={CustID.id} onChange={OnChange} />
            <label> Enter Customr Name: </label>
                <input type="text" name="name" placeholder="Enter Name" value={CustID.name} onChange={OnChange} />
            <label> Enter Customr User Name: </label>
                <input type="text" name="username" placeholder="Enter User Name" value={CustID.username} onChange={OnChange} />
            <label> Enter Customr Email: </label>
                <input type="text" name="email" placeholder="Enter Email" value={CustID.email} onChange={OnChange} />
            <button onClick={OnButtonClick}> create new record </button>
        </div>
        );

}

export default AddCustDetail;




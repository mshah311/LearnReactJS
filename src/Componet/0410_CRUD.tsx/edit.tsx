import axios from "axios";
import React, { useState } from "react";

export interface CustDetail { id:number, name:string, username:string, email:string }
const API_URL ="http://localhost:5000/CustomerData";

export interface priCustDetail { 
    EditCustDetail:CustDetail,
    onCustomerAdded: () => void;
    clearedit:()=> void;
}

const EditCustomer: React.FunctionComponent<priCustDetail> = ({
    EditCustDetail, onCustomerAdded,clearedit }) =>  

{
    const [cdetail,updateCust] = useState <CustDetail> (EditCustDetail);

    const OnChange = (z:React.ChangeEvent<HTMLInputElement>) => {
        updateCust ({
            ...cdetail,[z.target.name]:z.target.value
        });
    } ;

    const updateRecrod = async() => {
        await axios.put (`${API_URL}/${cdetail.id} ` cdetail  );
        onCustomerAdded();
    };

    return(
        <div>
            <h1> edit employee</h1>
            <input type="text" name="name" value={CustID.name} onChange={OnChange} />
            <input type="text" name="username" value={CustID.username} onChange={OnChange} />
            <input type="text" name="email" value={CustID.email} onChange={OnChange} />
            <button onClick={updateRecrod} > update </button>

        </div>
    );
}

export default EditCustomer;
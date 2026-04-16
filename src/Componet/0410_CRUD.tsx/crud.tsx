// perform CRUD operation
// Create, Read, update and Delete

import axios from "axios";
import {  useEffect,  useState } from "react";
import AddCustDetail from "./Create";
import EditCustomer from "./edit";

// Json server to perofrm operation
// server and app is client
// install json server npm install json-server

export interface CustDetail { id:number, name:string, username:string, email:string }

const API_URL ="http://localhost:5000/CustomerData";

const  CustomerList =() => {

    const [CustID,setCustID] = useState <CustDetail[]> ([]); 
    const [editCustID,editCustID]  = useState <CustDetail|null> (null);

    const fetchCustomer = async() => {
        const response=await axios.get<CustDetail []> ( API_URL);
        setCustID (response.data);
    };

    const deleteCustomer = async(CustID:number) => {
        await axios.delete(`${API_URL}/${CustID}`);
        fetchCustomer();
    }

    useEffect( ()=> {fetchCustomer();}, [] );

    return (
        <div>
            <AddCustDetail onCustomerAdded={fetchCustomer}/>
            {
                editCustID&&(
                    <EditCustomer EditCustDetail={editCustID}
                    onCustomerAdded = {fetchCustomer}
                    clearedit={()=>{editCustID(null)}}/>
                )
            }
            <h1> customer list </h1>
             <button> Insert </button> 
            <table border="3">
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            User Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Action
                        </th>
                    </tr> </thead>    
                        <tbody>
                            {
                            CustID.map ((z)=> (
                                <tr key= {z.id}>
                                    <td>
                                        {z.id}
                                    </td>
                                    <td>
                                        {z.name}
                                    </td>
                                    <td>
                                        {z.username}
                                    </td>
                                    <td>
                                        {z.email}
                                    </td>
                                    <td>
                                        <button> edit </button>
                                        <button onClick={()=>{deleteCustomer(z.id)}}> delete </button>
                                    </td>

                                </tr>
                            ))
                            }
                        </tbody>
            </table>
        </div>

    );
 
}

export default CustomerList;
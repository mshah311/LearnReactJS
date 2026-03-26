import ArrowFunction from "./ArrowFunctionComponent";

function Get_user_list() {
    return (
        <div>
        <h1> get user Jason object. </h1>
        <h2> ...... </h2></div>
    );
}

function Get_roles_list() {
    return (

        <div>
        <Get_user_list/>    
        <h1> get roles  Jason object. </h1>
        <h2> ...... </h2>
        <ArrowFunction/>
        </div>
    );
}

export default Get_roles_list;
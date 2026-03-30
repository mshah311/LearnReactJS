import { useState } from "react";

const Browsers = () => {

const [BrowserID,SetBrowserID] = useState("");
const [BrowserName,SetBrowserName] = useState("");
const [BrowserVersion,SetBrowserVersion] = useState("");
const [BrowserCo,SetBrowserCo] = useState("");

const [formdata,setformdata] = useState({
    BrowserID:"",BrowserName:"",BrowserVersion:"",BrowserCo:""
});

const [error,seterror] = useState<{[key: string]: string}>({});

const Handle_onChange = (e) => {
    const {name,value}=e.target;
    setformdata({
        ...formdata,
    [name]:value
    });
    if (error[name]) {
        seterror({
            ...error, [name]:""
        });
    } 
}

const validateForm = () => {
    const newError: {[key: string]: string} = {};
    if (! formdata.BrowserID) {
        newError.BrowserID = "Browser ID is required"
    }
    if (! formdata.BrowserName) {
        newError.BrowserName = "Browser Name is required"
    }
    if (! formdata.BrowserVersion) {
        newError.BrowserVersion = "Browser Version is required"
    }
    if (! formdata.BrowserCo) {
        newError.BrowserCo = "Browser Co. is required"
    }
    return newError;
} 

const HandleSave = (e) => {
    
    e.preventDefault();
    const newError = validateForm();
    if (Object.keys(newError).length > 0) {
        seterror(newError);
    }
    else {
        console.log("Form Saved", formdata) ;

        setformdata ({
            BrowserID:"",BrowserName:"",BrowserVersion:"",BrowserCo:""
        });
    }

}
    return(

        <form onSubmit={HandleSave}> 
        <div>
            <label> Browser ID: </label>
            <input type="text" value={BrowserID} onChange={(vBrowseID)=> {SetBrowserID(vBrowseID.target.value)}} />   

            <label> Browser Name: </label>
            <input type="text" value={BrowserName} onChange={(vBrowseName)=> {SetBrowserName(vBrowseName.target.value)}} />   

            <label> Browser Version: </label>
            <input type="text" value={BrowserVersion} onChange={(vBrowseVersion)=> {SetBrowserVersion(vBrowseVersion.target.value)}} />   

            <label> Browser Co: </label>
            <input type="text" value={BrowserCo} onChange={(vBrowseCo)=> {SetBrowserCo(vBrowseCo.target.value)}} />   

            <p> Bowser ID is: {BrowserID} </p>
            <p> Bowser Name is: {BrowserName} </p>
            <p> Bowser Version is: {BrowserVersion} </p>
            <p> Bowser Co. is: {BrowserCo} </p>

            <p></p>

            <label> Browser ID: </label>
            <input type="text" name="BrowserID" value={formdata.BrowserID} onChange={Handle_onChange} placeholder="BrowserID" />   
            {error.BrowserID && <p style={{color:"red"}} > {error.BrowserID} </p>}

            <label> Browser Name: </label>
            <input type="text" name="BrowserName" value={formdata.BrowserName} onChange={Handle_onChange} placeholder="BrowserName" /> 
            {error.BrowserName && <p style={{color:"red"}} > {error.BrowserName} </p>}

            <label> Browser Version: </label>
            <input type="text" name="BrowserVersion" value={formdata.BrowserVersion} onChange={Handle_onChange} placeholder="BrowserVersion" /> 
            {error.BrowserVersion && <p style={{color:"red"}} > {error.BrowserVersion} </p>}

            <label> Browser Co: </label>
            <input type="text" name="BrowserCo" value={formdata.BrowserCo} onChange={Handle_onChange} placeholder="BrowserCo" /> 
            {error.BrowserCo && <p style={{color:"red"}} > {error.BrowserCo} </p>}

            <p> Bowser ID is: {formdata.BrowserID} </p> 
            <p> Bowser Name is: {formdata.BrowserName} </p>
            <p> Bowser Version is: {formdata.BrowserVersion} </p>
            <p> Bowser Co. is: {formdata.BrowserCo} </p>

            <button type="submit"> Save Form </button>


        </div>
        </form>
    );
} 
export default Browsers;


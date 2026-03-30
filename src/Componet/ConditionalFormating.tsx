const ConditionalFormating=() => {

const TrueFalse:boolean = true;
const varString:string = "String";


            // if (TrueFalse == true) {
            //     return(
            //         <h1> This is true </h1> 
            //     );
            // }
            // else {
            //     return(<h1> this is false </h1>);
            // }

    // return(
    //     <div>
    //         {
    //             TrueFalse? ( <h1> if consition true -- Display True </h1>):(<h2> if consition false -- Display false </h2>)
    //         }
    //     </div>
    // )

    const vstringMethod = () => {
        switch (varString) {
            case "Boolean":
                return (<h1> Variable type Boolean </h1>); 
            case "String":
                return (<h1> Variable type String </h1>);
            default:
                return (<h1> Variable type not defined </h1>);
        }    
    }

    return (
        <div> {vstringMethod()} </div>
    )
}

export default ConditionalFormating;


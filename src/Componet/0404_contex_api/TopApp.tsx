import { UserContext } from "./contexdata";
import GrandChild from "./grandchild";
// import Parent from "./Parent";

const TopApp1 =() => {

const UserName:string = "Mrunal  using Context";
const UserLastName:string = "Shah using Context";

    return(
        <div>
            {/* it will provide global data to all children */}
            <UserContext.Provider value={{UserName, UserLastName}}>
            <h1> TopLevel Component </h1>
            <GrandChild/>
            </UserContext.Provider>

        </div>
    );

}
export default TopApp1;
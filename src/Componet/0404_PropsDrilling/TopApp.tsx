// Props drilling

// Passing data to top level component to lower nested child components through multiple intermediate components. 

// TopApp
// 	|
// 	Parent
// 		|
// 		Child
// 			|
// 			Grand child
			
// I am not going to do anything with parent and child but those are quired only to pass the data. This is called props drilling 
// In this we will pass data from TopApp to Grandchild. Not writing anything for aprent and child, they are just going to pass data.

import Parent from "./Parent";

const TopApp =() => {

const UserName:string = "Mrunal Shah";

    return(
        <div>
            <h1> Top Level App </h1>
            <Parent UserName={UserName} />
        </div>
    );

}
export default TopApp;
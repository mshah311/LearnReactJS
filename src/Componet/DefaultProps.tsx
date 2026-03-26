

type Material = { 
    MaterialID:string;
    MaterialName:string;
    MaterialWeight?:number;
}

const GetMaterialDetail = ( {MaterialID,MaterialName,MaterialWeight=1} : Material) => {

    return ( 
        <div>
            <h1> Material ID  {MaterialID} Name {MaterialName} </h1>
            <h2> Material weight {MaterialWeight} </h2>
        </div>

    );

}

export default GetMaterialDetail;
// Passing Arrow Function as Props using Type
// Arrow Function Component

type Material = { MaterialID:string; MaterialName:string; Material_Compund:string;MaterialWeight:number ; MaterialAttribute?:string ; MaterialType?:string }

// GetMaterialDetail is a child component of GetMaterialDetail_Parent
const GetMaterialDetail = ({MaterialID, MaterialName,Material_Compund,MaterialWeight} : Material) => {

    return(
        <div> 
            <h1> Material ID : {MaterialID}  Material Name: {MaterialName} </h1>
            <h2> Material Compound : {Material_Compund}  Material Weight: {MaterialWeight} </h2>

        </div>
    );
}
//--------------------------------------------------------------------------------
// Arrow Function with Optional Parameter

const GetMaterialDetailOptional = ({MaterialID, MaterialName,Material_Compund,MaterialWeight,MaterialAttribute} : Material) => {

    return(
        <div> 
            <h1> Material ID : {MaterialID}  Material Name: {MaterialName} </h1>
            <h2> Material Compound : {Material_Compund}  Material Weight: {MaterialWeight} </h2>
            <h2> Material Attribute : {MaterialAttribute} </h2>

        </div>
    );
}

// Arrow Function with Default value

const GetMaterialDetailDefault = ({MaterialID, MaterialName,Material_Compund,MaterialWeight,MaterialType="Alcaline"} : Material) => {

    return(
        <div> 
            <h1> Material ID : {MaterialID}  Material Name: {MaterialName} </h1>
            <h2> Material Compound : {Material_Compund}  Material Weight: {MaterialWeight} </h2>
            <h2> Material Type : {MaterialType} </h2>

        </div>
    );
}


// Parent Component
const GetMaterialDetail_Parent = () => {
    return(
        <div> 
            <GetMaterialDetail MaterialID="M101" MaterialName="Chemical 1" Material_Compund="H2SO4" MaterialWeight={120}/>
            <GetMaterialDetailOptional MaterialID="M102" MaterialName="Chemical 2" Material_Compund="HCL" MaterialWeight={150} MaterialAttribute="Acid"/>
            <GetMaterialDetailDefault MaterialID="M103" MaterialName="Chemical 3" Material_Compund="H2O" MaterialWeight={100} MaterialType="Nutral"/>
            <GetMaterialDetailDefault MaterialID="M104" MaterialName="Chemical 4" Material_Compund="CO2" MaterialWeight={100} />
        
            <GetMaterialMaster MaterialID="M105" MaterialName="Chemical 5" Material_Compund="O3" MaterialWeight={100} MaterialVendor="Dupont" MaterialSourceCountry="USA"/>
            <GetVendorDetail VendorID="V1" VendorName="Dupont" />

        </div>
    );
}

// Only one export can be within a file 
export default GetMaterialDetail_Parent;


// Passing Arrow Function as Props using Mutiple Type, inehritaed 

type MaterialMaster = Material & {MaterialVendor:string;MaterialSourceCountry?:string}

const GetMaterialMaster = ({MaterialID, MaterialName,Material_Compund,MaterialWeight,MaterialType="Alcaline",MaterialVendor,MaterialSourceCountry}:MaterialMaster ) => {

return(
    <div>
            <h1> Material ID : {MaterialID}  Material Name: {MaterialName} </h1>
            <h2> Material Compound : {Material_Compund}  Material Weight: {MaterialWeight} </h2>
            <h2> Material Type : {MaterialType} </h2>
            <h2> Material Vendor : {MaterialVendor} Material Sourec Country : {MaterialSourceCountry} </h2>
    </div>

);

}

// Passing Arrow Function as Props using Interface

interface Vendor {
    VendorID:string, VendorName:string
}

// Passing Arrow Function as Props using Mutiple Interface, inehrited

interface VendorMaster extends Vendor  {
    VendorCountry?:string, VendorState?:string
}

// Interface inheriting type
interface MaterialVendorMaster extends Material {
   }

// Type Interface Innterface
type MaterialVendorMaster2 = VendorMaster & {}

// Type Interface Innterface and Type
interface MaterialVendorMaster3 extends MaterialVendorMaster , MaterialVendorMaster2 {}


const GetVendorDetail =({VendorID,VendorName,VendorCountry="USA",VendorState} : VendorMaster) => {
    return(
        <div>
            <h1>Vendor ID: {VendorID} Vendor Name: {VendorName} </h1>
            <h2>Vendor Country: {VendorCountry} Vendor State : {VendorState} </h2>

        </div>
    );

}


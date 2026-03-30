const ListofCities=() => {

const cities:string[]=["Philly","Easton","Mumbai"];

    return(
        <div>
            <ol> {cities.map((V1,V2)=>( 
                <li key={V2}> {V1} </li>
            )
               
            )} </ol>
        </div>

    );

}

export default ListofCities;
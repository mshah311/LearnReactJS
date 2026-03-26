import type { ReactNode } from "react"
import React from "react";

type Country = { CountryID:string, CountryName:string, CountryPopulation:number }

class GetCountryDetail extends React.Component < {},Country >
{  
    constructor (props:{}) { 
        super( props );
        this.state={
            CountryID:"USA",CountryName:"Untied States of America",CountryPopulation:330000000
        };        
    }

    ChangePopulationValue = () => {
        this.setState ( {
            CountryPopulation:340000000
        } );

    }
 
    render(): ReactNode {
        return (
            <div>
                <h1> {this.state.CountryID} {this.state.CountryName} {this.state.CountryPopulation}   </h1>
                <button onClick={this.ChangePopulationValue}> Change Population </button>
            </div>
        );
    }
 }

export default GetCountryDetail;

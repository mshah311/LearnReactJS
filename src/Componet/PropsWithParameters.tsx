type Home = { HomeDetail: (homeID:string) => void; }

const GetHomeDetail = ({HomeDetail} : Home ) => {

    // const HomeDetail = (homeID:string) => { console.log (homeID) ; alert(homeID) };


    
    return ( 
    <div>
        <button onClick={()=>{HomeDetail("Home address")}} > Get Home Detail  </button>

    </div>
    );
}

export default GetHomeDetail;

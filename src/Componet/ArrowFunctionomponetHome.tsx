import GetHomeDetail from "./PropsWithParameters";

const GetHomeDetial2 =() => { 
    const HomeID = (hid:string) => { console.log(hid );alert (hid); }
    return (

        <div>
            <h1> props with parameters  </h1>
            <GetHomeDetail HomeDetail={HomeID} />
        </div>
    );

}
export default GetHomeDetial2;
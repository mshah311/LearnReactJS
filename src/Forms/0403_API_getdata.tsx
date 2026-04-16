//

const GetAPIdata = ({contacts}: {contacts: any}) => {
    return(

        <div>
            <h1> API Data </h1>
            {
                contacts.map( (user:any)=> {
                    return (
                        <div key={user.id}>
                            <p>
                                <strong>ID:</strong> {user.id}<br/>
                                <strong>Name:</strong> {user.name}<br/>
                                <strong>City:</strong> {user.address.city}
                            </p>
                        </div>
                    );
                })

            }
        </div>
    );
}

export default GetAPIdata;


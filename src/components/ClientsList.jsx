import { useContext } from "react";
import { ClientsContext } from "./ClientsContext";
import { Link } from 'react-router-dom';


function ClientsList() {

    const [clients, setClients] = useContext(ClientsContext);


    return (
        <div className="container">

            <h1>Lists of Clients</h1>
            {clients.map(eachClient => {
                return (
                    <Link to="/client">
                        <div>
                            <h2>{eachClient.name}</h2>
                        </div>
                    </Link>
                )
            })}

        </div>
    );

}

export default ClientsList;
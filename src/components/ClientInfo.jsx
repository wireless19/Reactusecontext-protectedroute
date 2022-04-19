import { useContext } from "react";
import { ClientsContext } from "./ClientsContext";

function ClientInfo() {

    const [clients, setClients] = useContext(ClientsContext);

    function handleClick() {
        setClients(function (prevClients) {
            return (
                [...prevClients,
                {
                    id: "4",
                    name: "client 4",
                    website: "client4.com",
                    email: "client@4.com"
                }
                ]
            )
        })
    }


    return (
        <div className="container">

            <h1>Client Info</h1>
            {clients.map(eachClient => {
                return (

                    <div>
                        <h2>{eachClient.name}</h2>
                        <p>{eachClient.website}</p>
                        <p>{eachClient.email}</p>
                        <button onClick={handleClick}>BUTTON</button>
                    </div>

                )
            })}

        </div>
    );

}

export default ClientInfo;
import React, { createContext, useState } from "react";

//context
export const ClientsContext = createContext()

//provider
export const ClientsProvider = (props) => {

    const [clients, setClients] = useState([
        {
            id: "1",
            name: "client 1",
            website: "client1.com",
            email: "client@1.com"
        },
        {
            id: "2",
            name: "client 2",
            website: "client2.com",
            email: "client@2.com"
        },
        {
            id: "3",
            name: "client 3",
            website: "client3.com",
            email: "client@3.com"
        }
    ]);



    return (

        <ClientsContext.Provider value={[clients, setClients]}>
            {props.children}
        </ClientsContext.Provider>
    )
}
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClientsList from "./ClientsList";
import ClientInfo from "./ClientInfo";
import Forms from "./Forms";
import ProtectedRoutes from "./ProtectedRoutes";
import { ClientsProvider } from "./ClientsContext";


function App() {
    //when using cookies please remove the useState. 
    const [authenticate, setAuthenticate] = useState(false);

    return (

        <Router>

            <Switch>

                <ClientsProvider>

                    <Route exact path="/" component={ClientsList} />
                    {/* <Route path="/client" component={ClientInfo} /> */}

                    {/* if using a boolean(true or false) to authenticate */}
                    <ProtectedRoutes path="/client" component={ClientInfo} isAuth={authenticate} />

                    {/* if using cookies to authenticate */}
                    {/* <ProtectedRoutes path="/client" component={ClientInfo} /> */}
                    <Route path="/form" component={Forms} />
                </ClientsProvider>

            </Switch>
        </Router>

    )

}

export default App;
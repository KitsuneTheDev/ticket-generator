import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {

    const [ticket, setTicket] = useState(null);
    const [compType, setCompType] = useState('form');

    const values = {
        ticket: ticket,
        compType: compType,
        setTicket: setTicket,
        setCompType: setCompType,
    }

    return(
        <AppContext.Provider value={values}>
            {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};
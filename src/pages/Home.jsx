import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import TicketForm from "../components/TicketForm.jsx";
import Ticket from "../components/Ticket.jsx";

export default function Home() {

    const [component, setComponent] = useState('form');
    const [ticket, setTicket] = useState({
        id: 1,
        name: "Ozan Çelikkol",
        email: "example@email.com",
        githubUsername: "KitsuneTheDev",
    });

    return(
        <>
        <div className="background-container absolute -z-10 w-full h-full">
            <div className="bg-layer absolute bg-desktop-layer-1 inset-0"></div>
            <div className="bg-layer absolute bg-desktop-layer-2 inset-0"></div>
            <div className="bg-layer absolute bg-desktop-layer-3 inset-0"></div>
            <div className="bg-layer absolute bg-desktop-layer-4-1 inset-0"></div>
            <div className="bg-layer absolute bg-desktop-layer-5 inset-0"></div>
            <div className="bg-layer"></div>
        </div>
        <div className="main-container w-screen h-screen font-Inconsolata flex flex-col items-center">
            <Navbar />
            {component === "form" ? <TicketForm /> : <Ticket details={ticket} />}
        </div>
        </>
    );
}
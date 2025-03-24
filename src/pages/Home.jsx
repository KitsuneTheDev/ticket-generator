import Navbar from "../components/Navbar.jsx";
import TicketForm from "../components/TicketForm.jsx";
import bgImage from "../assets/images/background-desktop.png";

export default function Home() {
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
            <div className="banner-container text-white flex-col justify-center items-center mt-15 w-1/2">
                <div className="banner flex flex-col items-center justify-center w-full"> 
                    <h1 className="header-main text-5xl font-bold w-[80%] text-center tracking-wide">Your Journey to Coding Conf 2025 Starts Here!</h1>
                    <p className="description mt-3 text-xl font-lighter opacity-80 whitespace-pre">Secure your spot at next year's biggest coding conferance.</p>
                </div>
            </div>
            <TicketForm />
        </div>
        </>
    );
}
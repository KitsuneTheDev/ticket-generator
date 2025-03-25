export default function Ticket(props) {
    
    const ticket = props.details;

    return(
        <>
            <div className="banner-container text-white flex-col justify-center items-center mt-15 w-1/2">
                <div className="banner flex flex-col items-center justify-center w-full"> 
                    <h1 className="header-main text-5xl font-bold w-[80%] text-center tracking-wide">Congrats, <span className="bg-gradient-to-r from-[#EA6F61] to-white text-transparent bg-clip-text">{ticket.name}</span>!</h1>
                    <p className="description mt-3 text-xl font-lighter opacity-80 whitespace-pre-line text-center">
                        We've emailed your ticket to<br/>
                        <span className="text-[#EA6F61]">{ticket.email}</span> and will send updates in<br/>
                        the run up to the event.<br/>
                    </p>
                </div>
            </div>
            <div className="ticket-container w-full h-full bg-[url('../src/assets/images/pattern-ticket.svg')] bg-no-repeat absolute left-[35%]">
                <p className="text-2xl text-white">TICKET</p>
            </div>
        </>
    );
}
export default function Ticket(props) {
    
    const ticket = props.details;
    console.log(ticket)

    return(
        <>
            <div className="banner-container text-white flex-col justify-center items-center mt-15 w-1/2">
                <div className="banner flex flex-col items-center justify-center w-full"> 
                    <h1 className="header-main text-5xl font-bold w-[70%] text-center tracking-wide">Congrats, <span className="bg-gradient-to-r from-[#EA6F61] to-white text-transparent bg-clip-text">{ticket.username}</span>!
                    Your ticket is ready</h1>
                    <p className="description mt-6 text-xl font-lighter opacity-80 whitespace-pre-line text-center">
                        We've emailed your ticket to<br/>
                        <span className="text-[#EA6F61]">{ticket.email}</span> and will send updates in<br/>
                        the run up to the event.<br/>
                    </p>
                </div>
            </div>
            <div className="ticket-container w-150 h-70 bg-[url('../src/assets/images/pattern-ticket.svg')] bg-no-repeat absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/3 flex items-center gap-0">
                <div className="ticket-id-container text-white text-center text-2xl w-[80%] h-full">
                    <div className="top-info-container h-[50%] m-[5%] flex gap-[5%]">
                        <div className="logo-container flex items-start justify-start pt-[2%]">
                            <img src="./src/assets/images/logo-mark.svg" alt="event logo without name" />
                        </div>
                        <div className="event-details-container flex flex-col items-start justify-start">
                            <p className="text-3xl font-medium">Coding Conf</p>
                            <p className="text-xl text-white/40">May 25, 2025 / Istanbul, TR</p>
                        </div>
                    </div>
                    <div className="bottom-info-container h[50%] m-[5%] flex gap-[5%]">
                        <div className="avatar-container flex w-fit h-fit rounded-xl overflow-hidden">
                            <img src={ticket.avatar} alt="user photo" width={50} />
                        </div>
                        <div className="userInfo-container flex flex-col items-start">
                            <p className="text-2xl text-white">{ticket.username}</p>
                            <div className="github-container flex gap-[5%]">
                                <img src="./src/assets/images/icon-github.svg"/>
                                <p>{ticket.githubName}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket-info-container text-white/40 text-2xl text-center w-[20%] h-full flex items-center justify-center transform -rotate-270">
                <p>{`#${ticket.ticketId}`}</p>
                </div>
            </div>
        </>
    );
}
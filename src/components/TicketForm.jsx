import { useContext, useState, useRef } from "react";
import { AppContext } from "../context/AppContext";

export default function TicketForm() {

    const { setTicket, setCompType } = useContext(AppContext);
    const [avatarFile, setAvatarFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [githubName, setGithubName] = useState("");

    const avatarFileRef = useRef();

    function handleAvatarDragOver(event) {
        event.preventDefault();
    }

    function handleAvatarDrop(event) {
        event.preventDefault();
        if(event.dataTransfer.files.length) {
            const theFile = event.dataTransfer.files[0];
            setAvatarFile(theFile);
        }
    }

    function handleAvatarChange(event) {
        console.log(event.target.files)
        setAvatarFile(event.target.files[0]);
    }

    function handleNameChange(event) {
        setUsername(event.target.value);
    }

    function handleMailChange(event) {
        setEmail(event.target.value);
    }

    function handleGithubChange(event) {
        setGithubName(event.target.value);
    }

    function handleFormSubmit() {

        if(!avatarFile) {
            alert('Please upload an avatar');
            avatarFileRef.current?.focus();
            return;
        }

        const imageURL = URL.createObjectURL(avatarFile);

        const newId = Math.random(60000 - 50000) * 10000 + 50000;
        console.log("ID-->", newId);

        setTicket({
            avatar: imageURL,
            username: username,
            email: email,
            githubName: githubName,
            ticketId: Math.floor(newId),
        });
        setCompType('ticket');
    }   

    return(
        <>
        <div className="banner-container text-white flex-col justify-center items-center mt-15 w-1/2">
            <div className="banner flex flex-col items-center justify-center w-full"> 
                <h1 className="header-main text-5xl font-bold w-[80%] text-center tracking-wide">Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className="description mt-3 text-xl font-lighter opacity-80 whitespace-pre">Secure your spot at next year's biggest coding conferance.</p>
            </div>
        </div>
        <div className="form-container text-white w-[22%] h-1/2 flex flex-col items-center mt-2">
            <form action="#" className="h-full w-full mt-5 flex flex-col justify-between" onSubmit={handleFormSubmit} >
                <div className="avatar-container h-[25%]">
                    <p className="font-medium text-white/80">Upload Avatar</p>
                    <label htmlFor="image-upload-input" className="h-full w-full" onDragOver={handleAvatarDragOver} onDrop={handleAvatarDrop} >
                        <div className="flex flex-col items-center justify-center image-input-container bg-white/10 h-full rounded-xl overflow-hidden outline-2 outline-white/20 outline-dashed mt-2 group hover:cursor-pointer">
                            <img src="./src/assets/images/icon-upload.svg" alt="upload logo" className="h-[40%] w-fit border-white/10 border-2 rounded-xl" />
                            <p className="text-white/30">{avatarFile ? `File selected: ${avatarFile.name}` : `Drag and drop or click to upload`}</p>
                            <input type="file" accept="image/png, image/jpeg" id="image-upload-input" className="group-hover:cursor-pointer hidden" ref={avatarFileRef} onChange={handleAvatarChange} />
                        </div>
                    </label>
                    <div className="upload-description mt-3 flex gap-2">
                        <img src="./src/assets/images/icon-info.svg" alt="icon info image" />
                        <p className="text-white/30 text-xs">Upload your photo (JPG or PNG, max size: 500KB).</p>
                    </div>
                </div>
                <div className="user-information-container flex flex-col w-full mt-15">
                    <div className="user-information-section mt-3">
                        <label htmlFor="name-input">
                            <p>Full Name</p>
                            <input type="text" id="name-input" onChange={handleNameChange} className="bg-white/10 w-full mt-1.5 h-9 outline-2 outline-white/20 rounded-md p-1.5" placeholder="Type Here..." required />
                        </label>
                    </div>
                    <div className="user-information-section mt-3">
                        <label htmlFor="mail-input">
                            <p>Email Address</p>
                            <input type="email" id="mail-input" onChange={handleMailChange} className="bg-white/10 w-full mt-1.5 h-9 outline-2 outline-white/20 rounded-md p-1.5" placeholder="example@email.com" required />
                        </label>
                    </div>
                    <div className="user-information-section mt-3">
                        <label htmlFor="github-input">
                            <p>Github Username</p>
                            <input type="text" id="github-input" onChange={handleGithubChange} className="bg-white/10 w-full mt-1.5 h-9 outline-2 outline-white/20 rounded-md p-1.5" placeholder="@yourusername" required />
                        </label>
                    </div>
                </div>
                <div className="submit-button-container w-full">
                    <button type="submit" className="form-submit-button w-full bg-[#EA6F61] h-12 rounded-md hover:cursor-pointer mt-6 text-black font-bold">Generate My Ticket</button>
                </div>
            </form>
        </div>
        </>
    );
}
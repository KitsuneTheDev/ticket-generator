export default function TicketForm() {
    return(
        <div className="form-container text-white w-[22%] h-1/2 flex flex-col items-center mt-2">
            <form action="" className="h-full w-full mt-5 flex flex-col justify-between">
                <div className="avatar-container h-[25%]">
                    <p className="font-medium text-white/80">Upload Avatar</p>
                    <label htmlFor="image-upload-input" className="h-full w-full">
                        <div className="flex flex-col items-center justify-center image-input-container bg-white/10 h-full rounded-xl overflow-hidden outline-2 outline-white/20 outline-dashed mt-2 group hover:cursor-pointer">
                            <img src="./src/assets/images/icon-upload.svg" alt="upload logo" className="h-[40%] w-fit border-white/10 border-2 rounded-xl" />
                            <p className="text-white/30">Drag and drop or click to upload</p>
                            <input type="file" accept="image/png, image/jpeg" id="image-upload-input" className="group-hover:cursor-pointer hidden"></input>
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
                            <input type="text" id="name-input" className="bg-white/10 w-full mt-1.5 h-9 outline-2 outline-white/20 rounded-md p-1.5" placeholder="Type Here..."/>
                        </label>
                    </div>
                    <div className="user-information-section mt-3">
                        <label htmlFor="mail-input">
                            <p>Email Address</p>
                            <input type="email" id="mail-input" className="bg-white/10 w-full mt-1.5 h-9 outline-2 outline-white/20 rounded-md p-1.5" placeholder="example@email.com" />
                        </label>
                    </div>
                    <div className="user-information-section mt-3">
                        <label htmlFor="github-input">
                            <p>Github Username</p>
                            <input type="text" id="github-input" className="bg-white/10 w-full mt-1.5 h-9 outline-2 outline-white/20 rounded-md p-1.5" placeholder="@yourusername" />
                        </label>
                    </div>
                </div>
                <div className="submit-button-container w-full">
                    <button className="form-submit-button w-full bg-[#EA6F61] h-12 rounded-md hover:cursor-pointer mt-6 text-black font-bold">Generate My Ticket</button>
                </div>
            </form>
        </div>
    );
}
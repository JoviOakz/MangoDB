import Logo from "/Logo.png";

const NavBar = () => {
    return (
        <div className="flex w-full h-[5vh] bg-blue-800 shadow-md shadow-slate-500">
            <div className="flex justify-between items-center w-full">
                <img className="scale-[.25] w-1/12" src={Logo} />

                <div className="flex justify-between w-11/12 text-white">
                    <h1>publicAPI</h1>

                    <div className="flex pr-16 gap-12">
                        <h1>Home</h1>
                        <h1>More Information</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
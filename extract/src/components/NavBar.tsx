const NavBar = () => {
    return (
        <div className="w-full h-[5vh] bg-blue-800 flex items-center text-white shadow-md shadow-slate-500">
            <div className="w-[35%]" />
            <div className="w-[45%] flex justify-around">
                <h1>Home</h1>
                <h1>Extrato</h1>
                <h1>Adicionar Pagamento</h1>
            </div>
        </div>
    )
}

export default NavBar;
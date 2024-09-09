import { useState } from 'react';

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`w-full h-[5vh] flex items-center text-white shadow-md ${isDarkMode ? 'bg-gray-900 shadow-slate-700' : 'bg-blue-800 shadow-slate-500'}`}>
            <div className="w-[35%]" />
            <div className="w-[45%] flex justify-around">
                <h1>Home</h1>
                <h1>Extrato</h1>
                <h1>Adicionar Pagamento</h1>
            </div>

            <button onClick={toggleDarkMode} className="ml-auto mr-4 p-1 bg-gray-200 text-black rounded">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    );
};

export default NavBar;
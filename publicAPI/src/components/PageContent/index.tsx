import { useEffect } from "react";
import axios from "axios";
// import Button from "../Button";

const PageContent = () => {
    useEffect(() => {
        handleGet();
    }, []);
    async function handleGet() {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        console.log(res);
    }

    return (
        <div className="w-full h-[95vh] flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-blue-200 rounded-2xl flex justify-center items-center shadow-md shadow-slate-400">
                <button onClick={handleGet}>a</button>
                {/* <Button title="Get Weather" /> */}
            </div>
        </div>
    )
}

export default PageContent;
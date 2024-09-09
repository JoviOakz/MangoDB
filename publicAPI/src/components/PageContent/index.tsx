import Button from "../Button";

const PageContent = () => {
    return (
        <div className="w-full h-[95vh] flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-blue-200 rounded-2xl flex justify-center items-center shadow-md shadow-slate-400">
                <Button title="Get Weather" />
            </div>
        </div>
    )
}

export default PageContent;
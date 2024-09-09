import Button from "./Button";

const HomePage = () => {
    return (
        <div className="flex justify-center items-center w-full h-[95vh]">
            <div className="w-2/6 h-1/2 flex flex-col justify-around">
                <div className="flex flex-col gap-12">
                    <div>input</div>
                    <div>input</div>
                    <div>input</div>
                </div>

                <Button>Salvar</Button>
            </div>
        </div>
    )
}

export default HomePage;
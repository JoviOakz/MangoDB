import Button from "./Button";
import Input from "./Input";

const HomePage = () => {
    return (
        <div className="flex justify-center items-center w-full h-[95vh]">
            <div className="w-2/6 h-1/2 flex flex-col justify-around">
                <div className="flex flex-col gap-8">
                    <Input />
                    <Input />
                    <Input />
                </div>

                <Button title="Salvar" />
            </div>
        </div>
    )
}

export default HomePage;
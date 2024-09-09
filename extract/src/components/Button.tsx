interface IButtonProps {
    title: string
}

const Button = ({ title }:IButtonProps) => {
    return (
        <button className="w-full h-[5vh] rounded-lg bg-blue-800 text-white shadow-md shadow-slate-500">{title}</button>
    )
}

export default Button;
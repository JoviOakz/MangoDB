interface IButtonProps {
    title: string
}

const Button = ({ title } : IButtonProps) => {
    return (
        <button className="w-36 h-10 rounded-lg text-white bg-blue-800 shadow-md shadow-slate-500 hover:bg-blue-600">{title}</button>
    )
}

export default Button;
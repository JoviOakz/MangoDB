const Button = ({ children }) => {
    return (
        <button className="w-full h-[5vh] rounded-lg bg-blue-800 text-white shadow-md shadow-slate-500">{children}</button>
    )
}

export default Button;
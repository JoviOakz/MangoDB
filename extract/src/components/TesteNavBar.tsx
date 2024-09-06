import { Link, useNavigate, useParams } from "react-router-dom";

export default function TesteNavBar() {

    const navigate = useNavigate()
    const { nomedotomate } = useParams()

    return(
        <div style={{ fontSize: "2rem", display: "flex", gap: "20px" }}>
            <Link to="/">home</Link>
            <Link to="/extrato">extrato</Link>
            <Link to="/adicionar">adicionar</Link>
            <Link to="/pagamentos">pagamentos</Link>
            <button onClick={() => navigate("/")} >{nomedotomate || "butão"}</button>
        </div>
    )
}
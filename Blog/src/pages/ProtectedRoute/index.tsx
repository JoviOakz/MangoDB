import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect, useState } from "react";

interface IProtectedRoute {
    errorPage: ReactNode
    targetPage: ReactNode
}

const ProtectedRoute = ({ errorPage, targetPage }: IProtectedRoute) => {
    var [page, setPage] = useState<ReactNode>(<></>);
    function renderPage() {
        const token = sessionStorage.getItem('token');
        console.log(token)
        if (!token) {
            setPage(errorPage)
            return
        }
        const decodeToken = jwtDecode(token)
        const { exp } = decodeToken;
        if (Number(exp + '000') - Date.now()) {
            setPage(errorPage)
            return
        }
        setPage(targetPage)
    }
    useEffect(() => {
        renderPage()
    }, [])
    return page;
}

export default ProtectedRoute;
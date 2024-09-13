import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface IAlertContext {
    message: string
    setMessage: Dispatch<SetStateAction<string>>
    variant: string
    setVariant: Dispatch<SetStateAction<string>>
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

export const AlertContext = createContext({} as IAlertContext);
AlertContext.displayName = 'Alert';

const AlertProvider = ({ children }: { children: ReactNode }) => {
    var [message, setMessage] = useState('');
    var [variant, setVariant] = useState('danger');
    var [show, setShow] = useState(false);

    async function handleShow() {
        setTimeout(() => {
            setShow(false)
        }, 5000)
    }

    useEffect(() => {
        handleShow()
    }, [show])

    return (
        <AlertContext.Provider
            value={{
                message,
                setMessage,
                variant,
                setVariant,
                show,
                setShow
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider;
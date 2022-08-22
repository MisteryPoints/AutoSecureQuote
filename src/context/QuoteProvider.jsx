import { createContext, useState } from "react";

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('');

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    return (
        <QuoteContext.Provider value={{
            datos, 
            handleChangeDatos,
            error, 
            setError
        }}>
            {children}
        </QuoteContext.Provider>
    )
}

export {
    QuoteProvider
}

export default QuoteContext
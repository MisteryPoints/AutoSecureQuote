import { createContext, useState } from "react";
import { getDifYear, calcMarca, calcPlan, formatMoney } from '../helpers'

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [load, setLoad] = useState(false);

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const quoteSecure = () => {
        //Base
        let result = 20000

        //Dif de años
        const dif = getDifYear(datos.year) 

        //Resta del 3% c/año
        result -= ((dif * 3) * result) / 100  
        //Europeo 30%
        //Américano 15%
        //Asiático 5%
        result *= calcMarca(datos.marca) 

        //Básico 20%
        //Completo 50%
        result *= calcPlan(datos.plan) 

        //Formatear dinero
        result = formatMoney(result)
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
            setResult(result)
        }, 1500);
    }

    return (
        <QuoteContext.Provider value={{
            datos, 
            handleChangeDatos,
            error, 
            setError,
            quoteSecure,
            result,
            load
        }}>
            {children}
        </QuoteContext.Provider>
    )
}

export {
    QuoteProvider
}

export default QuoteContext
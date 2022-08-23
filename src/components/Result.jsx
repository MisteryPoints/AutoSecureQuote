import { useState, useCallback, useMemo, useRef } from "react"
import useQuote from "../hooks/useQuote" 
import { MARCAS, PLANS } from '../constants'

const Result = () => {
    const {result, datos} = useQuote()
    const {marca, year, plan} = datos
    const [modal, setModal] = useState(true);
    const [nameMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca))
    ,[result]) 
    const [namePlan] = useCallback(PLANS.filter(p => p.id === Number(plan)) 
    ,[result]) 
    const yearRef = useRef(year)
    const handleX = () => { 
        setModal(false)
    }

    if (!modal) return

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow-sm relative shadow-gray-700 rounded-md">
            <h2 className="text-gray-600 font-bold  text-3xl">
                <u>Resumen</u>
            </h2>
            <p className="absolute right-[2%] top-[-2%] font-bold text-xl cursor-pointer" onClick={handleX}>x</p>
            <p className="my-2">
                <span className="font-bold">Marca:   </span>
                {nameMarca.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan:   </span>
                {namePlan.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año del Auto:   </span>
                {yearRef.current}
            </p>
            <p className="my-2 text-xl">
                <span className="font-bold">Total de Cotización:   </span>
                {result}
            </p>
        </div>
    )
}

export default Result
import {Fragment} from 'react'
import { MARCAS, YEARS, PLANS } from '../constants' 
import useQuote from '../hooks/useQuote'
import Error from './Error' 

const Formulario = () => { 

  const {datos, handleChangeDatos, error, setError, quoteSecure} = useQuote()  

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(datos).includes('')){
        setError('Todos los campos son obligatorios')
        return
    }

    setError('') 
    quoteSecure()
  }
  
  return (
    <> 
        {error && <Error/>}
        <form action="" className='text-center' onSubmit={handleSubmit}>
            <div className='mb-5 text-start '>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Marca
                </label>
                <select name="marca" className='w-full p-3 bg-white border border-gray-200 rounded-lg' onChange={e => handleChangeDatos(e)}>
                    <option value="">--- Selecciona Marca ---</option>
                    {MARCAS.map(marca => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className='my-5 text-start'>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Año
                </label>
                <select name="year" className='w-full p-3 bg-white border border-gray-200 rounded-lg' onChange={e => handleChangeDatos(e)}>
                    <option value="">--- Selecciona Año ---</option>
                    {YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className='my-5 '>
                <label className='block mb-3 font-bold text-gray-700 uppercase'>
                    Elige un plan
                </label>
                <div className='w-full justify-center flex gap-3 py-3 text-white border border-gray-200 rounded-xl bg-gray-600'> 
                    {PLANS.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input type='radio' name='plan' value={plan.id} onChange={e => handleChangeDatos(e)} />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit" className='w-5/12 bg-indigo-500 hover:bg-indigo-700 hover:shadow-lg hover:shadow-gray-500   text-white cursor-pointer rounded-2xl p-2 font-bold uppercase transition-250' value='Cotizar'/>
        </form>
    </>
  )
}

export default Formulario
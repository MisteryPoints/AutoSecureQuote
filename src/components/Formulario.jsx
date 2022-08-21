import {Fragment} from 'react'
import { MARCAS, YEARS, PLANS } from '../constants'

const Formulario = () => {
  return (
    <>
        <form action="">
            <div className='mb-5'>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Marca
                </label>
                <select name="marca" className='w-full p-3 bg-white border border-gray-200 rounded-lg'>
                    <option value="">--- Selecciona Marca ---</option>
                    {MARCAS.map(marca => (
                        <option key={marca.id} value={marca.nombre}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className='my-5'>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Año
                </label>
                <select name="marca" className='w-full p-3 bg-white border border-gray-200 rounded-lg'>
                    <option value="">--- Selecciona Año ---</option>
                    {YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className='my-5'>
                <label className='block mb-3 font-bold text-gray-400 uppercase'>
                    Elige un plan
                </label>
                <div className='w-full justify-center flex gap-3 text-white border border-gray-200 rounded-lg bg-gray-600'> 
                    {PLANS.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input type='radio' name='plan' value={plan.id}  />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit"  className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer rounded-2xl p-2 font-bold uppercase' value='Cotizar'/>
        </form>
    </>
  )
}

export default Formulario
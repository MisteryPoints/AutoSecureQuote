import Formulario from "./Formulario"
import useQuote from "../hooks/useQuote"
import Spinner from "./Spinner"
import Result from "./Result"

const AppSecure = () => { 
  const {result, load} = useQuote()
  return (
    <>
        <header className='my-10'>
          <h1 className='text-white text-center text-4xl font-black mb-5'>Cotizador de Seguros de Auto</h1> 
        </header>
        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
            <Formulario/>
            {load ? (<Spinner/>) : result ? <Result/> : '' }
        </main>
    </>
  )
}

export default AppSecure
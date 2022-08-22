import useQuote from '../hooks/useQuote'
const Error = () => {
  const { error } = useQuote()
  return (
    <div className='border-t-4 border-b-4 bg-gradient-to-tr from-red-200 to-red-300 py-3 text-white uppercase font-bold border-red-600 text-center rounded-md text-xl'>
        <p >{error}</p>
    </div>
  )
}

export default Error
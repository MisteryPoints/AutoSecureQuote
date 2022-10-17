import { QuoteProvider } from './context/QuoteProvider'
import AppSecure from './components/AppSecure' 
import { Footer } from './components/Footer'

function App() { 

  return ( 
    <QuoteProvider> 
      <AppSecure/> 
      <Footer/>
    </QuoteProvider>
  )
}

export default App

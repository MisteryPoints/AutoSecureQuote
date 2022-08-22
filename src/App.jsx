import { QuoteProvider } from './context/QuoteProvider'
import AppSecure from './components/AppSecure'

function App() { 

  return ( 
    <QuoteProvider> 
      <AppSecure/> 
    </QuoteProvider>
  )
}

export default App

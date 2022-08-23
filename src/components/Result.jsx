 import useQuote from "../hooks/useQuote" 

const Result = () => {
    const {result} = useQuote()
    return (
        <div>{result}</div>
    )
}

export default Result
import { useEffect, useState } from 'react'
import { Header, MakeMatrix, MatrixSize, SortMatrix } from './components'
import { renderMathMatrix } from './utils'
import './App.css'


function App() {

  const [matrixSize, setMatrixSize] = useState({ row: null, col: null })
  const [matrix, setMatrix] = useState()
  const [mathMatrix, setMathMatrix] = useState()


  useEffect(() => {
    setMathMatrix(renderMathMatrix(matrix))
  }, [matrix])



  return (
    <>
      <Header />
      <MatrixSize setMatrixSize={setMatrixSize} />
      <MakeMatrix matrixSize={matrixSize} setMatrix={setMatrix} />
      <SortMatrix matrix={matrix} mathMatrix={mathMatrix} />
    </>
  )
}

export default App

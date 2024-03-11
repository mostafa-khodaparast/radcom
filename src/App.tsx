import { useEffect, useState } from 'react'
import { Header, MakeMatrix, MatrixSize } from './components'
import './App.css'
import { renderMathMatrix } from './utils'
import {BlockMath} from 'react-katex'



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
      {matrixSize.col && matrixSize.row && <BlockMath math={"A = " + mathMatrix} />}
    </>
  )
}

export default App

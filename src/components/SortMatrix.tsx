import { BlockMath } from "react-katex"
import 'katex/dist/katex.min.css'

function SortMatrix({ matrix, mathMatrix }) {

    if (matrix) {
        matrix.map((row: [], rowIndex: number) => {
            if (rowIndex % 2 == 0) {
                matrix[rowIndex] = row.sort((a, b) => a - b)
            } else {
                matrix[rowIndex] = row.sort((a, b) => b - a)
            }
        })
    }


    return (
        <>
            {matrix && <BlockMath math={"M = " + mathMatrix} />}
        </>
    )
}

export default SortMatrix
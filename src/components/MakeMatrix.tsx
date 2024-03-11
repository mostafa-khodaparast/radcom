import styles from './MakeMatrix.module.css'



function MakeMatrix({ matrixSize, setMatrix }) {

    // const matrix = new Array(matrixSize.row)
    // for (let i = 0; i < matrixSize.row; i++) {
    //     matrix[i] = new Array(matrixSize.col).fill(0)
    // }

    const matrix = Array(Number(matrixSize.row)).fill(0).map(() => {
        return new Array(Number(matrixSize.col)).fill(0)
    })



    const handleSubmit = event => {
        event.preventDefault()
        let count = 0
        for (let i = 0; i < matrixSize.row; i++) {
          for (let j = 0; j < matrixSize.col; j++) {
            matrix[i][j] = !isNaN(parseFloat(event.target[count].value)) ? parseFloat(event.target[count].value) : 0
            count += 1;
          }
        }
        setMatrix(matrix)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {matrix.map((row, indexRow = 1) => {
                    return (
                        <div className={styles.matrixStyle} key={indexRow}>
                            {row.map((item, indexColumn = 1) => {
                                return (
                                    <input
                                        className={styles.cell}
                                        key={indexRow + " " + indexColumn}
                                        type="number"
                                        defaultValue={0}
                                        name={indexRow + "," + indexColumn}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
                {matrixSize.row && matrixSize.col && <button>ذخیره ماتریکس</button>}
            </form>
        </div>
    )
}

export default MakeMatrix
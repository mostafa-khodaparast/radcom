export const renderMathMatrix = matrix => {
    return (
      "\\begin{vmatrix}\n" +
      matrix?.map((row, index) => {
          if (index === matrix.length) return row.join(" & ") + "\n"
          else return row.join(" & ") + "\\\\\n"
        })
        .join("") +
      "\\end{vmatrix}"
    )
  }
  
 
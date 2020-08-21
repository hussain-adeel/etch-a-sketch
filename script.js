 function createGrid(multiplier)
 {
    createRows(multiplier)
    createColumns(multiplier)
 }
 function createRows(numRows)
 {
     for (let i = 0; i < numRows; i++)
     {
        let newRow = document.createElement('div')
        newRow.classList.add('row')
        container.appendChild(newRow)
    }
 }
 function createColumns(numCols) 
 {
      for (let i = 0; i < numCols; i++)
         for (let j = 0; j < numCols; j++)
         {
            let newCol = document.createElement('div')
            newCol.classList.add('col')
            newCol.id = "no"
            rows[i].appendChild(newCol)
         }
 }
function paintCell() 
{
   let unPainted = document.getElementById("noPaint")
   unPainted.style.backgroundColor = "blue"
}
const container = document.getElementById('container')
const rows = document.getElementsByClassName('row')
createGrid(16)


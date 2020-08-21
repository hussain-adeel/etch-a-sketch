 function createGrid(multiplier)
 {
    createRows(multiplier)
    createColumns(multiplier)
    var unpaintedCells = document.querySelectorAll("#noPaint")
    var paintedCells = document.querySelectorAll("#painted")  
    
    // Allows for painting of the grid
    unpaintedCells.forEach(function(cell) 
    {
       cell.addEventListener('mouseover', function paint()
       {
          cell.id = 'painted'
       })
    })
    
    // Allows for use of reset button
    resetButton.addEventListener('click', function clearGrid() 
    {
       unpaintedCells.forEach(function(cell)
       {
          cell.id = 'noPaint'
       })
    })
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
            newCol.id = "noPaint"
            rows[i].appendChild(newCol)
         }
 }
 function resetGrid() 
 {
   const oldRows = document.querySelectorAll("div.row")
   const oldCols = document.querySelectorAll("div.col")
   oldCols.forEach(function(col){
      col.remove()
   })
   oldRows.forEach(function(row){
      row.remove()
   })
 }
 function changeGridSize(multiplier) 
 {
   resetGrid()
   createGrid(multiplier)
 }
//Constants that can be called before making grid
const container = document.getElementById('container')
const rows = document.getElementsByClassName('row')
const resetButton = document.getElementById('resetb')
const sizeButton = document.getElementById('sizeb')

// Inital Grid
changeGridSize(16)


// Allows for use of change grid size button
sizeButton.addEventListener('click', function reset()
{
   let userInput = 16
   let valid = false
   while (!valid)
   {
      userInput = prompt("What would you like the new size to be? (1-100)")
      if (userInput > 100 || userInput < 1 || isNaN(userInput))
      {
         continue;
      }
      valid = true;
   }
   changeGridSize(userInput)
})





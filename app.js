let grid;
const cols = 10
const rows = 10

function createArray(cols, rows) {
  let array = new Array(cols)
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(rows)
  }
  return array
}

function setup() {
  grid =  createArray(cols, rows)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid [i][j] = Math.floor(Math.random() * 2) 
    }
  }
}

setup()
console.table(grid)
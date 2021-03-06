let grid;
let cols;
let rows;
const resolution = 5
const fr = 10

function createArray(cols, rows) {
  let array = new Array(cols)
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(rows)
  }
  return array
}

function setup() {
  createCanvas(600, 400)
  cols = width / resolution
  rows = height / resolution
  grid =  createArray(cols, rows)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid [i][j] = Math.floor(Math.random() * 2) 
    }
  }
}

function draw() {
  background(0)
  frameRate(fr)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution
      let y = j * resolution
      if (grid[i][j] == 1) {
        fill(255)
        strokeWeight(0)
        rect(x, y, resolution, resolution)
      }
    }
  }
  let next = createArray(cols, rows)
  // compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j]
      // count neighbors
      let neighbors = countNeighbors(grid, i, j)
      // rules
      if (state == 0 && neighbors == 3) {
        next[i][j] = 1
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0
      } else {
        next[i][j] = state
      }
    }
  }
  grid = next
}

function countNeighbors(grid, x, y) {
  let sum = 0
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols
      let row = (y + j + rows) % rows
      sum += grid[col][row]
    }
  }
  sum -= grid[x][y]
  return sum
}

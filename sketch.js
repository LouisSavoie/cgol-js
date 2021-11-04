let grid;
let cols;
let rows;
const resolution = 20

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
}

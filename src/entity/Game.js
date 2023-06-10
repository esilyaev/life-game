import { WindowOutlined } from "@mui/icons-material";

const BOARD_SIZE = 30;

export class GameOfLife {
  /**
   *
   */

  constructor() {
    this.generation = 0;
    this.cols = BOARD_SIZE;
    this.rows = BOARD_SIZE;
    this.grid = new Array(this.rows);
    this.nextGrid = new Array(this.rows);
    // initialize grids
    for (var i = 0; i < this.rows; i++) {
      this.grid[i] = new Array(this.cols);
      this.nextGrid[i] = new Array(this.cols);
    }

    // set state
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        var isLive = Math.round(Math.random() * 20) > 10;
        if (isLive == 1) {
          this.grid[i][j] = 1;
        } else {
          this.grid[i][j] = 0;
        }
      }
    }
    window.game = this;
  }

  restart() {
    this.generation = 0;
    this.cols = BOARD_SIZE;
    this.rows = BOARD_SIZE;
    this.grid = new Array(this.rows);
    this.nextGrid = new Array(this.rows);
    // initialize grids
    for (var i = 0; i < this.rows; i++) {
      this.grid[i] = new Array(this.cols);
      this.nextGrid[i] = new Array(this.cols);
    }

    // set state
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        var isLive = Math.round(Math.random() * 20) > 10;
        if (isLive == 1) {
          this.grid[i][j] = 1;
        } else {
          this.grid[i][j] = 0;
        }
      }
    }
  }

  nextTurn() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.applyRules(i, j);
      }
    }

    // copy NextGrid to grid, and reset nextGrid
    this.copyAndResetGrid();
    this.generation += 1;
  }

  applyRules(row, col) {
    var numNeighbors = this.countNeighbors(row, col);
    if (this.grid[row][col] == 1) {
      if (numNeighbors < 2) {
        this.nextGrid[row][col] = 0;
      } else if (numNeighbors == 2 || numNeighbors == 3) {
        this.nextGrid[row][col] = 1;
      } else if (numNeighbors > 3) {
        this.nextGrid[row][col] = 0;
      }
    } else if (this.grid[row][col] == 0) {
      if (numNeighbors == 3) {
        this.nextGrid[row][col] = 1;
      }
    }
  }

  countNeighbors(row, col) {
    var count = 0;
    if (row - 1 >= 0) {
      if (this.grid[row - 1][col] == 1) count++;
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
      if (this.grid[row - 1][col - 1] == 1) count++;
    }
    if (row - 1 >= 0 && col + 1 < this.cols) {
      if (this.grid[row - 1][col + 1] == 1) count++;
    }
    if (col - 1 >= 0) {
      if (this.grid[row][col - 1] == 1) count++;
    }
    if (col + 1 < this.cols) {
      if (this.grid[row][col + 1] == 1) count++;
    }
    if (row + 1 < this.rows) {
      if (this.grid[row + 1][col] == 1) count++;
    }
    if (row + 1 < this.rows && col - 1 >= 0) {
      if (this.grid[row + 1][col - 1] == 1) count++;
    }
    if (row + 1 < this.rows && col + 1 < this.cols) {
      if (this.grid[row + 1][col + 1] == 1) count++;
    }
    return count;
  }

  copyAndResetGrid() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.grid[i][j] = this.nextGrid[i][j];
        this.nextGrid[i][j] = 0;
      }
    }
  }
}

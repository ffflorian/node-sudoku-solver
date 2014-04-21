var SudokuSolver = require("../index");

SudokuSolver.solve({
    // Problem from: http://projecteuler.net/index.php?section=problems&id=96
    problem: '. . 3 . 2 . 6 . .'
           + '9 . . 3 . 5 . . 1'
           + '. . 1 8 . 6 4 . .'
           + '. . 8 1 . 2 9 . .'
           + '7 . . . . . . . 8'
           + '. . 6 7 . 8 2 . .'
           + '. . 2 6 . 9 5 . .'
           + '8 . . 2 . 3 . . 9'
           + '. . 5 . 1 . 3 . .'
  , style: true
  , initial: true
});

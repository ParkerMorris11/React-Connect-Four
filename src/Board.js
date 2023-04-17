import React, { useState } from "react";
import Tile from "./Tile.js";

//data model of ongoing game
let game = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white"
];

//Counter used to switch between red and yellow
let i = 0;

export default function board() {
  //State used to switch between red and yellow pieces
  const [turn, setTurn] = useState("Red");
  //State used to end game
  const [gameOver, setGameOver] = useState(false);

  let colorChange = function (loc) {
    //Stops user from clicking after game is over
    if (gameOver === false) {
      //Ensures a user cant click a clicked piece
      if (game[loc] === "white") {
        //tells if a piece is below where user clicks
        if (game[loc + 7] !== "white") {
          i++;
          if (i % 2 === 0) {
            //changes color to red
            setTurn("Red");
          } else {
            //changes color to yellow
            setTurn("Yellow");
          }
          game[loc] = turn;
          //Add win condtions below this line
          //Checks below of where the user clicks to see if they won. AKA Vertical win condtion
          if (
            game[loc] === game[loc + 7] &&
            game[loc + 7] === game[loc + 14] &&
            game[loc + 14] === game[loc + 21]
          ) {
            setTimeout(alertFunc, 50);
            setGameOver(true);
          }
          //Horizontal win condtion(s) below
          else if (horizontal(loc)) {
            setTimeout(alertFunc, 50);
            setGameOver(true);
          }
          //Diagonal win condition(s) below
          else if (diagonal1(loc)) {
            setTimeout(alertFunc, 50);
            setGameOver(true);
          } else if (diagonal2(loc)) {
            setTimeout(alertFunc, 50);
            setGameOver(true);
          }
        }
      }
    }
  };
  function alertFunc() {
    alert(turn + " wins!");
  }
  let horizontal = function (index) {
    //Goes through all 6 rows to see if a horizontal win occured
    for (index = 0; index < 4; index++) {
      if (
        game[index] === game[index + 1] &&
        game[index + 1] === game[index + 2] &&
        game[index + 2] === game[index + 3] &&
        game[index] !== "white"
      ) {
        return true;
      } else if (
        game[index + 7] === game[index + 8] &&
        game[index + 8] === game[index + 9] &&
        game[index + 9] === game[index + 10] &&
        game[index + 7] !== "white"
      ) {
        return true;
      } else if (
        game[index + 14] === game[index + 15] &&
        game[index + 15] === game[index + 16] &&
        game[index + 16] === game[index + 17] &&
        game[index + 14] !== "white"
      ) {
        return true;
      } else if (
        game[index + 21] === game[index + 22] &&
        game[index + 22] === game[index + 23] &&
        game[index + 23] === game[index + 24] &&
        game[index + 21] !== "white"
      ) {
        return true;
      } else if (
        game[index + 28] === game[index + 29] &&
        game[index + 29] === game[index + 30] &&
        game[index + 30] === game[index + 31] &&
        game[index + 28] !== "white"
      ) {
        return true;
      } else if (
        game[index + 35] === game[index + 36] &&
        game[index + 36] === game[index + 37] &&
        game[index + 37] === game[index + 38] &&
        game[index + 35] !== "white"
      ) {
        return true;
      }
    }
  };

  let diagonal1 = function (index) {
    //Goes through all diagonal possibilties from left to right
    for (index = 0; index < 4; index++) {
      if (
        game[index] === game[index + 8] &&
        game[index + 8] === game[index + 16] &&
        game[index + 16] === game[index + 24] &&
        game[index] !== "white"
      ) {
        return true;
      } else if (
        game[index + 7] === game[index + 15] &&
        game[index + 15] === game[index + 23] &&
        game[index + 23] === game[index + 31] &&
        game[index + 7] !== "white"
      ) {
        return true;
      } else if (
        game[index + 14] === game[index + 22] &&
        game[index + 22] === game[index + 30] &&
        game[index + 30] === game[index + 38] &&
        game[index + 14] !== "white"
      ) {
        return true;
      }
    }
  };

  let diagonal2 = function (index) {
    //Goes through all diagonal possibilties from right to left
    for (index = 3; index < 7; index++) {
      if (
        game[index] === game[index + 6] &&
        game[index + 6] === game[index + 12] &&
        game[index + 12] === game[index + 18] &&
        game[index] !== "white"
      ) {
        return true;
      } else if (
        game[index + 7] === game[index + 13] &&
        game[index + 13] === game[index + 19] &&
        game[index + 19] === game[index + 25] &&
        game[index + 7] !== "white"
      ) {
        return true;
      } else if (
        game[index + 14] === game[index + 20] &&
        game[index + 20] === game[index + 26] &&
        game[index + 26] === game[index + 32] &&
        game[index + 14] !== "white"
      ) {
        return true;
      }
    }
  };

  let restart = function () {
    //resets all values to restart game
    setGameOver(false);
    setTurn("Red");
    i = 0;
    game = [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white"
    ];
  };

  //tile to be called 42 times
  return (
    <div>
      <div id="board">
        <div id="row1" class="row">
          <Tile location="0" color={game[0]} tileClick={() => colorChange(0)} />
          <Tile location="1" color={game[1]} tileClick={() => colorChange(1)} />
          <Tile location="2" color={game[2]} tileClick={() => colorChange(2)} />
          <Tile location="3" color={game[3]} tileClick={() => colorChange(3)} />
          <Tile location="4" color={game[4]} tileClick={() => colorChange(4)} />
          <Tile location="5" color={game[5]} tileClick={() => colorChange(5)} />
          <Tile location="6" color={game[6]} tileClick={() => colorChange(6)} />
        </div>
        <div id="row2" class="row">
          <Tile location="7" color={game[7]} tileClick={() => colorChange(7)} />
          <Tile location="8" color={game[8]} tileClick={() => colorChange(8)} />
          <Tile location="9" color={game[9]} tileClick={() => colorChange(9)} />
          <Tile
            location="10"
            color={game[10]}
            tileClick={() => colorChange(10)}
          />
          <Tile
            location="11"
            color={game[11]}
            tileClick={() => colorChange(11)}
          />
          <Tile
            location="12"
            color={game[12]}
            tileClick={() => colorChange(12)}
          />
          <Tile
            location="13"
            color={game[13]}
            tileClick={() => colorChange(13)}
          />
        </div>
        <div id="row3" class="row">
          <Tile
            location="14"
            color={game[14]}
            tileClick={() => colorChange(14)}
          />
          <Tile
            location="15"
            color={game[15]}
            tileClick={() => colorChange(15)}
          />
          <Tile
            location="16"
            color={game[16]}
            tileClick={() => colorChange(16)}
          />
          <Tile
            location="17"
            color={game[17]}
            tileClick={() => colorChange(17)}
          />
          <Tile
            location="18"
            color={game[18]}
            tileClick={() => colorChange(18)}
          />
          <Tile
            location="19"
            color={game[19]}
            tileClick={() => colorChange(19)}
          />
          <Tile
            location="20"
            color={game[20]}
            tileClick={() => colorChange(20)}
          />
        </div>
        <div id="row4" class="row">
          <Tile
            location="21"
            color={game[21]}
            tileClick={() => colorChange(21)}
          />
          <Tile
            location="22"
            color={game[22]}
            tileClick={() => colorChange(22)}
          />
          <Tile
            location="23"
            color={game[23]}
            tileClick={() => colorChange(23)}
          />
          <Tile
            location="24"
            color={game[24]}
            tileClick={() => colorChange(24)}
          />
          <Tile
            location="25"
            color={game[25]}
            tileClick={() => colorChange(25)}
          />
          <Tile
            location="26"
            color={game[26]}
            tileClick={() => colorChange(26)}
          />
          <Tile
            location="27"
            color={game[27]}
            tileClick={() => colorChange(27)}
          />
        </div>
        <div id="row5" class="row">
          <Tile
            location="28"
            color={game[28]}
            tileClick={() => colorChange(28)}
          />
          <Tile
            location="29"
            color={game[29]}
            tileClick={() => colorChange(29)}
          />
          <Tile
            location="30"
            color={game[30]}
            tileClick={() => colorChange(30)}
          />
          <Tile
            location="31"
            color={game[31]}
            tileClick={() => colorChange(31)}
          />
          <Tile
            location="32"
            color={game[32]}
            tileClick={() => colorChange(32)}
          />
          <Tile
            location="33"
            color={game[33]}
            tileClick={() => colorChange(33)}
          />
          <Tile
            location="34"
            color={game[34]}
            tileClick={() => colorChange(34)}
          />
        </div>
        <div id="row6" class="row">
          <Tile
            location="35"
            color={game[35]}
            tileClick={() => colorChange(35)}
          />
          <Tile
            location="36"
            color={game[36]}
            tileClick={() => colorChange(36)}
          />
          <Tile
            location="37"
            color={game[37]}
            tileClick={() => colorChange(37)}
          />
          <Tile
            location="38"
            color={game[38]}
            tileClick={() => colorChange(38)}
          />
          <Tile
            location="39"
            color={game[39]}
            tileClick={() => colorChange(39)}
          />
          <Tile
            location="40"
            color={game[40]}
            tileClick={() => colorChange(40)}
          />
          <Tile
            location="41"
            color={game[41]}
            tileClick={() => colorChange(41)}
          />
        </div>
      </div>
      <h1 id={turn}>{turn}'s turn</h1>
      <h1 onClick={() => restart()}>Click here to restart the game.</h1>
      <a href="https://github.com/ParkerMorris11/React-Connect-Four">My GitHub</a>
    </div>
  );
}

const fs = require("fs");

const parseInput = (input) => {
  const lines = input.split("\n");
  const width = parseInt(lines[0].split(" ")[1]);
  const height = parseInt(lines[0].split(" ")[0]);
  const fieldSize = lines[0];
  const gameField = lines.slice(1);
  return { width, height, gameField, fieldSize };
};

const checkInputData = (data) => {
  let inputFileErrors = [];
  const gameSymbols = ["p", ".", "#"];
  if (/^\d+ \d+$/.test(data.fieldSize) === false) {
    inputFileErrors.push("Not correct field size numbers");
  }
  for (let element of data.gameField) {
    if (
      data.width < 1 ||
      data.height < 1 ||
      element.length !== data.width ||
      data.gameField.length !== data.height
    ) {
      inputFileErrors.push("field was not made according to width and height");
      break
    }
  }
  for (let i = 0; i < data.gameField.length; i++) {
    for (let x = 0; x < data.gameField[i].length; x++) {
      if (gameSymbols.includes(data.gameField[i][x]) === false) {
        inputFileErrors.push("not correct symbol");
        break;
      }
    }
  }
  return inputFileErrors;
};

const writeOutput = (data) => {
  fs.writeFileSync("output.txt", data);
};


module.exports = {  writeOutput , parseInput, checkInputData};
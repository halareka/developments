import { randEatGenerate } from "./eat";
import { setHeadClass, delHeadClass } from "./headClass";

const SNAKE_BODY: string[] = [];
const ALPHABET: string = "ABCDEFGHIJ";
const TIME: number = 500;

let counterLetter: number = 0;
let letterOfMov: string = "A";

let position: number = 0;
let directionOfMov: number = 1;

let snakeLength: number = 4;
let eatPosition: string = "";
let oldPositionMov: string = "A1";

const right = (): void => {
  if (directionOfMov == 1 || directionOfMov == -1) {
    return;
  } else {
    directionOfMov = 1;
  }
};
const left = (): void => {
  if (directionOfMov == -1 || directionOfMov == 1) {
    return;
  } else {
    directionOfMov = -1;
  }
};
const up = (): void => {
  if (directionOfMov == -10 || directionOfMov == 10) {
    return;
  } else {
    directionOfMov = -10;
  }
};
const down = (): void => {
  if (directionOfMov == -10 || directionOfMov == 10) {
    return;
  } else {
    directionOfMov = 10;
  }
};

function getEat(): void {
  let eat: string = randEatGenerate(ALPHABET);
  if (SNAKE_BODY.includes(eat)) {
    getEat();
  } else {
    let eatElem: HTMLElement | null = document.getElementById(eat);
    if (eatElem) {
      eatElem.style.background = "orange";
      eatPosition = eat;
      console.log(eatPosition);
    }
    return;
  }
}
function headConditon(head: string): boolean {
  if (head == eatPosition) {
    snakeLength++;
    getEat();
  }
  return SNAKE_BODY.includes(head);
}
function sliceSnake(): void {
  if (SNAKE_BODY.length > snakeLength) {
    let lastElement = SNAKE_BODY.shift();
    if (lastElement) {
      let el = document.getElementById(lastElement);
      if (el) {
        el.style.background = "rgb(236,236,236)";
      }
    }
  }
}
function getAnotherSide(): void {
  switch (position) {
    case 0:
      position = 11;
      break;
  }
  switch (position) {
    case 11:
      position = 0;
      break;
    case -1:
      position = 11;
      break;
  }
  switch (counterLetter) {
    case -1:
      counterLetter = 10;
      break;
    case 11:
      counterLetter = -1;
      break;
  }
}
function movement(): void {
  let movHeadDir: string = "";
  let game = setInterval(() => {
    switch (directionOfMov) {
      case 10:
        counterLetter++;
        letterOfMov = ALPHABET[counterLetter];
        movHeadDir = "down";
        break;
      case -10:
        counterLetter--;
        letterOfMov = ALPHABET[counterLetter];
        movHeadDir = "top";
        break;
      case 1:
        position += directionOfMov;
        movHeadDir = "right";
        break;
      case -1:
        position += directionOfMov;
        movHeadDir = "left";
        break;
    }
    if (position == 0) {
      position = 10;
    }
    delHeadClass(oldPositionMov);
    let positionMov: string = letterOfMov + position;
    oldPositionMov = positionMov;
    setHeadClass(positionMov, movHeadDir);
    const element: HTMLElement | null = document.getElementById(positionMov);
    if (element) {
      if (headConditon(positionMov)) {
        clearInterval(game);
        alert("game-over");
        location.reload();
      }
      element.style.background = "lime";
      SNAKE_BODY.push(positionMov);
    }
    sliceSnake();
    getAnotherSide();
  }, TIME);
}
movement();
getEat();
export { right, left, down, up };

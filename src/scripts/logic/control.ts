import { right, left, up, down } from "./movement";

interface Snake {
  right: () => void;
  left: () => void;
  up: () => void;
  down: () => void;
}
const snake: Snake = {
  right: () => right(),
  left: () => left(),
  up: () => up(),
  down: () => down(),
};
document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 87: // W key
      snake.up();
      break;
    case 65: // A key
      snake.left();
      break;
    case 83: // S key
      snake.down();
      break;
    case 68: // D key
      snake.right();
      break;
    default:
      break;
  }
});

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let mobImg = new Image();
let mobImg_flip = new Image();
let movType = "idle";
let flipped = false;
let frames = 0;
let num = 50;
let rX = 0;
let lX = 0;

mobImg.src = "/images/mob1_sh.png";
mobImg.width = 24;
mobImg.height = 24;

mobImg_flip.src = "/images/mob1_sh_flip.png";
mobImg_flip.width = 24;
mobImg_flip.height = 24;

function draw() {
  ctx.drawImage(
    flipped ? mobImg : mobImg_flip,
    0,
    0,
    mobImg.width,
    mobImg.height,
    0,
    0,
    window.innerWidth / 2,
    window.innerHeight / 2
  );
}

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (frames % num == 0) {
    if (movType == "idle") {
      draw(flipped);
    } else if (movType == "walkR") {
      walkAnim("right");
    } else if (movType == "walkL") {
      walkAnim("left");
    }
  }
  ctx.imageSmoothingEnabled = false;
  requestAnimationFrame(update);
}
update();

document.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "ArrowDown":
      break;
    case "ArrowUp":
      break;
    case "ArrowLeft":
      walkAnim("right");
      break;
    case "ArrowRight":
      walkAnim("left");
      break;
    default:
      return;
  }
});

function walkAnim(dir) {
  switch (dir) {
    case "right":
      ctx.drawImage(
        flipped ? mobImg : mobImg_flip,
        0,
        0,
        mobImg.width,
        mobImg.height,
        0,
        0,
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      break;
    case "left":
      ctx.drawImage(
        flipped ? mobImg : mobImg_flip,
        0,
        0,
        mobImg.width,
        mobImg.height,
        0,
        0,
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      break;
    default:
      return;
  }
}

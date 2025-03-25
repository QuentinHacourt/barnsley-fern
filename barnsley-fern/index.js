const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#008000";
const scale = 50;
const offsetX = canvas.width / 2;
const offsetY = canvas.height;

let x = 0, y = 0;
let t = 0;
const maxIterations = 100000;
let speed = 100;

function drawFern() {
  for (let i = 0; i < speed; i++) {
    if (t >= maxIterations) return;

    const r = Math.random();
    let xn, yn;

    if (r < 0.01) {
      xn = 0.0;
      yn = 0.16 * y;
    } else if (r < 0.86) {
      xn = 0.85 * x + 0.04 * y;
      yn = -0.04 * x + 0.85 * y + 1.6;
    } else if (r < 0.93) {
      xn = 0.2 * x - 0.26 * y;
      yn = 0.23 * x + 0.22 * y + 1.6;
    } else {
      xn = -0.15 * x + 0.28 * y;
      yn = 0.26 * x + 0.24 * y + 0.44;
    }

    const px = offsetX + xn * scale;
    const py = offsetY - yn * scale;

    ctx.fillRect(px, py, 1, 1);

    x = xn;
    y = yn;
    t++;
  }

  requestAnimationFrame(drawFern);
}

document.getElementById("startButton").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = 0;
  y = 0;
  t = 0;

  drawFern();
});

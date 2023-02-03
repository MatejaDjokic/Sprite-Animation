const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const W = canvas.width = 600;
const H = canvas.height = 600;

const mob = new Image();
mob.src = '/images/logo.png';

function update() {
  ctx.clearRect(0, 0, W, H);
  ctx.fillRect(50, 50, 100, 100);
  requestAnimationFrame(update);
}


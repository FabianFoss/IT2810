const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let smokeHeight = 0
let loops = 0
let height = 0
let smoke = true

const move = () => {
  smokeHeight += 1
}

const fillBackground = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);
}

const fillSky = () => {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, 500, 350);
}

const fillGrass = () => {
    ctx.fillStyle = "#008000"
    ctx.fillRect(0, 350, 500, 150)
}

const fillWall = (inverse) => {
  ctx.fillStyle = inverse ? "beige" : "navy"
  ctx.fillRect(75, 195-height, 350, 255)
}
const fillDoor = (inverse) => {
  ctx.fillStyle = inverse ? "navy":"beige"
  ctx.fillRect(305, 300-height, 90, 150)
}

const fillPipe = (inverse) => {
  ctx.fillStyle = inverse ? "grey" : "black"
  ctx.fillRect(100, 80-height, 58, 100)
}

const fillRoof = (inverse) => {
  ctx.fillStyle = inverse ? "black" : 'grey';
  ctx.beginPath();
  ctx.moveTo(250, 120-height);
  ctx.lineTo(20,200-height);
  ctx.lineTo(470, 200-height);
  ctx.closePath();
  ctx.fill();
}

const fillSmoke = () => {
  ctx.fillStyle = "gray"
  ctx.beginPath();
  ctx.arc(130, 120-smokeHeight, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = 'gray';
  ctx.stroke();
}

const createLine = (x1, y1, x2, y2) => {
  ctx.strokeStyle = "black"
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

const createBallon = (fill, cx, cy, r) => {
  ctx.fillStyle = fill
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = fill;
  ctx.stroke();
}

const fillBallons = () => {
  ctx.fillStyle = "black"
  ctx.fillRect(249, 60-height, 2, 70)
  createBallon("blue", 250, 60-height, 20)
  createBallon("red", 235, 75-height, 20)
  createBallon("green", 265, 75-height, 20)
}

canvas.addEventListener('click', e => {
  x = e.offsetX;
  y = e.offsetY;

  if ((x > 100) && (x < 100+58) && (y > 80 && y < 180)) {
    smokeLoop();
  }

  if ((x > 75) && (x < 75+350) && (y > 195 && y < 195+255)) {
    flyLoop()
  }
})

canvas.addEventListener('mousemove', e => {
  x = e.offsetX;
  y = e.offsetY;

  let wallXmin = 75
  let wallYmin = 195-height
  let wallXmax = wallXmin + 350
  let wallYmax = wallYmin + 255

  let wall = (x > wallXmin) && (x < wallXmax) && ((y > wallYmin) && (y < wallYmax))
  if (wall) {
    inverse = true
    ctx.clearRect(0, 0, 500, 500);
    build();
  } else {
    inverse = false
    ctx.clearRect(0, 0, 500, 530);
    build();
  }
  
})

const smokeLoop = () => {
  if (smokeHeight==170){
    smokeHeight=0;
    build();
    if (loops === 10) {
      loops = 0
      return
    }
    loops += 1
  }
  smokeHeight += 1
  ctx.clearRect(0, 0, 500, 500);
  build();
  window.requestAnimationFrame(smokeLoop);
}

const flyLoop = () => {
  if (height == 500) {
    return
  }
  smoke = false
  height += 1
  ctx.clearRect(0,0,500,500)
  build();
  window.requestAnimationFrame(flyLoop)

}
let inverse = false
const build = () => {
  fillBackground();
  fillSky()
  fillGrass();
  fillWall(inverse);
  fillDoor(inverse);
  if (smoke) fillSmoke(); 
  fillBallons();
  fillPipe(inverse);
  fillRoof(inverse);
}

build();

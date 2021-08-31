const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let x = 0;
let y = 0;
let bY=0;

let fade = "#53354a"

const fillBackground = () => {
  ctx.fillStyle = "#ffe2e2";
  ctx.fillRect(0, 0, 500, 530);
}

const fillGrass = () => {
  ctx.fillStyle = "#2eb872";
  ctx.fillRect(0, 480, 500, 20);
}

const fillGrassFaded = () => {
  ctx.fillStyle = fade;
  ctx.fillRect(0, 480, 500, 20);
}

const fillHouse = () => {
  ctx.fillStyle = "#ffc0cb";
  ctx.fillRect(150, 300, 200, 200);

}

const fillHouseFaded = () => {
  ctx.fillStyle = fade;
  ctx.fillRect(150, 300, 200, 200);

}

const fillDoor = () => {
  ctx.fillStyle = "#8d6262";
  ctx.fillRect(220, 400, 60, 100);
}

const fillDoorFaded = () => {
  ctx.fillStyle = fade;
  ctx.fillRect(220, 400, 60, 100);
}


const fillPipe = () => {
  ctx.fillStyle = "#ffc0cb";
  ctx.fillRect(310, 180, 40, 80);
}

const fillPipeFaded = () => {
  ctx.fillStyle = fade;
  ctx.fillRect(310, 180, 40, 80);
}

const fillRoof = () => {
  ctx.beginPath();
  ctx.moveTo(250, 150);
  ctx.lineTo(110, 300);
  ctx.lineTo(390, 300);
  ctx.fillStyle = "#8d6262";
  ctx.fill();
  ctx.closePath();
}

const fillRoofFaded = () => {
  ctx.beginPath();
  ctx.moveTo(250, 150);
  ctx.lineTo(110, 300);
  ctx.lineTo(390, 300);
  ctx.fillStyle = fade;
  ctx.fill();
  ctx.closePath();
}

const fillBoble3 = () => {
  ctx.beginPath();
  ctx.arc(380, 40, 52, 0, Math.PI * 2, true)
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

const fillBoble3Moving = () => {
  ctx.beginPath();
  ctx.arc(380, 40-bY, 52, 0, Math.PI * 2, true)
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}


const fillBoble3Faded = () => {
  ctx.beginPath();
  ctx.arc(380, 40, 52, 0, Math.PI * 2, true)
  ctx.fillStyle = fade;
  ctx.fill();
  ctx.closePath();
}


const fillBoble2 = () => {
  ctx.beginPath();
  ctx.arc(365, 117, 35, 0, Math.PI * 2, true)
  ctx.fillStyle = "#dfd3d3";
  ctx.fill();
  ctx.closePath();
}

const fillBoble2Moving = () => {
  ctx.beginPath();
  ctx.arc(365, 117-bY, 35, 0, Math.PI * 2, true)
  ctx.fillStyle = "#dfd3d3";
  ctx.fill();
  ctx.closePath();
}





const fillBoble2Faded = () => {
  ctx.beginPath();
  ctx.arc(365, 117, 35, 0, Math.PI * 2, true)
  ctx.fillStyle = fade;
  ctx.fill();
  ctx.closePath();
}



const fillBoble1 = () => {
  ctx.beginPath();
  ctx.arc(330, 160, 20, 0, Math.PI * 2, true)
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.closePath();
}

const fillBoble1Moving = () => {
  ctx.beginPath();
  ctx.arc(330, 160-bY, 20, 0, Math.PI * 2, true)
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.closePath();
}



const fillBoble1Faded = () => {
  ctx.beginPath();
  ctx.arc(330, 160, 20, 0, Math.PI * 2, true)
  ctx.fillStyle = fade;
  ctx.fill();
  ctx.closePath();
}

const update = () => {
  bY += 1;
}

const gameLoop = () => {
  if (bY==200){
    bY=0;
    draw();
    return;
  }
  update();
  drawBobbles();
  window.requestAnimationFrame(gameLoop);
}


canvas.addEventListener('mousemove', e => {
  ctx.clearRect(0, 0, 500, 530);
  draw();
  x = e.offsetX;
  y = e.offsetY;
  //console.log(x, y)


  if (((((150 < x) && (x < 220)) || ((280 < x) && (x < 350))) && ((300 < y) && (y < 500))) || ((220 < x) && (x < 280) && (300 < y) && (y < 400))) {
    fillHouseFaded();
    fillDoor();
  } else if ((220 < x) && (x < 280) && (400 < y) && (500 > y)) {
    fillDoorFaded();
  } else if (((350 < x) || (x < 150)) && ((480 < y) && (y < 500))) {
    fillGrassFaded();
    fillHouse();
    fillDoor();
  }
    else if (((188<x) && (x<300) && (214<y) && (y<300))){
      fillRoofFaded();
    }
    else if ((311<x) && (x<350) && (180<y) && (y<220)){
      fillPipeFaded();
      fillRoof();
    }
    else if ((311<x) && (x<346) && (150<y) && (y<177)){
      fillBoble1Faded();
    }
    else if ((336<x) && (x<388) && (91<y) && (y<139)){
      fillBoble2Faded();
    }
    else if ((330<x) && (x<422) && (y<78)){
      fillBoble3Faded();
      fillBoble2();
    }
   else {
    ctx.clearRect(0, 0, 500, 530);
    draw();
  }

});
$("canvas").click(gameLoop);


const drawBobbles = () => {
  fillBackground();
  fillGrass();
  fillHouse();
  fillDoor();
  fillPipe();
  fillRoof();
  fillBoble3Moving();
  fillBoble2Moving();
  fillBoble1Moving();
}

const draw = () => {
  fillBackground();
  //fillGrass();
  fillHouse();
  fillDoor();
  fillPipe();
  fillRoof();
  fillBoble3();
  fillBoble2();
  fillBoble1();
}

draw();
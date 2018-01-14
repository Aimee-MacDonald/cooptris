const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const socket = io.connect();

context.scale(10, 10);
render();

var place = 0;

socket.on("update", gs => gameState = gs);

socket.on("join", seat => {
  for(var i = 1; i <= 5; i++){
    document.getElementById("btn" + i).disabled = true;
  }
  document.getElementById("btn" + seat).disabled = false;
  document.getElementById("btn" + seat).innerHTML = "Leave";
  place = seat;
});

socket.on("leave", () => {
  for(var i = 1; i <= 5; i++){
    document.getElementById("btn" + i).disabled = false;
    document.getElementById("btn" + i).innerHTML = "Join";
  }
  place = 0;
});

var gameState;
function render(){
  // Clear Screen
  context.fillStyle = "blue";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Render Arena
  if(gameState){
    context.fillStyle = "red";
    context.fillRect(0, 0, 1, 1);
  }

  // Render Players

  requestAnimationFrame(render);
}

function join(seat){
  if(place === 0){
    socket.emit("join", seat);
  } else {
    socket.emit("leave", "");
  }
}

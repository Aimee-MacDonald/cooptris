const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const socket = io.connect();

context.scale(10, 10);

render();

socket.emit("hh", "hh");

socket.on("bb", b => {
  console.log("Cllll");
});

function render(){
  context.fillStyle = "blue";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "red";
  context.fillRect(0, 0, 1, 1);

  requestAnimationFrame(render);
}

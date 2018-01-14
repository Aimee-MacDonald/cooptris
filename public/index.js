const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.scale(10, 10);

function render(){
  context.fillStyle = "blue";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "red";
  context.fillRect(0, 0, 1, 1);

  requestAnimationFrame(render);
}

render();

function chooseRandomColor() {
  const COLORS = ["purple", "white", "green", "black"];
  let colorIndex = 0 + Math.round(Math.random() * (COLORS.length - 1));
  let randomColor = COLORS[colorIndex];
  console.log(randomColor);
}

console.log("script loaded");
chooseRandomColor();

function paint(color) {
  console.log(color);
  const circle = document.getElementById("circle");
  circle.style = `background-color: ${color}`;
  console.log(circle);
}

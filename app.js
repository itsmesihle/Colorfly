console.log("script loaded");

function paint(color) {
  /*this function is well labeled because the name and argument tell you exactly what the function is supposed to do...when a button is clicked [see html], paint something a certain color a*/
  console.log(
    color
  ); /* this prints the color of the clicked button onto the console */
  const circle =
    document.getElementById(
      "circle"
    ); /* it picks out a certain area in the page by tag associated with it, and defines it as circle */
  circle.style = `background-color: ${color}`;
  console.log(
    circle
  ); /* LHS = styles the newly defined area of the circle. RHS = uses temporal literal to change area to the color of the button clicked */
}

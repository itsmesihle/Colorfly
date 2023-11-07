## OBJECTIVE of code

    - colorfly will color a circle with different colors when button is clicked (red, yellow, blue)
    - add a random color button too

## LEARNING OUTCOMES

1.  laying out buttons
2.  basic div styling to create a circle with border radius
3.  click handlers
4.  DOM manipulation, temperate literal

function paint(color) {
/_this function is well labeled because the name and argument tell you exactly what the function is supposed to do...when a button is clicked [see html], paint something a certain color a_/
console.log(
color
); /_ this prints the color of the clicked button onto the console _/
const circle =
document.getElementById(
"circle"
); /_ it picks out a certain area in the page by tag associated with it, and defines it as circle _/
circle.style = `background-color: ${color}`;
console.log(
circle
); /_ LHS = styles the newly defined area of the circle. RHS = uses temporal literal to change area to the color of the button clicked _/
}

// Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Input Variables
  let xA = document.getElementById("x1").value;
  let xB = document.getElementById("y2").value;
  let yA = document.getElementById("x2").value;
  let yB = dpcument.getElementById("y2").value;
  let xC = document.getElementById("x3").value;
  let yC = document.getElementById("y3").value;

  // Process
  let AB = dist(xA, xB, yA, yB);
  let AC = dist(xA, yA, xC, yC);
  let BC = dist(xB, yBin, xC, yC);
  let perimeter = AB + AC + BC;

  

  //Output
  document.getElementById("output").innerHTML = perimeter;
}

// function dist(x1, y1, x2, y2) {
//   let rise = y2 - y1;
//   let run = x2 - x1;
//   let d = Math.sqrt(run ** 2 + rise ** 2);
//   return d;
// }

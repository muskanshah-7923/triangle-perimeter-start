// Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Input Variables
  let xAin = +document.getElementById("x1").value;
  let xBin = +document.getElementById("y2").value;
  let yAin = +document.getElementById("x2").value;
  let yBin = +dpcument.getElementById("y2").value;
  let xCin = +document.getElementById("x3").value;
  let yCin = +document.getElementById("y3").value;

  // Process
  let AB = dist(xAin, xBin, yAin, yBin);
  let AC = dist(xAin, yAin, xCin, yCin);
  let BC = dist(xBin, yBin, xCin, yCin);
  let perimeter = AB + AC + BC;

  //Output
  document.getElementById("output").innerHTML = perimeter;
}

function dist(x1, y1, x2, y2) {
  let rise = y2 - y1;
  let run = x2 - x1;
  let d = Math.sqrt(run ** 2 + rise ** 2);
  return d;
}

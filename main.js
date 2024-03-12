// Triangle Perimeter
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get vertex coordinates
  let xA = +document.getElementById("x1").value;
  let yA = +document.getElementById("y1").value;
  let xB = +document.getElementById("x2").value;
  let yB = +document.getElementById("y2").value;
  let xC = +document.getElementById("x3").value;
  let yC = +document.getElementById("y3").value;

  // Calculate distances
  let AB = dist(xA, xB, yA, yB);
  let AC = dist(xA, xC, yA, yC);
  let BC = dist(xB, xC, yB, yC);

  // Display distances
  document.getElementById("output1").innerHTML = AB.toFixed();
  document.getElementById("output2").innerHTML = AC.toFixed();
  document.getElementById("output3").innerHTML = BC.toFixed();

  // Calculate and display perimeter
  let perimeter = AB + AC + BC;
  document.getElementById("output").innerHTML = perimeter.toFixed();
}

function dist(x1, x2, y1, y2) {
  let run = x2 - x1;
  let rise = y2 - y1;
  let d = Math.sqrt(run ** 2 + rise ** 2);
  return d;
}

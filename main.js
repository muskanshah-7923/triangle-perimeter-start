// // Button Click Event
// document.getElementById("btn").addEventListener("click", btnClicked);

// function btnClicked() {
//   // Get Input Variables
//   let xA = document.getElementById("x1").value;
//   let xB = document.getElementById("y2").value;
//   let yA = document.getElementById("x2").value;
//   let yB = dpcument.getElementById("y2").value;
//   let xC = document.getElementById("x3").value;
//   let yC = document.getElementById("y3").value;

//   // Process
//   let AB = dist(xA, xB, yA, yB);
//   let AC = dist(xA, yA, xC, yC);
//   let BC = dist(xB, yBin, xC, yC);
//   let perimeter = (AB + AC + BC);

//   document.getElementById("output") = perimeter;
//   document.getElementById("output1") = AB;
//   document.getElementById("output2") = AC;
//   document.getElementById("output3") = BC

//   //Output
//   document.getElementById("output").innerHTML = perimeter;

// Triangle Perimeter
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get vertex coordinates
  let xA = +(document.getElementById("x1").value);
  let yA = +(document.getElementById("y1").value);
  let xB = +(document.getElementById("x2").value);
  let yB = +(document.getElementById("y2").value);
  let xC = +(document.getElementById("x3").value);
  let yC = +(document.getElementById("y3").value);

  // Calculate distances
  let AB = dist(xA, xB, yA, yB);
  let AC = dist(xA, xC, yA, yC);
  let BC = dist(xB, xC, yB, yC);

  // Display distances8
  document.getElementById("output1").innerHTML = AB.toFixed(2);
  document.getElementById("output2").innerHTML = AC.toFixed(2);
  document.getElementById("output3").innerHTML = BC.toFixed(2);

  // Calculate and display perimeter
  let perimeter = AB + AC + BC;
  document.getElementById("output").innerHTML = perimeter.toFixed(2);
}

function dist(x1, x2, y1, y2) {
  let run = x2 - x1;
  let rise = y2 - y1;
  let d = Math.sqrt(run ** 2 + rise ** 2);
  return d;
}

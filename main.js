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
  let xA = document.getElementById("x1");
  let xB = document.getElementById("x2");
  let yA = document.getElementById("y1");
  let yB = document.getElementById("y2");
}

function dist(x1, x2, y1, y2) {
  let run = x2 - x1;
  let rise = y2 - y1;
  let d = Math.sqrt(run ** 2 + rise ** 2);
  return d;
}

var speeches = [
  churchill, ghandi, demosthenes
  ];

var churchill = {
   name: "Churchill",
   year: "1940",
   bce: false
  };
  
  var ghandi = {
   name: "Ghandi",
   year: "1942",
   bce: false
  };
  var demosthenes = {
   name: "Demosthenes",
   year: "342",
   bce: true
  };


var differencesInYear = speeches[1].year - speeches[0].year;

console.log("Ghandi's speech and Churchill's speech are " + differencesInYear + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speeches.length + " speeches on this page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + speeches[0].name + " in " + speeches[0].year + " . It is " + speeches[0].bce + " that this was B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by " + speeches[1].name + " in " + speeches[1].year + " . It is " + speeches[1].bce + " that this was B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by " + speeches[2].name + " in " + speeches[2].year + " . It is " + speeches[2].bce + " that this was B.C.E.");
});
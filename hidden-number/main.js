// Version: 1.0


let difficulty ;

document.getElementById("difficulty").addEventListener("change", function() {
  difficultyCheck();
});

document.getElementById("start").addEventListener("click", function() {
  main(difficultyValue());
});




function difficultyCheck() {
  difficulty = document.getElementById("difficulty").value;
  if (difficulty === "easy") {
    document.getElementById("diff_decription").textContent = "Easy mode: Relax and take it easy!";
  } else if (difficulty === "medium") {
    document.getElementById("diff_decription").textContent = "Medium mode: A balanced challenge.";
  } else if (difficulty === "hard") {
    document.getElementById("diff_decription").textContent = "Hard mode: Get ready for a real test!";
  }
}

function difficultyValue() {
  if (difficulty === "easy") {
    return(20);
  } else if (difficulty === "medium") {
    return(50);
  } else if (difficulty === "hard") {
    return(100);
  }
}

function main ( diff ) { 
  let chiffre = Math.floor(Math.random() * diff) + 1;
  let essai = 0;
  let limite = diff / 5 ;
  let trouve = false;
  essai = parseInt(prompt("Entrez un chiffre entre 1 et " + diff));
  while (!trouve && limite != 0 ) {
    if (essai === chiffre) {
      alert("Bravo, you have found the hidden number !");
      trouve = true;
    } else if (essai - chiffre < 10 && essai - chiffre > 0) {
      essai = parseInt(prompt("Slightly above !"));
    } else if (essai - chiffre > 10) {
      essai = parseInt(prompt("Too high !"));
    } else if (essai - chiffre < -10) {
      essai = parseInt(prompt("Too low !"));
    } else if (essai - chiffre > -10 && essai - chiffre < 0) {
      essai = parseInt(prompt("Slightly below !"));
    }
    limite--;
  }
  if (limite === 0) {
    alert("You have reached the limit of tries. The hidden number was " + chiffre);
  }
  document.getElementById("start").textContent = "Restart";
}
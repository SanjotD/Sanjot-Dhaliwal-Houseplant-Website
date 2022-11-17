// JavaScript Code



// Input


let outputMessageEl = document.getElementById("output");

document.getElementById('btn').addEventListener('click', calculateScore);

let score = 0;


       

function calculateScore() {
// Variables
        let firstQuestEl = document.getElementById("peaceQuest").value.toLowerCase();
        let secondQuestEl = +document.getElementById("aloeQuest").value;
        let thirdQuestEl = document.getElementById("lemonQuest").value.toLowerCase();
        let fourthQuestEl = +document.getElementById("houseQuest").value;
    



// Process
if (firstQuestEl === "no" || firstQuestEl === "nope"|| firstQuestEl === "n"){ 
    score++;
    document.getElementById("box1").src = "img/checkedbox.jpg";
} else {
    document.getElementById("box1").src = "img/xmarkcheckedbox.jpg";
}


if (secondQuestEl == "99%" || secondQuestEl == "99"|| secondQuestEl == " 99"|| secondQuestEl == "99 "){
    score++;
    document.getElementById("box2").src = "img/checkedbox.jpg";
} else {
    document.getElementById("box2").src = "img/xmarkcheckedbox.jpg";
 }


if (thirdQuestEl === "no" || thirdQuestEl === "nope"|| thirdQuestEl === "n"){
    score++;
    document.getElementById("box3").src = "img/checkedbox.jpg";
} else {
    document.getElementById("box3").src = "img/xmarkcheckedbox.jpg";
}


if (fourthQuestEl == "66%" || fourthQuestEl == "66"|| fourthQuestEl == " 66" || fourthQuestEl == "66"){
    score++;
    document.getElementById("box4").src = "img/checkedbox.jpg";
}else {  
    document.getElementById("box4").src = "img/xmarkcheckedbox.jpg";
}

// Output
let percentScoreEl =
 ((score) / 4) * 100;

let outOfScoreEl = (score);


if (outOfScoreEl <= 1) {
    outputMessageEl.innerHTML = ("Try Again.");
}

else if (outOfScoreEl <= 2){
    outputMessageEl.innerHTML = ("Not bad!");
}

 else if (outOfScoreEl <= 3) {
    outputMessageEl.innerHTML = ("So Close!");
}

else if (outOfScoreEl <= 4) {
    outputMessageEl.innerHTML = ("Amazing Job!");
}


document.getElementById("outOfScore").innerHTML = outOfScoreEl;
document.getElementById("percentScore").innerHTML = percentScoreEl.toFixed();

}









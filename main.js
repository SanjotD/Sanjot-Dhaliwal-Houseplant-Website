// JavaScript Code


// Input


// Variables

let outputMessageEl = document.getElementById("output");

document.getElementById('btn').addEventListener('click', calculateScore);


let firstQuestEl = 0;
let secondQuestEl = 0;
let thirdQuestEl = 0;
let fourthQuestEl = 0;



function calculateScore() {
// Process
        let firstQuestEl = document.getElementById("peaceQuest").value.toLowerCase();
        let secondQuestEl = document.getElementById("aloeQuest").value.toLowerCase();
        let thirdQuestEl = document.getElementById("lemonQuest").value.toLowerCase();
        let fourthQuestEl = document.getElementById("houseQuest").value.toLowerCase();




if (firstQuestEl === "no" || firstQuestEl === "nope"){ 
    firstQuestEl++;
    
} else if (secondQuestEl === "99%" || secondQuestEl === "99"|| secondQuestEl === " 99"|| secondQuestEl === "9 9"){
    secondQuestEl++;
    
}
else if (thirdQuestEl === "no" || secondQuestEl === "nope"){
    thirdQuestEl++;
    
}
else if (fourthQuestEl === "66%" || secondQuestEl === "66"|| secondQuestEl === " 66" || secondQuestEl === "6 6"){
    fourthQuestEl++;
    
}


let outOfScoreEl =
 (firstQuestEl + secondQuestEl + thirdQuestEl + fourthQuestEl);
 

let percentScoreEl =
 (firstQuestEl + secondQuestEl + thirdQuestEl + fourthQuestEl) / 4;


if (outOfScoreEl <= 2) {
    outputMessageEl.innerHTML = ("Not bad!");
}

 else if (outOfScoreEl <= 3) {
    outputMessageEl.innerHTML = ("So Close!");
}

else if (outOfScoreEl <= 4) {
    outputMessageEl.innerHTML = ("Good Job!");
}



//Output
document.getElementById("outOfScore").innerHTML = outOfScoreEl;
document.getElementById("percentScore").innerHTML = percentScoreEl.toFixed();

console.log(firstQuestEl)

}

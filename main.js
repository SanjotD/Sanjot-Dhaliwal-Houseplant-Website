// // JavaScript Code


// // Input


// // Variables

// let outputMessageEl = document.getElementById("output");

// document.getElementById('btn').addEventListener('click', calculateScore);






// function calculateScore() {
// // Process
//         let firstQuestEl = document.getElementById("peaceQuest").value.toLowerCase();
//         let secondQuestEl = document.getElementById("aloeQuest").value.toLowerCase();
//         let thirdQuestEl = document.getElementById("lemonQuest").value.toLowerCase();
//         let fourthQuestEl = document.getElementById("houseQuest").value.toLowerCase();

//  firstQuestEl = 0;
//  secondQuestEl = 0;
//  thirdQuestEl = 0;
//  fourthQuestEl = 0;


// if (firstQuestEl === "no" || firstQuestEl === "nope"){ 
//     firstQuestEl++;
    
// } else if (secondQuestEl === "99%" || secondQuestEl === "99"|| secondQuestEl === " 99"|| secondQuestEl === "9 9"){
//     secondQuestEl++;
    
// }
// else if (thirdQuestEl === "no" || secondQuestEl === "nope"){
//     thirdQuestEl++;
    
// }
// else if (fourthQuestEl === "66%" || secondQuestEl === "66"|| secondQuestEl === " 66" || secondQuestEl === "6 6"){
//     fourthQuestEl++;
    
// }


// let outOfScoreEl =
//  (firstQuestEl + secondQuestEl + thirdQuestEl + fourthQuestEl);
 

// let percentScoreEl =
//  (firstQuestEl + secondQuestEl + thirdQuestEl + fourthQuestEl) / 4;


// if (outOfScoreEl <= 2) {
//     outputMessageEl.innerHTML = ("Not bad!");
// }

//  else if (outOfScoreEl <= 3) {
//     outputMessageEl.innerHTML = ("So Close!");
// }

// else if (outOfScoreEl <= 4) {
//     outputMessageEl.innerHTML = ("Good Job!");
// }



// //Output
// document.getElementById("outOfScore").innerHTML = outOfScoreEl;
// document.getElementById("percentScore").innerHTML = percentScoreEl.toFixed();

// console.log(firstQuestEl)

// }


// --------------------------------------------------------ATTEMPT 2

//Input



// Variables
let outputMessageEl = document.getElementById("output");
let boxCheck1 = document.getElementById("box1");
// let boxCheck2 = document.getElementById("box2");
// let boxCheck3 = document.getElementById("box3");
// let boxCheck4 = document.getElementById("box4");

let outOfScoreEl = document.getElementById("outOfScore");
let percentScoreEl = document.getElementById("percentScore");

let question1El = document.getElementById("peaceQuest").value.toLowerCase();
let question2El = document.getElementById("aloeQuest").value.toLowerCase();
let question3El = document.getElementById("lemonQuest").value.toLowerCase();
let question4El = document.getElementById("houseQuest").value.toLowerCase();

document.getElementById("btn").addEventListener("click", testScore)

function testScore() {
// Process

if (question1El === "no" || question1El === "nope" || question1El === "n") {
boxCheck1.src = 'img/checkedbox.jpg'

}


// Output
console.log(question1El)

}

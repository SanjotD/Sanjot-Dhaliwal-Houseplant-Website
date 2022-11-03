// JavaScript Code


 // Input


 // Variables

let outputMessageEl = document.getElementById("output");

document.getElementById('btn').addEventListener('click', calculateScore);

let score = 0;



function calculateScore() {
// // Process
        let firstQuestEl = document.getElementById("peaceQuest").value.toLowerCase();
        let secondQuestEl = +document.getElementById("aloeQuest").value;
        let thirdQuestEl = document.getElementById("lemonQuest").value.toLowerCase();
        let fourthQuestEl = +document.getElementById("houseQuest").value;
    
       




if (firstQuestEl === "no" || firstQuestEl === "nope"|| firstQuestEl === "n"){ 
    score++;
    document.getElementById("box1").src = "img/checkedbox.jpg";
} else {
    document.getElementById("box1").src = "img/xmarkcheckedbox.jpg"
}


if (secondQuestEl == "99%" || secondQuestEl == "99"|| secondQuestEl == " 99"|| secondQuestEl == "99 "){
    score++;
    document.getElementById("box2").src = "img/checkedbox.jpg";
} else {
    document.getElementById("box2").src = "img/xmarkcheckedbox.jpg"
 }


if (thirdQuestEl === "no" || thirdQuestEl === "nope"|| thirdQuestEl === "n"){
    score++;
    document.getElementById("box3").src = "img/checkedbox.jpg";
} else {
    document.getElementById("box3").src = "img/xmarkcheckedbox.jpg"
}


if (fourthQuestEl == "66%" || fourthQuestEl == "66"|| fourthQuestEl == " 66" || fourthQuestEl == "66"){
    score++;
    document.getElementById("box4").src = "img/checkedbox.jpg";
}else {  
    document.getElementById("box4").src = "img/xmarkcheckedbox.jpg";
}

console.log(score);

let percentScoreEl =
 ((score) / 4) * 100;

let outOfScoreEl = (score)
 console.log(outOfScoreEl)


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








// else {
//     firstQuestEl = 0;
//     secondQuestEl = 0;
//     thirdQuestEl = 0;
//     fourthQuestEl = 0;
// }




 





//Output






// --------------------------------------------------------ATTEMPT 2

//Input



// // Variables
// let outputMessageEl = document.getElementById("output");
// let boxCheck1 = document.getElementById("box1");
// // // let boxCheck2 = document.getElementById("box2");
// // // let boxCheck3 = document.getElementById("box3");
// // let boxCheck4 = document.getElementById("box4");

// let outOfScoreEl = document.getElementById("outOfScore");
// let percentScoreEl = document.getElementById("percentScore");

// let question1El = document.getElementById("peaceQuest").value.toLowerCase();
// let question2El = document.getElementById("aloeQuest").value.toLowerCase();
// let question3El = document.getElementById("lemonQuest").value.toLowerCase();
// let question4El = document.getElementById("houseQuest").value.toLowerCase();

// document.getElementById("btn").addEventListener("click", testScore)

// function testScore() {
// // // Process

// question1El = 1;
// question2El = 1;
// question3El = 1;
// question4El= 1;


// if (question1El === "no" || question1El === "nope" || question1El === "n" || question2El === "99%" || question2El === "99" || question3El === "no" || question3El === "n" || question4El === "66%" || question4El === "66") {

// outputMessageEl.innerHTML = ('Amazing!');
// boxCheck1.src = 'img/checkedbox.jpg';

// }


// // // Output
// console.log(testScore)

// }

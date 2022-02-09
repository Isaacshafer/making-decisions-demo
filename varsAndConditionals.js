/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonsnowAttack = 50;
let jamielannisterAttack = 45

if(jonsnowAttack > jamielannisterAttack){
    console.log("jon wins");
}else if(jonsnowAttack < jamielannisterAttack){
    console.log("jamie wins");
} else {
    console.log("they are th same");
};

let jonHealth = 100
let jonDefense = 0

if(jonHealth + jonDefense <= jamielannisterAttack) {
    console.log("jon died");
}else{
    // jonHealth -= jamielannisterAttack
    console.log(`jons health is ${jonHealth}`);
};

let coinlandsHeads = false;
if(coinlandsHeads !== true) {
    console.log("jamie gets away");

}else{
    console.log("jamie gets smacked");
}

// for(let i = 0; i < 5; i++){
//     if(jonHealth > 0) {
//         jonHealth = jonHealth - jamielannisterAttack;
//         console.log(`jon has ${jonHealth} health left.`);

//     } else {
//         console.log('jon dead');
//     }
// };

while(jonHealth > 0) {
    jonHealth -= jamielannisterAttack;
    console.log(`jon has ${jonHealth} health left`)
    if(jonHealth <= 0){
        console.log('jon dead');
    };
    };

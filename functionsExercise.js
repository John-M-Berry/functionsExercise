// ONE - 1. Create a function called fozzieBear that displays the string "Wocka Wocka!" in the console/terminal when the function is run/executed. Run/execute the function.

function fozzieBear() {
    console.log(`Wocka Wocka!`);
}

fozzieBear();

console.log(`===============`);

// TWO - 2. Create a function named beaker that has a parameter named speak. Using multiple console logs in the function, have whatever is passed as an argument display 4 times in the console/terminal. Finally, run/execute the function and pass "Meep" as the argument.

function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
}
beaker(`meep`);

// THREE - 3. Create a function called werewolf that has two parameters named a and b. Inside the function create a conditional statement (A.K.A. If statement) where if the string argument "Muppet" is passed in for "a" AND the string argument "Show" is passed in for "b", then "It's time to play the music. It's time to light the lights." displays in the console/terminal when the function is run/executed.

console.log(`===============`);

function werewolf(a, b) {
    if (a === `Muppet` && b === `Show`) {
        return `It's time to play the music. It's time to light the lights.`;
    }
}
const quote = werewolf('Muppet', `Show`);

console.log(quote);

console.log(`===========^====3`);

// FOUR - 4. Create a function called kermit that RETURNS the following string value "Kermit The Frog" when it is run/executed

function kermit() {
    return `Kermit the Frog`;
}

console.log(kermit());

const frog = kermit();
console.log(frog);

console.log("========");

// FIVE - 5. Create a function called muppetShowSeasons that has a parameter named seasons. In the function create a conditional statement where if the number argument passed for seasons is 5 have the function RETURN the boolean value of true. Also, if it is not 5 have the function RETURN the boolean value of false.

function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    }
    return false;
}
let num = 5;
console.log(muppetShowSeasons(num));
console.log(muppetShowSeasons(5));
num = 4;
console.log(muppetShowSeasons(num));

console.log("========");
// SIX A - 6a. Create a const variable called muppets and set the value of it to an array with the following string values: "Kermit The Frog", "Miss Piggy", "Fozzie Bear", & "The Great Gonzo".

const muppets = [
    `Kermit The Frog`, `Miss Piggy`, `Fozzie Bear`, `The Great Gonzo`
]

console.log("========");

// SIX B - 6b. Create a function called showMuppets with a parameter called names. Using four console logs and the names parameter inside the function set it up so that when the showMuppets function is run with the muppets array passed in as an argument each Muppet name will display in the terminal/console on a separate line.

function showMuppets(names) {
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
}

showMuppets(muppets);


console.log("========");

// SEVEN - 7. Create a function expression that is a const variable called manOrMuppet which contains a console log with the string value of "Am I a man or am I a Muppet?" inside it.

const manOrMuppet = function () {
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

console.log("=========");

//   EIGHT - 8. Create an Arrow function with a name of "rainbowConnection" which RETURNS a string value of "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me" (Do this without using brackets "{}" or the return keyword)

rainbowConnection = () => (
    `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`
)
const phrase = rainbowConnection();
console.log(phrase);

console.log("=========");

// NINE - 9. QUESTION: If a let or const variable is created inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional? (Just use a comment to answer yes or no)

// No

// TEN - 10. QUESTION: If a let or const variable is created outside the scope of a function and the value of the variable is updated inside a function, then assuming the function has been run, could the updated value of the variable be accessed outside of the function (Again, just use a comment to answer yes or no)

// Yes

// ELEVEN A - 11a. Create a const variable called newMuppetMovies and set the value to an array with the following values: "The Muppets" and "Muppets Most Wanted"

const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
]

// ELEVEN B - 11b. Using the Map method on the newMuppetMovies array, create a function to pass as an argument for the Map method that changes the letters of each array item to uppercase. Also, set the returned value to a new const variable called upperMovies.

const upperMovies = newMuppetMovies.map(u => u.toUpperCase());
console.log(upperMovies);

console.log("=========");

// TWELVE A - 12a. Create a const variable called oldMuppetMovies and set the value to an array with the following values: "The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island" and "Muppets From Space"

const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
]

// TWELVE B - 12b. Using the Filter array method on the oldMuppetMovies array, create a function to pass as an argument for the Filter method that will return/create a new array with only the "The Great Muppet Caper" and "Muppet Treasure Island" items in it. Also, set the value of the new array that is returned/created to a const variable called twoMovies.

const twoMovies = oldMuppetMovies.filter(title => title === `The Great Muppet Caper` || title === `Muppet Treasure Island`);
console.log(twoMovies);

console.log("=========12");

// BONUS SECTION

// 13a. Create a const variable called charactersOne and set the value to an array with the following values: "Statler" & "Waldorf"

const charactersOne = [
    `Statler`,
    `Waldorf`
]

// 13b. Create a const variable called charactersTwo and set the value to an array with the following values: "The Swedish Chef", "Animal", and "Rowlf"

const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
]

// 13c. Create a function called randomMuppet with a parameter called characters that accepts an array of strings for an argument. Inside the function use Math.random() and console log to have the value of a random item in the array that is passed in display in the console/terminal (NOTE: You will need more than just Math.random and a console log to complete this)

function randomMuppet(characters) {
    let nbr = (Math.floor(Math.random() * (3)));
    console.log(characters[nbr],`\n`);
}

// 13d. Run/execute the randomMuppet function twice (Passing charactersOne as the argument for the first one and charactersTwo for the second)

console.log(`charactersOne`);
randomMuppet(charactersOne);

console.log(`charactersTwo`);

randomMuppet(charactersTwo);

console.log("=========^==13");

// 14. Create a function called caps with a parameter called string that accepts a string argument and RETURNS a new string value with every other letter capitalized starting with the first letter.
var newWord =``;
function caps(string) {
    
        // for (char of string){
            // for i=0 to (string.length());
            for (i = 0; i < string.length; i++){
                let r=i/2
                if (r = Math.trunc(r)){
                    console.log(r);
                }
                console.log(`${i + 1}. ${string[i]}`);
              
            }
             
            // newWord=newWord.concat(char.toUpperCase());
            // console.log(char);
          
// newWord=string;

 return newWord;
      
}

var word=`this is a string of text`


caps(word)
console.log(newWord);
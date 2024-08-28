// Array of monsters
const monsters = ["Goblin", "Orc", "Troll", "Dragon", "Vampire"];

// Function to get random damage
function getRandomDamage() {
    return Math.floor(Math.random() * 20) + 1;
}

// Function to get random power-up with 10% chance
function getRandomPowerUp() {
    return Math.random() < 0.1; // 10% chance for a power-up
}


/*
// Function expression for attack using if-else
const attack = () => {
    if (getRandomPowerUp()) {
        return Math.floor(Math.random() * 50) + 50;
    } else {
        return getRandomDamage();
    }
};



*/

/*
Random Power-Up Check:

    Inside the function, the first line of code checks if a random power-up occurs 
    by calling the getRandomPowerUp() function:
        
        if (getRandomPowerUp()) {


    getRandomPowerUp() returns true with a 10% chance (as defined in the earlier code).
     This is done by generating a random number between 0 and 1, and if it's less than 0.2, 
     it returns true.



    Conditional Logic:

    If the getRandomPowerUp() function returns true (indicating that a power-up has occurred), 
    the code inside the if block executes:

        return Math.floor(Math.random() * 50) + 50;

    This line generates a random number between 50 and 99. Here's how:

    Math.random() * 50 generates a random number between 0 and 49.99.

    Math.floor() rounds that number down to the nearest integer (between 0 and 49).
    
    + 50 shifts this range up, making it a random number between 50 and 99.


    Understanding Math.random() * 50:

    Math.random() generates a random floating-point number in the range [0, 1).
     This means it can be any value from 0 (inclusive) up to, but not including, 1 (exclusive).

    Math.random() * 50 multiplies this value by 50. This gives you a floating-point number in the range [0, 50). 
    The maximum possible value from this expression would be very close to 50 but not exactly 50, hence something like 49.999....

    This higher damage represents the power-up.


    The function then returns either the power-up damage (between 50 and 99) or the regular damage (between 1 and 20),
     depending on the result of the if-else check.


     When the getRandomPowerUp() function returns true, the attack function generates 
     a random number between 50 and 99, which represents an "attack boost" or "extra damage."


*/


// Function expression for attack
const attack = () => {
    return getRandomPowerUp() ? Math.floor(Math.random() * 50) + 50 : getRandomDamage();
};

// Named function for the fight
function fight(monster1, monster2) {
    let health1 = 100;
    let health2 = 100;

    console.log(`${monster1} and ${monster2} are fighting!`);

    while (health1 > 0 && health2 > 0) {
        let damageToMonster2 = attack();
        health2 -= damageToMonster2;
        console.log(`${monster1} attacks ${monster2} for ${damageToMonster2} damage. ${monster2} has ${Math.max(health2, 0)} health left.`);

        if (health2 <= 0) break;

        let damageToMonster1 = attack();
        health1 -= damageToMonster1;
        console.log(`${monster2} attacks ${monster1} for ${damageToMonster1} damage. ${monster1} has ${Math.max(health1, 0)} health left.`);

        console.log("...");
    }

    const winner = health1 > 0 ? monster1 : monster2;
    console.log(`${winner} wins the fight!`);
}

// Get user input for monster selection
const monster1 = prompt(`Choose the first monster to fight: ${monsters.join(', ')}`);
const monster2 = prompt(`Choose the second monster to fight: ${monsters.join(', ')}`);

// Validate the input
if (monsters.includes(monster1) && monsters.includes(monster2)) {
    fight(monster1, monster2);
} else {
    console.log("Invalid monster selection. Please try again.");
}

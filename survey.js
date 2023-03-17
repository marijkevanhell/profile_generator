const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", (answerName) => {
  rl.question("What's an activity you like doing? ", (answerActivity) => {
    rl.question("What do you listen to while doing that? ", (answerMusic) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answerFavMeal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answerFavFood) => {
          rl.question("Which sport is your absolute favourite? ", (answerFavSport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answerSupPow) => {
              console.log(`Hello, my name is ${answerName}. I like to listen to ${answerMusic} while ${answerActivity}. My favourite meal is ${answerFavMeal} because I like to eat ${answerFavFood}. My favourite sport is ${answerFavSport} and my superpower is ${answerSupPow}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

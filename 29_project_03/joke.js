// Project 3: In this we're Create a Random Joke Generator App in Node.js

import chalk from "chalk";
import https from "https";
const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const joke = JSON.parse(data);
    //   console.log(data);
      console.log(`Here is a random ${joke.type} joke`);
      console.log(chalk.red(`${joke.setup}`));
      console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    });
    res.on('error',(err)=>{
        console.log(`Error fetching the joke, ${err.message}`);
    })
  });
};

getJoke();

// Project 2: In this first ask file name and then add content this project based on fs module.
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter your file name:", (filename) => {
    rl.question("Enter the content for your file:", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`File ${filename}.txt create successfully`);
        }
        rl.close();
      });
    });
  });
};

fileCreation();

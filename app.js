// console.log("Hello World");
// console.log(document);

// var message = "Hello Node!"
// var sum = 5 + 3;
// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// console.log(process);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };
  
//   printProfileData(profileDataArgs);

const inquirer = require("inquirer");

// const fs = require('fs');
// const generatePage = require("./src/page-template.js"); 

// const pageHTML = generatePage(name, github);
    
//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

//const [name, github] = profileDataArgs;



// console.log(name, github);
// console.log(generatePage(name, github));

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see  the output');
// });

inquirer
    .prompt([
        {
            type : "input",
            name : "name",
            message : "What is your name?"


        }
    ])
    .then (answers => console.log(answers));
const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require("./src/page-template.js"); 


    const promptUser = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: 'What is your name?(Required)',
                validate : nameInput => {
                    if (nameInput) 
                    {
                        return true;
                    } 
                    else 
                    {
                        console.log("Please enter your name.");
                        return false;
                    }
                }
            },
            {
                type : "input",
                name : "github",
                message : "Enter your GitHub username?(required)",
                validate : githubUserInput => {
                    if (githubUserInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log("Enter your GitHub username.");
                        return false;
                    }
                }
            },
            {
                type : "confirm",
                name : "confirmAbout",
                message : "Would you like to enter some information about yourself for an 'About' section?",
                default : true
            },
            {
               type : "input",
               name : "about",
               message : "Provide some information about yourself.",
               when : ({confirmAbout}) => {
                   if (confirmAbout)
                   {
                       return true;
                   }
                   else
                   {
                       return false;
                   }
               }
            }
            
        ]);
    };

    

    const promptProject = portfolioData => {
               
        console.log(`
        =================
        Add a New Project
        =================
        `);
         //if there is no projects array property, then create one
         if (!portfolioData.projects){
            portfolioData.projects = []; //array to store the user project data
        }   
        return inquirer.prompt([
            {
                type : "input",
                name : "name",
                message : "What is the name of your project?(required)",
                validate : projectNameInput =>{
                    if (projectNameInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log("Enter project name.");
                        return false;
                    }
                }
            },
            {
                type : "input",
                name : "description",
                message : "Provide a description of the project (Required).",
                validate : projectDescInput => {
                    if (projectDescInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log("Enter project description.");
                        return false;
                    }
                }
            },
            {
                type : "checkbox",
                name : "languages",
                message : "What did you build this project with? (Check all that apply)",
                choices : ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
            },
            {
                type : "input", 
                name : "link",
                message : "Enter the GitHub link to your project. (Required)",
                validate : gitHubLinkInput => {
                    if (gitHubLinkInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log("Enter GitHub link to your project.");
                        return false;
                    }
                }
            },
            {
                type : "confirm",
                name : "feature",
                message : "Would you like to feature this project?",
                default : false
            },
            {
                type : "confirm",
                name : "confirmAddProject",
                message : "Would you like to enter another project?",
                default : false
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);//place the projectData from inquirer into the new projects array we just created.
            if (projectData.confirmAddProject)
            {
                return promptProject(portfolioData);
            }
            else
            {
                return portfolioData;
            }
        })
    };

    

    promptUser()
    .then (promptProject)
    .then(portfolioData => {
        const pageHTML = generatePage(portfolioData);

        fs.writeFile('./index.html', pageHTML, err => {
          if (err) throw new Error(err);

          console.log('Page created! Check out index.html in this directory to see it!');
        });
    });
   

      // this will create three variables based on data in templateData
    //const { projects, about, ...header } = templateData;

    


//==============================================================================================================//

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

// inquirer
//     .prompt([
//         {
//             type : "input",
//             name : "name",
//             message : "What is your name?"


//         }
//     ])
//     .then (answers => console.log(answers));

    // promptUser()
    // .then(answers => console.log(answers))
    // .then(promptProject)
    // .then(projectAnswers => console.log(projectAnswers));

     //mock data
    // const mockData = {
    //     name: 'Lernantino',
    //     github: 'lernantino',
    //     confirmAbout: true,
    //     about:
    //       'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    //     projects: [
    //       {
    //         name: 'Run Buddy',
    //         description:
    //           'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
    //         languages: ['HTML', 'CSS'],
    //         link: 'https://github.com/lernantino/run-buddy',
    //         feature: true,
    //         confirmAddProject: true
    //       },
    //       {
    //         name: 'Taskinator',
    //         description:
    //           'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
    //         languages: ['JavaScript', 'HTML', 'CSS'],
    //         link: 'https://github.com/lernantino/taskinator',
    //         feature: true,
    //         confirmAddProject: true
    //       },
    //       {
    //         name: 'Taskmaster Pro',
    //         description:
    //           'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
    //         languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
    //         link: 'https://github.com/lernantino/taskmaster-pro',
    //         feature: false,
    //         confirmAddProject: true
    //       },
    //       {
    //         name: 'Robot Gladiators',
    //         description:
    //           'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
    //         languages: ['JavaScript'],
    //         link: 'https://github.com/lernantino/robot-gladiators',
    //         feature: false,
    //         confirmAddProject: false
    //       }
    //     ]
    //   };

      //const pageHTML = generatePage(templateData);
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { writeFile } = require('fs').promises;

const loadReadme = ({title, description, installation, usage, license, contributions, tests, username, email}) =>  
    `# ${title}
   ## Table of Contents
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Licenses](#licenses)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
   * [Credits](#credits)
   ## Description
   ${description}
   ## Installation
   ${installation}
   ## Usage
   ${usage}
   ## Licenses
   ${license}
   ## Contributing
   ${contributions}
   ## Tests
   ${tests}
   ## Questions
   Contact Me @  
   GitHub: https://github.com/${username}  
   Email: ${email}
 `;

 inquirer.prompt([
    {
        name: 'title',
        message: 'What is the Title of your project?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Tell us a little about your project?',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Describe the installation instructions for your project?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'How will this project be used?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What kind of license are you using?',
        type: 'list-input',
        choices:['MIT', 'IBM', 'MOZILLA', 'PERL', 'APACHE', 'BOOST', 'NO LICENSE']
    },
    {
        name: 'contributions',
        message: 'What is your name and who else contributed to your project?',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'How would someone test this code?',
        type: 'input'
    },
    {
        name: 'username',
        message: 'What is your Github username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What is your email address?',
        type: 'input'
    }
])

.then((answers) => {
        const readme = loadReadme(answers);
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('Successfully created Readme.md!')
            );
        });
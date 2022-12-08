const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { writeFile } = require('fs').promises;
let licenseBadge

function makeBadge(license) {
    if (license == 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (license == 'GPLv2') {
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    }
    if (license == 'GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if (license == 'APACHE') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if (license == 'BSD 3') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    }
    if (license == 'BSD 2') {
        return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    }
    if (license == 'LGPLv3') {
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    }
    if (license == 'AGPLv3') {
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    }
}

const loadReadme = ({title, description, installation, usage, license, contributions, tests, username, email}) =>  
    `# ${title}
   ## Table of Contents 
   ${makeBadge(license)}
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
   This project is covered with the ${license} license. If you would like more information please click the licensing badge in table of contents.
   ## Contributions
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
        type: 'list',
        choices:['MIT', 'GPLv2', 'GPLv3', 'BSD 3', 'BSD 2', 'LGPLv3', 'NO LICENSE']
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
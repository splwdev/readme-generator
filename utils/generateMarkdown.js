// function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let licenseBadge = "";

  switch (license) {
    case "Apache License 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software License 1.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case 'BSD 2-clause "Simplified" license':
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case 'BSD 3-clause "New" or "Revised" license':
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU General Public License v2.0":
      licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU Lesser General Public License v3":
      licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "MIT License":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unlicense":
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      licenseBadge = "NONE";
      break;
  };
  return `## ${data.title}

  <a name="readme-top"></a>

  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  <br>
  ${licenseBadge}
  <br />
  <br />
  <!-- DESCRIPTION -->
  ## Description
  <br />
  
  <div align="center">
    <h3 align="center">${data.title}</h3>
    <p align="center">${data.description}</p>
    <p align="center">
      <br />
      <img src="./assets/images/${data.screenshot}.png" alt="screenshot of ${data.title}" />
      <br />
      <a href="https://github.com/${data.username}/${data.repo}"><strong>Explore the docs »</strong></a>
      <br />
      <br />
      <a href="https://github.com/${data.username}/${data.repo}">View Demo</a>&nbsp;&nbsp;
      <a href="https://github.com/${data.username}/${data.repo}/issues">Report Bug</a>&nbsp;&nbsp;
      <a href="https://github.com/${data.username}/${data.repo}/issues">Request Feature</a>
    </p>
  </div>

  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li><a href="#description">Description</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#testing">Test Instructions</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>
    </ol>
  </details>
  



  <!-- INSTALLATION -->
  ### Installation
  <p>To get the ball rolling, you'll need to run the following command:</p>
  <ul>
    <li>${data.installation}</li>
  </ul>
    

  

  <!-- USAGE -->
  ## Usage
  <p>To use this application, please run the following command:</p>
  <ul>
    <li>${data.usage}</li>
  </ul>




  <!-- CONTRIBUTION GUIDELINES -->
  ## Contributing
  <p>Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.</p>
  <p>If you wish to contribute to this project, please feel free to: </p>
  <ul>
    <li>${data.contribution}</li>
  </ul>
  <p>You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!</p>
  




  <!-- TESTING INSTRUCTIONS -->
  ## Testing
  <p>If you wish to test this application before running it, you can do so with the following command:</p>
  <ul>
    <li>${data.test}</li>
  </ul>


  

  <!-- LICENSE -->
  ## License
  <p>Distributed under the ${data.license} License.</p>

 



  <!-- QUESTIONS -->
  ## Questions
  <p>If you have any questions, please contact me at ${data.email}</p>
  <br>
  <p>You can also review the rest of my repository <a href="https://github.com/${data.username}">here</a></p>

 

  [contributors-shield]: https://img.shields.io/github/contributors/${data.username}/${data.repo}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${data.username}/${data.repo}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${data.username}/${data.repo}.svg?style=for-the-badge
  [forks-url]: https://github.com/${data.username}/${data.repo}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${data.username}/${data.repo}.svg?style=for-the-badge
  [stars-url]: https://github.com/${data.username}/${data.repo}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${data.username}/${data.repo}.svg?style=for-the-badge
  [issues-url]: https://github.com/${data.username}/${data.repo}/issues
  [product-screenshot]: ./assets/images/${data.screenshot} 
 
`;
}

module.exports = generateMarkdown;

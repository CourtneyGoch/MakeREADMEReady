//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let endURL;
  if(license == "None"){
    return "";
  }else{
    switch(license){
      case "MIT License": endURL = "MIT-yellow.svg"; break;
      case "Apache License 2.0": endURL = "Apache_2.0-red.svg"; break;
      case "GNU GPLv3": endURL = "GPLv3-green.svg"; break;
      case "ISC License": endURL = "ISC-blue.svg"; break;
    }
    return "![License:" + license + "](https://img.shields.io/badge/License-"+ endURL + ")"
  }
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseURL = "https://choosealicense.com/licenses/"
  if(license == "None"){
    return "";
  }else{
    switch(license){
      case "MIT License": return licenseURL + "mit/";
      case "Apache License 2.0": return licenseURL + "apache-2.0/";
      case "GNU GPLv3": return licenseURL + "licenses/gpl-3.0/";
      case "ISC License": return licenseURL + "isc/";
    }
  
  }
}

//function to generate link for Contributor Code of Conduct
//returns N/A if user selects "No"
function renderContributorConduct(option){
  if(option == "Yes"){
    return "[Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)"
  }else{
    return "N/A";
  }
}

function renderContributorBadge(option){
  if(option == "Yes"){
    return "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)"
  }else{
    return "";
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} ${renderContributorBadge(data.contributors)}

  ## Description
  
  ${data.description1}
  
  ${data.description2}
  
  ${data.description3}
  
  ${data.description4}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  This project is covered by the following license: 
  [${data.license}](${renderLicenseLink(data.license)})
  
  ## Contributing
  
  Here are the guidelines for how to contribute:
  ${renderContributorConduct(data.contributors)}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions about this project, here's how to contact me:
  
  Github: https://github.com/${data.github}
  Email: ${data.email}
  `
}

module.exports = generateMarkdown;

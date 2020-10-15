// function to write README file
function generateMarkdown(response) {
  return`

# ${response.Title}
[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)
# Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributors](#contributors)
-[Test](#test)
-[Questions](#questions)
# Description
-${response.Description}
# Installation
-${response.Installation}
# Usage
-${response.Usage}
# License
-${response.License}
# Contributors
-${response.Contributors}
# Test
-${response.Test}
# Questions
-${response.Questions}
  `;
}

module.exports = generateMarkdown;

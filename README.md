# PrimeFaces.org Basic Automation

This repository contains a basic automation framework using Playwright and Cucumber for testing PrimeFaces framework based applications.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project demonstrates how to automate testing of PrimeFaces.org using Playwright and Cucumber. It includes basic test scenarios to ensure the functionality of the web components.

## Installation
To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/yourusername/primefaces-automation.git
cd primefaces-automation
npm install
```

## Usage
To run the tests, use the following command:

```bash
npm test
```

## Project Structure
The project structure is as follows:

```
primefaces-automation/
├── features/
│   └── example.feature
├── steps/
│   └── example.steps.js
├── tests/
│   └── example.test.js
├── package.json
└── README.md
```

- `features/`: Contains Cucumber feature files.
- `steps/`: Contains step definitions for the Cucumber tests.
- `tests/`: Contains Playwright test scripts.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

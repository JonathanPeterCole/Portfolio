# Portfolio
A very work in progress personal portfolio.

## Note on HTTP-Server
To test the implementation of React Router, I'm using http-server. The latest versions of http-server have an issue on Windows, so I'm using an older version. This older version contains security vulnerabilities, so it should only be used for development.

[GitHub http-server Issue #525](https://github.com/indexzero/http-server/issues/525)

## Quick Start

### Prerequisites

To build this application, you'll need Node.JS:

[Download Node.JS](https://nodejs.org/en/)

### Install and Run

Clone the repo:  
```
git clone git@github.com:JonathanPeterCole/Portfolio.git
```

Install with NPM:  
```
npm install
```

Build the applcation:  
```
npm run build
```

Run the applcation:  
```
npm run start
```

View the application in your browser at [http://localhost:8080/](http://localhost:8080/)

## Commands

The following NPM scripts are included in the project. For the commands that build the project, you can specify the environment with `:prod` or `:dev`.  

* **Start**  
  Runs a static HTTP server to test the project.  
  `npm run start`  

* **Build**  
  Runs webpack to build the project.  
  `npm run build`  

* **Watch**  
  Runs webpack to build the project and watch for changes.  
  `npm run watch`  

* **Publish**  
  Automatically builds and deploys to GitHub Pages.  
  `npm run publish`  
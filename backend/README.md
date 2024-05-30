# Backend Server

This is the backend server for our application. It is built with Node.js and Express, and it runs on port `3001`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

First, clone the repository to your local machine:

```sh
git clone https://github.com/lelenguyasameria/Motile-Tishere-Application.git
```
Navigate to the backend directory:
```bash
cd Motile-Tishere-Application/backend
```

Install the dependencies:
```bash
npm install
```

### Running the server
To start the server, run:
```bash
nodemon index.js
```
 or
```bash
node index.js
```

To run the server on port 3001, you would typically specify the port in your `index.js` file in the backend directory:

```javascript
const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```
If you're using the dotenv package, you can also specify the port in your .env file:

```bash
PORT=3001
```
And then in your `index.js` file:

```javascript
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

This will start the server on the port specified in the `.env` file, or port `3000` if no port is specified

### Built With
- Node.js
- Express

### Authors
- Addy Mutuiri
- Lelenguya Sameria
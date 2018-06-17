# MERN-start

This boilerplate is meant to get you started quickly on a MongoDB, Express, React JS, Node JS application.

### Requirements
Install MongoDB
Install NodeJS

### Guide
Clone the repository
```
$ git clone https://github.com/abel30567/MERN-start.git
```
Install backend
```
$ cd MERN-start
$ npm install
```
Run backend
```
$ mongod
$ node server.js
```

Install front-end
```
$ cd client
$ npm install
```

Run frontend
```
$ npm start
```

### Frontend-Backend connection
Since the backend is connected via proxy server to port 3001 you can do AJAX calls to it using axios or fetch to a created end point. An example can be seen in the App.js file as it connects to the endpoint http://localhost:3001/test.
If your backend server isn't connected the front-end will tell you.

### Deployment
To deploy the app once it has been made, replace your endpoints with your domain name and then run
```
$ npm run build
```
on the front-end to compile your app.

Uncomment the section mentioned in the server.js file to serve the front-end after running 'npm run build' and be sure to place your port to Port 80 for HTTP




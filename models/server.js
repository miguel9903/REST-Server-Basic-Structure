const express = require('express');
const cors = require('cors');

class RestServer {

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userRoutes = '/api/users/';

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    routes() {
        // User routes
        this.app.use(this.userRoutes, require('../routes/user'));
    }

    listen() {        
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${ this.port }`);
        });
    }

    middlewares() {
        //  CORS
        this.app.use(cors());

        // Serialize to JSON format
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('public'));
    }

}

module.exports = RestServer;
const controller = {

    getUsers: (req, res) => {
        // Ej: http://localhost:8080/api/users?query=hola&nombre=mundo&apiKey=dhdhd&limit=10
        const queryParams = req.query;
        const { query, apiKey, page = 1, limit } = req.query;
        res.json({
            message: 'GET All Users',
            queryParams: queryParams,
            query,
            apiKey,
            page,
            limit
        });
    },

    getUser: (req, res) => {
        res.json({
            message: 'GET Single User'
        });
    },

    createUser: (req, res) => {
        /* Ej:
          Body: {
                    "nombre": "Juan",
                    "edad": 28
                }
        */
        const { nombre, edad } = req.bod
        res.json({
            message: 'CREATE User',
            nombre,
            edad
        });
    },

    updateUser: (req, res) => {
        // Ej:  http://localhost:8080/api/users/10
        const id = req.params.id;
        res.json({
            message: 'UPDATE User',
            id
        });
    },

    updateInfoUser: (req, res) => {
        res.json({
            message: 'UPDATE Info User'
        });
    },

    deleteUser: (req, res) => {
        res.json({
            message: 'DELETE User'
        });
    }

};

module.exports = controller;
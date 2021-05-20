const controller = {

    getUsers: (req, res) => {
        // Ej: http://localhost:8080/api/users?query=hola&nombre=mundo&apiKey=dhdhd&limit=10
        const queryParams = req.query;
        const { query, apiKey, page = 1, limit } = req.query;
        res.json({
            message: 'Get All Users',
            queryParams: queryParams,
            query,
            apiKey,
            page,
            limit
        });
    },

    getUser: (req, res) => {
        const { id } = req.params;
        res.json({
            message: 'Get User With ID ' + id,
            id
        });
    },

    createUser: (req, res) => {
        /* Ej:
          Body: {
                    "nombre": "Juan",
                    "edad": 28
                }
        */
        const { nombre, edad } = req.body;
        res.json({
            message: 'Create User',
            nombre,
            edad
        });
    },

    updateUser: (req, res) => {
        // Ej:  http://localhost:8080/api/users/10
        const { id } = req.params;
        res.json({
            message: 'Update User With ID ' + id,
            id
        });
    },

    updateInfoUser: (req, res) => {
        res.json({
            message: 'Update Info User'
        });
    },

    deleteUser: (req, res) => {
        const { id } = req.params;
        res.json({
            message: 'Delete User With ID ' + id
        });
    }

};

module.exports = controller;
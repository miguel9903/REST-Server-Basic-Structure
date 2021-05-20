const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/', userController.updateInfoUser);

module.exports = router;
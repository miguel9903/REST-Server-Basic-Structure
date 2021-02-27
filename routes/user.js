const { Router } = require('express');
const router = Router();
const userController = require('../controllers/user');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/', userController.deleteUser);
router.patch('/', userController.updateInfoUser);

module.exports = router;
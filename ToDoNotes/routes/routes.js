const express = require('express');
const userController = require('../controller/notesController');
const app = express();
const router = express.Router();

router.get('/getNote',userController.getNote);
router.post('/createNote',userController.createNote);
router.patch('/updateNote',userController.updateNote);
router.delete('/deleteNote',userController.deleteNote);

module.exports = router;

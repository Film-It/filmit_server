var express = require('express');
var commentRouter = express.Router();
var commentController = require('../controllers/commentController');


// λκΈ μμ±
commentRouter.post('/:userId/comment', commentController.comment);

module.exports = commentRouter;
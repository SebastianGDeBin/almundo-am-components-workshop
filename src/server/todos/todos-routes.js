const Router = require('co-router');
const router = Router();
const todos = require('./todos-controller');

router.get('/', todos.getTodos);
router.post('/', todos.addTodo);
router.put('/', todos.onComplete);
router.delete('/', todos.onDelete);

module.exports = router;

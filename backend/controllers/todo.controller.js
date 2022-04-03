import Todo from '../models/todo.model.js'

const addTodo = async (req, res) => {
    const title = req.body.title;
    try {
        const newTodo = new Todo({
            title,
            status: false,

        });

        //save Todo to the database
        await newTodo
            .save()
            .then(async (createdTodo) => {
                res.json(createdTodo);
            })
            .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const getTodoList = async (req, res) => {
    try {
        const todoList = await Todo.find();
        res.json(todoList);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
};
const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
};
const updateTodoStatus = async (req, res) => { 
    try {
        const todo = await Todo.findById(req.params.id);
        if (todo != null) {
          await Todo.findByIdAndUpdate(req.params.id,{status:req.body.status}).then((updatedTodo) => {
            const tempTodo = {_id:updatedTodo._id,title:updatedTodo.title,status:req.body.status}
            res.json(tempTodo);
        });
        }
      } catch (err) {
        //Something wrong with the server
        return res.status(500).send("Server Error");
      }
};
const deleteTodo = async (req, res) => { 
    try {
        Todo.findByIdAndDelete(req.params.id)
          .then(() => {
            res.json("Todo Deleted");
          })
          .catch((err) => res.status(400).json("Error: " + err));
      } catch (err) {
        res.status(500).send("Server Error");
      }
};

export { addTodo, getTodoList, getTodoById, updateTodoStatus, deleteTodo };
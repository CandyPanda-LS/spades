import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,

    },
    createdDate: {
        type: Date,
    },
});


const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;


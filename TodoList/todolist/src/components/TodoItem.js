import React from 'react';
import  { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted} from "../store/todoSlice";
import '../App.css';

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <li className="todo__item">
            <input type="checkbox"
                   checked={completed}
                   onChange={() => dispatch(toggleTodoCompleted({ id }))}
            />
            <span>{text}</span>
            <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
        </li>
    );
};

export default TodoItem;
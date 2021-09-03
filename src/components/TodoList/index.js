import React from 'react';
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

import './styles.css';

const TodoList = ({todos, onToggle, onRemove}) => (

    <ul clasName="todo-list">
        {todos.map((todo) => (
            <li key={todo.id.toString()} >
              <span
              className={["todo", todo.checked ? "checked" : ""].join(" ")}
              onClick={() => onToggle && onToggle(todo)}
              onKeyPress={() => onToggle && onToggle(todo)}
              role="button"
              tabIndex={0}
              >
                {todo.title}</span>
              <button
              className="remove"
              type="button"
              onClick={() => onRemove && onRemove(todo)}
              >
                <MdDelete size={30} />
              </button>
            </li>
          ))}
      </ul>

);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired,
  ),
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;

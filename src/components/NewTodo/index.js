import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "./styles.css";

const NewTodo = ({ onNewTodo }) => {

  const ENTER_KEY = 13;
  const ESCAPE_kEY = 27;

const [value, setValue] = useState('');


const submit = () => {
 if(onNewTodo)
{  onNewTodo(value);
  erase();}
}

const erase = () => {
  setValue('');
  console.log('erase')
}

const onChange = (event) => {
  setValue(event.target.value);
}
const onKeyDown = (event) => {
  if (event.which === ENTER_KEY) {
    submit();
  } else if (event.which === ESCAPE_kEY) {
    erase();
  }
}

  return (
    <input
    placeholder="O que precisa ser feito?" className="new-todo"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    />
  )
}

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo;

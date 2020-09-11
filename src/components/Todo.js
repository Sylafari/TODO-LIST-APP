import React from 'react'
import PropTypes from 'prop-types'
import {delTodo} from '../actions/index.js'
import {connect} from 'react-redux'

const Todo = ({ onClick, completed, text, delTodo, id }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick = {() => delTodo(id)}>DELETE</button>
  </li>
)
const mapDispatchToProps = dispatch => ({
  delTodo: id => dispatch(delTodo(id))
});


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect (null, mapDispatchToProps) (Todo)

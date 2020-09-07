import React from 'react'
import { connect } from 'react-redux'
import { remTodo } from '../actions'

const RemTodo = ({ dispatch }) => {
    let input
  
    return (
      <div>
        <form onSubmit={f => {
          f.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(remTodo(input.value))
          input.value = ''
        }}>
          <input ref={node => input = node} />
          <button type="submit">
            Rem Todo
          </button>
        </form>
      </div>
    )
  }
  
  export default connect()(RemTodo)
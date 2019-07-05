import React from 'react'
import {connect} from 'react-redux'
import {addTodo, changeValue} from '../actions/todo'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state) => ({
    value: state.todo.value,
    placeholder: '请输入待办事项'
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (value) => dispatch(addTodo(value)),
    changeValue: (value) => dispatch(changeValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)

import React from 'react'
import {connect} from 'react-redux'
import {changeChecked, doDelete} from '../actions/todo'
import Todo from '../components/Todo'

const mapStateToProps = (state) => {
    return {
        listArray: state.todo.listArray
    }
}

const mapDispatchToProps = dispatch => ({
    handleChange: (index) => dispatch(changeChecked(index)),
    handleDelete: (index) => dispatch(doDelete(index))
})


export default connect(mapStateToProps, mapDispatchToProps)(Todo)
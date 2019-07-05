import React from 'react'
import {connect} from 'dva'
import {Button} from 'antd'
import List from '../components/List'
import AddTodo from '../components/AddTodo'
import cssname from '../components/Todolist.css'

const Products = ({listArray, value, handleChange, handleDelete, handleAdd, changeValue, handleSave}) => {
    const placeholder = '请输入待办事项'
    return (
        <div className={cssname.container}>
            <AddTodo
                value={value}
                placeholder={placeholder}
                onPressEnter={handleAdd}
                onChange={changeValue}
            ></AddTodo>
            <span className={cssname.title}>未完成事项</span>
            <List
                listArray={listArray}
                checked={false}
                onChange={handleChange}
                onClick={handleDelete}>
            </List>
            <span className={cssname.title}>已完成事项</span>
            <List
                listArray={listArray}
                checked={true}
                onChange={handleChange}
                onClick={handleDelete}>
            </List>
            <Button
                size={'small'}
                onClick={() => handleSave(listArray)}
            >
                保存
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    listArray: state.todoList.listArray,
    value: state.todoList.value
})


const mapDispatchToProps = (dispatch) => ({
    handleChange: (index) => dispatch({type: 'todoList/changeChecked', index}),
    handleDelete: (index) => dispatch({type: 'todoList/doDelete', index}),
    handleAdd: (text) => dispatch({type: 'todoList/doAdd', text}),
    changeValue: (value) => dispatch({type: 'todoList/changeValue', value}),
    handleSave: (listArray) => {
        dispatch({type: 'todoList/saveData', listArray})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)

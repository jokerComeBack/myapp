import {Input} from 'antd'
import React from 'react'
import './Todolist.css'


export default ({value, placeholder, addTodo, changeValue}) => {
    return (
        <Input
            className={'search'}
            placeholder={placeholder}
            value={value}
            onPressEnter={(e) => addTodo(e.target.value)}
            onChange={(e) => changeValue(e.target.value)}/>
    )
}

import React from "react";
import List from "./List";
import './Todolist.css'

const Todo = ({listArray, handleChange, handleDelete}) => {
    return (
        <div className={'container'}>
            <span className={'title'}>未完成列表</span>
            <List
                listArr={listArray}
                checked={false}
                onChange={handleChange}
                onClick={handleDelete}>
            </List>

            <span className={'title'}>已完成列表</span>
            <List
                listArr={listArray}
                checked={true}
                onChange={handleChange}
                onClick={handleDelete}>
            </List>
        </div>

    )
}

export default Todo
import {Input} from 'antd'
import React from 'react'
import './Todolist.css'


export default (props) => {
    return (
        <Input
            className={'search'}
            placeholder={props.placeholder}
            value={props.value}
            onPressEnter={(e) => props.onPressEnter(e.target.value)}
            onChange={(e) => props.onChange(e.target.value)}/>
    )
}

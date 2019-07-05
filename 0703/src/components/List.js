import React from 'react';
import {Button, Checkbox} from 'antd';
import cssname from './Todolist.css'

export default (props) => {
    return (
        <ul>
            {props.listArray.map((item, index) => {
                if (item.checked === props.checked) {
                    return (
                        <li key={index} className={props.checked === true ? cssname.grayli : ''}>
                            <Checkbox
                                checked={item.checked}
                                onChange={() => props.onChange(index)}>
                            </Checkbox>
                            <span>{item.text}</span>
                            {props.checked === false
                                ? <Button className={cssname.button} onClick={() => props.onClick(index)}
                                          size="small">删除</Button>
                                : null
                            }
                        </li>
                    )
                } else {
                    return null
                }
            })}
        </ul>
    )
}

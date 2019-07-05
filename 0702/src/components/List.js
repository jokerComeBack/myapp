import React from 'react';
import {Button, Checkbox} from 'antd';
import './Todolist.css';

export default (props) => {
    return (
        <ul>
            {props.listArr.map((item, index) => {
                if (item.checked === props.checked) {
                    return (
                        <li key={index} className={props.checked === true ? 'grayli' : ''}>
                            <Checkbox
                                checked={item.checked}
                                onChange={() => props.onChange(index)}>
                            </Checkbox>
                            <span>{item.text}</span>
                            {props.checked === false
                                ? <Button className={'button'} onClick={() => props.onClick(index)}
                                          size="small">删除</Button>
                                : null
                            }
                        </li>
                    )
                }
            })}
        </ul>
    )
}

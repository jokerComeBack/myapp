import { Button, Checkbox } from 'antd';
import React from 'react';

//被pages/products引用
export default (props)=>{
  console.log(props);
  return(
    <ul>
      {props.listArr.map((item, index)=>{
      if(item.checked===props.checked){
        return (
          <li key={index} className={props.checked===true? props.cssname.grayli:''}>
            <Checkbox
              checked={item.checked}
              onChange={()=>props.onChange(index)}>
            </Checkbox>
            <span>{item.text}</span>
            {props.checked=== false
              ? <Button className={props.cssname.button} onClick={()=>props.onClick(index)} size="small">删除</Button>
              : null
            }
          </li>
        )
      }
    })}
    </ul>
  )
}

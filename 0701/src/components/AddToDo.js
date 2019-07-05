import React from 'react'
import {Input} from 'antd'
export default (props)=>{
  return(
    <Input
      className={props.cssname.search}
      value={props.value}
      placeholder={props.placeholder}
      onPressEnter={(e)=>props.onPressEnter(e)}
      onChange={(e)=>props.onChange(e)}
    />
    )
}

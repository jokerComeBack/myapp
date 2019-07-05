import React from 'react';
import AddToDo from '../components/AddToDo'
import Todo from '../components/Todo'
import cssname from "./products.css";

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listArr: [],
      value: ''
    }
  }

  handlePressEnter(e) {
    const text = e.trim()
    if (text === '') return
    this.setState(
      {
        listArr: [{text, checked: false}, ...this.state.listArr],
        value: ''
      }
    )
  }

  handleValueChange(e) {
    this.setState({
      value: e
    })
  }

  handleCheckedChange(index) {
    let listArr = [...this.state.listArr]
    listArr[index].checked = !listArr[index].checked
    listArr.push(listArr[index])
    listArr.splice(index, 1)
    this.setState({
      listArr
    })
  }

  handleDelete(deleteIndex) {
    const listArr = this.state.listArr.filter((item, index) => {
      return index !== deleteIndex
    })
    this.setState({
      listArr
    })
  }

  render() {
    return (
      <div className={cssname.container}>
        <AddToDo
          cssname={cssname}
          value={this.state.value}
          placeholder={'请输入待办事项'}
          onPressEnter={(e) => this.handlePressEnter(e.target.value)}
          onChange={(e) => this.handleValueChange(e.target.value)}
        />
        <section>
          <span className={cssname.title}>未完成列表</span>
          <Todo
            cssname={cssname}
            listArr={this.state.listArr}
            checked={false}
            onChange={this.handleCheckedChange.bind(this)}
            onClick={this.handleDelete.bind(this)}>
          </Todo>
        </section>
        <section>
          <span className={cssname.title}>已完成列表</span>
          <Todo
            cssname={cssname}
            listArr={this.state.listArr}
            checked={true}
            onChange={this.handleCheckedChange.bind(this)}
            onClick={this.handleDelete.bind(this)}>
          </Todo>
        </section>

      </div>
    );
  }
}


export default Products;







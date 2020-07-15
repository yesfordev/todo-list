import React, { Component } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 1
  state = {
    information: [
      {
        id: 0,
        deadline: '7/20',
        todo: '마감',
      }
    ],
    keyword: '',
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id),
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      // information: information.map(info => info.id === id ? { ...info, ...data } : info),
      information: information.map(info => info.id === id ? { id, ...data } : info),
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  render() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let todayDate = year + '-' + month + '-' + date;

    const { information, keyword } = this.state;

    const filteredList = information.filter(info => info.todo.indexOf(keyword) !== -1);

    return (
      <div>
        <p>오늘 날짜: {todayDate}</p>
        <Form onCreate={this.handleCreate} />
        <p>
          <input
            value={keyword}
            placeholder="할 일을 검색하세요"
            onChange={this.handleChange}
          />
        </p>
        <hr />
        <TodoItemList item={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}


export default App;

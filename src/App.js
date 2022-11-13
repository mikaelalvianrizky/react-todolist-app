import React from 'react';

import Item from './components/TodoItem.js';
import Form from './components/Form.js';
import Header from './components/Header.js';
import EditModal from './components/EditModal.js';
import ConfirmationModal from './components/ConfirmationModal.js';

import '../style/App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Baca buku'
      },
      {
        id: 2,
        title: 'Ngedate'
      },
    ],
    isEdit: false,
    wantDelete: false,
    editData: {
      id: "",
      title: ""
    },
    deleteData: {
      id: ""
    }
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  openEditModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data
      }
    })
  }

  openConfirmationModal = (id) => {
    this.setState({
      wantDelete: true,
      deleteData: {
        id: id
      }
    })
  }

  closeModal = () => {
    this.setState({
      isEdit: false,
      wantDelete: false
    })
  }
  
  addItem = data => {
    const arr = this.state.todos;
    const id = arr[arr.length-1].id;
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    });
  }
  
  updateItem = () => {
    const { id, title } = this.state.editData;
    
    const listTask = this.state.todos;
    for (const item of listTask) {
      if (item.id === id) {
        item.title = title;
        
        this.setState({
          isEdit: false,
          editData: {
            id: "",
            title: ""
          }
        })
        
      }
    }
  }

  deleteItem = () => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== this.state.deleteData.id),
      wantDelete: false
    })
  }
  
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header />
        {todos.map(item => 
          <Item
            key={item.id}
            item={item}
            del={this.openConfirmationModal}
            open={this.openEditModal}
          />
        )}
        
        <Form add={this.addItem} />
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          data={this.state.editData}
          change={this.setTitle}
          save={this.updateItem}
        />
        <ConfirmationModal
          wantDelete={this.state.wantDelete}
          close={this.closeModal}
          hapus={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;

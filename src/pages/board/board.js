import React, { Component } from 'react';
import StatusBar from '../../components/status-bar/status-bar';
import ProgressBar from '../../components/progress-bar/progress-bar';
import './board.css';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      taskList: [{
        id: 1,
        name: 'Create UI',
        isDone: false,
        isEdit: false
      },
      {
        id: 2,
        name: 'Adjust Style',
        isDone: false,
        isEdit: false
      },
      {
        id: 3,
        name: 'Plan',
        isDone: true,
        isEdit: false
      } 
    ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  get taskList() {
    return this.state.taskList;
  }

  get toDoTask() {
    return this.state.taskList.filter((task) => !task.isDone);
  }

  get doneTask() {
    return this.state.taskList.filter((task) => task.isDone);
  }  

  handleChange(state) {
    if(state.deleteId) {
      this.deleteTask(state.deleteId)
      return;
    }
    this.updateTask(state.task);
  }

  deleteTask(deleteId) {
    const index = this.taskList.findIndex((task) => task.id === deleteId);
    this.taskList.splice(index, 1); 

    this.setState({ 
      taskList: this.taskList
    });
  }

  updateTask(updateTask) {
    const index = this.taskList.findIndex((task) => task.id === updateTask.id);
    this.taskList[index] = updateTask;

    this.setState({ 
      taskList: this.taskList
    });
  }

  createTask() {
    let totalTask = this.taskList.length;

    this.taskList.push({
      id: totalTask + 1,
      name: '',
      isDone: false,
      isEdit: true
    });
    
    this.setState({ 
      taskList: this.taskList
    });    
  }

  render() {
    return (
      <div id="board" className="container-fluid">
        <div className="row">
        <div className="col-sm-12">
            To Do List Board
          </div>
          <div className="col-sm-12">
            <ProgressBar 
              totalTask={this.taskList.length}
              totalDoneTask={this.doneTask.length}
            />
          </div>
          <div className="col-sm-12">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <button type="button" className="btn btn-primary" onClick={this.createTask}>Add new Task</button>
                </div>
              </div>
              <div className="row">
                <StatusBar 
                  title="To Do"
                  grid="6"
                  taskList={this.toDoTask}
                  handleCounter={this.handleChange}
                />
                <StatusBar 
                  title="Done"
                  grid="6"
                  taskList={this.doneTask}
                  handleCounter={this.handleChange}
                />
              </div>              
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

export default Board;

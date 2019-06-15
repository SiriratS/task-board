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
      },
      {
        id: 4,
        name: '',
        isDone: false,
        isEdit: true
      }    
    ]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(state) {
    this._updateTask(state.task);

    this.setState({ 
      taskList: this.taskList
    });
  }

  _updateTask(updateTask) {
    const index = this.taskList.findIndex((task) => task.id === updateTask.id);
    this.taskList[index] = updateTask;
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

  render() {
    return (
      <div id="board" className="container-fluid">
        <div className="row">
        <div className="col-sm-12">
            Board
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

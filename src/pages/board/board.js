import React, { Component } from 'react';
import StatusBar from '../../components/status-bar/status-bar';
import ProgressBar from '../../components/progress-bar/progress-bar';
import './board.css';

class Board extends Component {
  constructor() {
    super();
    this.taskList = [{
      name: 'Create UI',
      isDone: false
    },
    {
      name: 'Adjust Style',
      isDone: false
    },
    {
      name: 'Plan',
      isDone: true
    }];
  }

  get toDoTask() {
    return this.taskList.filter((task) => !task.isDone);
  }

  get doneTask() {
    return this.taskList.filter((task) => task.isDone);
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
                />
                <StatusBar 
                  title="Done"
                  grid="6"
                  taskList={this.doneTask}
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

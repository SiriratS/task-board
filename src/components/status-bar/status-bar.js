import React, { Component } from 'react';
import TaskItem from '../task-item/task-item';
import './status-bar.css';

class StatusBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  updateTaskListCount() {
    this.props.handleCounter(this.state);
	}  

  handleChange(state) {
    if(state.deleteId) {
      this.setState({ deleteId: state.deleteId }, this.updateTaskListCount);
      return;
    }

    this.setState({ task: state.task }, this.updateTaskListCount);
  }

  get displayTaskItem() {
    return this.props.taskList
        .sort((asc, desc) => desc.id - asc.id)
        .map((task, i) => {
          return <TaskItem key={i} task={task} handleCounter={this.handleChange} />
        });
  }

  render() {
    return (
      <div className={`status-bar col-sm-${ this.props.grid }`} >
        <div className="alert status-bar-title">
          { this.props.title }
        </div>
        { this.displayTaskItem }     
      </div>
    );
  }
}

export default StatusBar;

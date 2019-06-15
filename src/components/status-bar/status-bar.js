import React, { Component } from 'react';
import TaskItem from '../task-item/task-item';
import './status-bar.css';

class StatusBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.grid = props.grid;
    this.title = props.title;

    this.handleChange = this.handleChange.bind(this);
  }

  updateTaskListCount() {
    this.props.handleCounter(this.state);
	}  

  handleChange(state) {
    this.setState({ task: state.task }, this.updateTaskListCount);
  }

  get displayTaskItem() {
    return this.props.taskList.map((task, i) => {
      return <TaskItem key={i} task={task} handleCounter={this.handleChange} />
    });
  }

  render() {
    return (
      <div className={`col-sm-${ this.grid }`} >
        <div className="alert alert-secondary">
          { this.title }
        </div>
        { this.displayTaskItem }     
      </div>
    );
  }
}

export default StatusBar;

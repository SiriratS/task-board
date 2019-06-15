import React, { Component } from 'react';
import './task-item.css';

class TaskItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: props.task
    }

    this.handleChange = this.handleChange.bind(this);
  }

  get task() {
    return this.props.task;
  }

	updateTaskCount() {
		this.props.handleCounter(this.state);
	}  

	handleChange() {
    this.task.isDone = !this.task.isDone;
		this.setState({ task: this.task }, this.updateTaskCount);
	}

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.task.name}</h5>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={this.task.isDone} onChange={this.handleChange}></input>
            <label className="form-check-label">
              Done
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskItem;

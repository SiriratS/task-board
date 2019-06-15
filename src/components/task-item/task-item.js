import React, { Component } from 'react';
import './task-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TaskItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: props.task
    }

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.input = React.createRef();
  }

  get task() {
    return this.props.task;
  }

	updateTaskCount() {
		this.props.handleCounter(this.state);
	}  

	handleStatusChange() {
    this.task.isDone = !this.task.isDone;
    this.task.isEdit = false;
		this.setState({ task: this.task }, this.updateTaskCount);
  }
  
	handleModeChange() {
    this.task.isEdit = !this.task.isEdit;

    if(!this.task.isEdit) {
      this.task.name = this.input.current.value;
    }

		this.setState({ task: this.task }, this.updateTaskCount);
  }  

  render() {
    return (
      <div className="card">
        <div className="card-body">
          {this.task.name}
          <div className="input-group flex-nowrap">
            <input type="text" className="form-control card-title" 
              ref={this.input}
              readOnly={!this.task.isEdit}  
              defaultValue={this.props.task.name}
              value={this.props.task.name}
            >
            </input>
            <div className="input-group-prepend" onClick={this.handleModeChange}>
              <span className="input-group-text">
                <FontAwesomeIcon icon={ this.task.isEdit ? "save" : "edit" } />
              </span>
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" 
              type="checkbox" 
              checked={this.task.isDone} 
              onChange={this.handleStatusChange}></input>
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

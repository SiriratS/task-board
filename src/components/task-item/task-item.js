import React, { Component } from 'react';
import './task-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TaskItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: props.task
    }

    this.toggleStatus = this.toggleStatus.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.input = React.createRef();
  }

  get task() {
    return this.props.task;
  }

	updateTaskCount() {
		this.props.handleCounter(this.state);
	}  

	toggleStatus() {
    this.task.isDone = !this.task.isDone;
    this.task.isEdit = false;
    
		this.setState({ task: this.task }, this.updateTaskCount);
  }
  
	toggleEditMode() {
    this.task.isEdit = !this.task.isEdit;

    if(!this.task.isEdit) {
      this.task.name = this.input.current.value;
    }

		this.setState({ task: this.task }, this.updateTaskCount);
  }  

  onDelete() {
    const isConfirm = window.confirm('Are you sure you wish to delete this item?');
    
    if(isConfirm) {
      this.setState({ deleteId: this.task.id }, this.updateTaskCount);  
    }
  }

  get cardName() {
    if (this.task.isEdit) {
      return (
        <input type="text" className="form-control task-name"  
          ref={this.input} 
          readOnly={!this.task.isEdit} 
          defaultValue={this.task.name}>         
        </input>
      );
    }
    return <label className="form-control task-name">{this.task.name}</label>;
  }

  render() {
    return (
      <div className="task card">
        <button 
          className="btn btn-delete"
          onClick={this.onDelete}
        >
            <FontAwesomeIcon icon="times" />
        </button>
        <div className="card-body task-body">
          <div className="input-group flex-nowrap">
            { this.cardName }
            <div className="input-group-prepend" onClick={this.toggleEditMode}>
              <span className="input-group-text">
                <FontAwesomeIcon icon={ this.task.isEdit ? "save" : "edit" } />
              </span>
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" 
              type="checkbox" 
              checked={this.task.isDone} 
              onChange={this.toggleStatus}></input>
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

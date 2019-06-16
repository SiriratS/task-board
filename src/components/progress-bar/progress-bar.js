import React, { Component } from 'react';
import './progress-bar.css';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    
    this.props = props;
  }

  get percent() {
    return Math.round((this.props.totalDoneTask / this.props.totalTask) * 100);
  }

  render() {
    return (
      <div className="progress-bar-container">
        <p className="title">In Progress {this.percent}%</p>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" 
            style={{ width: this.percent + '%' }}>                
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

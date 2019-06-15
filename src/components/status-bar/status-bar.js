import React, { Component } from 'react';
import './status-bar.css';

class StatusBar extends Component {
  constructor(props) {
    super(props);

    this.grid = props.grid;
    this.title = props.title;
  }

  render() {
    return (
      <div className={`alert alert-secondary col-sm-${ this.grid }`} role="alert">
        { this.title }
      </div>
    );
  }
}

export default StatusBar;

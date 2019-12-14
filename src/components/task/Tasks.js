import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPlus } from '@fortawesome/free-solid-svg-icons';

import './task.scss';

class MyTasks extends Component {

  renderList = () => {
    return this.props.tasks && this.props.tasks.map( item => {
      console.log(JSON.stringify(item));
      return (
        <li key={item.task} className="list-group-item">
          <div className="list-item d-flex">
            <div className="flex-grow-1">
              <p className="item-name"> { item.task } </p>
              <span> 
                Priority: { item.priority } 
              </span>
            </div>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="mytasks">
      <div className="mytasks__title">
        <h1 className="text-dark">
          <FontAwesomeIcon icon={faTasks} />
          My Tasks
        </h1>
        <Link
          className="btn btn-success btn-sm rounded-lg"
          to="../tasks/new">
          <FontAwesomeIcon icon={faPlus} />
          New Task
        </Link>
      </div>
      <div>
        {/* <div className="message p-4">
          No tasks. Add a new tasks.
        </div> */}
        <ul className="list-group list-group-flush">
          { this.renderList() }
        </ul>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(MyTasks);
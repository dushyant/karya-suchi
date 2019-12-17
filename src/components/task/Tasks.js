import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPlus } from '@fortawesome/free-solid-svg-icons';

import './task.scss';
import TaskItem from './TaskItem';

class Tasks extends Component {

  renderTaskList = () => {
    const { tasks } = this.props;
    return(
      <ul className="list-group list-group-flush">
        {
          tasks.map(item => <TaskItem key={item.id} task={item} />)
        }
      </ul>
    )
  }

  renderNoItem = () => {
    return (
      <div className="message p-4">
        No tasks. Add a new tasks.
      </div>
    )
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
        {
          this.props.tasks && this.props.tasks.length > 0 ? 
          this.renderTaskList() : this.renderNoItem()
        }
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

export default connect(mapStateToProps)(Tasks);
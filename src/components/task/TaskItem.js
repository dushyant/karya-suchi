import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Third-party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

import { removeTask, updateTask } from '../../store/actions/taskAction';

import './task.scss';

class TaskItem extends Component {

  state = {
    isShowDelete: false
  }

  toggleShowDelete = () => {
    this.setState({
      isShowDelete: !this.state.isShowDelete
    })
  }

  toggleCompleted = () => {
    const { id, task, priority, createdAt, completed,  } = this.props.task;
    const updates = {
      task,
      priority,
      createdAt,
      completed: !completed
    }
    this.props.updateTask(id, updates)
  }

  renderDeleteSection = () => {
    const { task } = this.props;
    const { isShowDelete } = this.state;
    
    if (isShowDelete) {
      return (
        <div 
          className="d-flex align-items-start item-delete">
          <p> Delete item?</p>
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => this.props.removeTask(task)}>
            Yes
          </button>
          <button
            className="btn btn-light btn-sm"
            type="button"
            onClick={this.toggleShowDelete}>
            No
          </button>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      );
    }
  }
  
  render() {
    const { id, task, priority, completed } = this.props.task;
    return (
      <li className="list-group-item">
        <div className="list-item d-flex">
          <div className="flex-grow-1">
            <p className={"item-name" + (completed ? " completed" : "")}> { task } </p>
            <span> 
              Priority: { priority } 
            </span>
          </div>

          {this.renderDeleteSection()}
          
          <div className="flex-shrink-1">
            <button
              className="btn btn-light btn-sm"
              type="button"
              onClick={this.toggleCompleted}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              className="btn btn-danger btn-sm"
              type="button"
              onClick={this.toggleShowDelete}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <Link
              className="btn btn-success btn-sm rounded-lg"
              to={`../tasks/${id}`}>
              <FontAwesomeIcon icon={faPen} />
            </Link>
          </div>
        </div>
      </li>
    );
  }
}
export default connect(null, { removeTask, updateTask })(TaskItem);
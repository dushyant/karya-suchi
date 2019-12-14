import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Third-party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

//Actions
import { addTask } from '../../store/actions/taskAction';

import './task.scss'

class TaskForm extends Component {

  state = {
    task: '',
    priority: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.props.history.push('/tasks');
  }

  handleChange = (e) => {   
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {

    return (
      <div className="mytask">
        <div className="mytask__title">
          <h1>
            <span>
            <FontAwesomeIcon icon={faTasks} />
              Create task
            </span>
          </h1>
        </div>
        <div className="mytask-form">
          <form onSubmit={this.onFormSubmit}>
            <div className="mytask-form__fields">
              <div className="form-group">
                <label htmlFor="inputTaskName">Task name</label>
                <input
                  type="text"
                  name="task"
                  className="form-control"
                  placeholder="e.g. Buy Milk"
                  id="inputTaskName"
                  onChange={this.handleChange} />
                {/* <div className="alert alert-danger mt-1" role="alert">
                  Task name is required
                </div> */}
              </div>
              <div className="form-group">
                <label htmlFor="inputTaskPriority">Priority</label>
                <select 
                  className="form-control"
                  name="priority"
                  id="inputTaskPriority"
                  onChange={this.handleChange}>
                  <option>Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="py-2 d-flex">
                <div className="flex-grow-1">
                  <button
                    type="submit"
                    className="btn btn-primary mr-2">
                    Create task
                  </button>
                  {/* <button
                    type="button"
                    className="btn btn-primary mr-2">
                    Save
                  </button> */}
                  <Link 
                    className="btn btn-light"
                    to="../tasks">
                    Cancel
                  </Link>
                </div>
                </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    
  }
}
 
export default connect(null, mapDispatchToProps)(TaskForm);
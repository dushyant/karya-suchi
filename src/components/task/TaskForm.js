import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Third-party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import uuidv4 from 'uuid/v4';

//Actions
import { addTask, updateTask } from '../../store/actions/taskAction';

import './task.scss'

class TaskForm extends Component {

  constructor(props) {
    super(props);


    const { task, priority, createdAt, completed } = props.task;

    this.state = {
      task: task || '',
      priority: priority || '',
      createdAt: createdAt || moment().valueOf(),
      completed: completed || false,
      newtask: task ? false : true
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { task, priority, completed, newtask } = this.state;
    const { id } = this.props.task;
    const taskObj = {
      task, priority, completed,
      createdAt: moment().valueOf()
    }
    newtask ? this.props.addTask(taskObj) : this.props.updateTask(id, taskObj)
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
                  value={this.state.task}
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
                  value={this.state.priority}
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
                    {this.state.newtask ? 'Create task' : 'Save' }
                  </button>
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

const mapStateToProps = (state, props) => {
  const existingTask = state.tasks.find((task) => task.id === props.match.params.id);
  return {
    task: existingTask || {}
  }
};
 
export default connect(mapStateToProps, { addTask, updateTask })(TaskForm);
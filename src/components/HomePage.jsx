import React, { Component } from "react";
import EmployeeList from "./employeeList";

export default class HomePage extends Component {
  state = {
    name: "",
    gender: "",
    age: "",
    designation: "",
    department: "",
    joiningDate: "",
    employees: [],
  };

  componentDidMount = () => {
    let employees = JSON.parse(localStorage.getItem("employees"));
    if (employees !== null) {
      this.setState({
        employees: employees,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      gender,
      age,
      designation,
      department,
      joiningDate,
    } = this.state;
    let employees = JSON.parse(localStorage.getItem("employees"));
    if (employees === null) employees = [];
    employees.push({
      name: name,
      gender: gender,
      age: age,
      designation: designation,
      department: department,
      joiningDate: joiningDate,
      available: false,
    });
    this.setState({
      employees: employees,
    });
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  render() {
    const {
      name,
      gender,
      age,
      designation,
      department,
      joiningDate,
      employees,
    } = this.state;
    return (
      <div>
        {/* <!-- Add Employee Modal --> */}
        <div
          className="modal fade"
          id="addEmployeeModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="addEmployeeModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header pt-3 pb-2">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Add Employee
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-row ">
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Gender
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        name="gender"
                        value={gender}
                        onChange={this.handleChange}
                      >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Age
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="age"
                        value={age}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="designation"
                        value={designation}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Department
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="department"
                        value={department}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Joining Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder=""
                        name="joiningDate"
                        value={joiningDate}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={this.handleSubmit}
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- modal --> */}
        <EmployeeList employees={employees} />
      </div>
    );
  }
}

import React, { Component } from "react";
import EmployeeList from "./employeeList";
import Noty from "noty";

export default class HomePage extends Component {
  state = {
    name: "",
    gender: "",
    age: "",
    designation: "",
    department: "",
    joiningDate: "",
    available: false,
    buttonId: -1,
    employees: [],
  };

  componentDidMount = async () => {
    let employees = await JSON.parse(localStorage.getItem("employees"));
    if (employees !== null) {
      let sortedEmployees = [];
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].available) {
          sortedEmployees.unshift(employees[i]);
        } else {
          sortedEmployees.push(employees[i]);
        }
      }

      this.setState({
        employees: sortedEmployees,
      });

      localStorage.setItem("employees", JSON.stringify(sortedEmployees));
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      gender,
      age,
      designation,
      department,
      joiningDate,
      available,
      buttonId,
    } = this.state;
    let employees = await JSON.parse(localStorage.getItem("employees"));

    if (buttonId == -1) {
      if (employees === null) employees = [];
      employees.push({
        name,
        gender,
        age,
        designation,
        department,
        joiningDate,
        available,
      });
      new Noty({
        text: "Employee Added Successfully!",
        theme: "bootstrap-v4",
        type: "success",
        closeWith: ["button", "click"],
        timeout: 1500,
      }).show();
    } else {
      employees[buttonId].name = name;
      employees[buttonId].gender = gender;
      employees[buttonId].age = age;
      employees[buttonId].designation = designation;
      employees[buttonId].department = department;
      employees[buttonId].joiningDate = joiningDate;
      new Noty({
        text: "Employee Updated Successfully!",
        theme: "bootstrap-v4",
        type: "success",
        closeWith: ["button", "click"],
        timeout: 1500,
      }).show();
    }

    this.setState({
      name: "",
      gender: "",
      age: "",
      designation: "",
      department: "",
      joiningDate: "",
      available: false,
      employees: employees,
    });

    localStorage.setItem("employees", JSON.stringify(employees));
  };

  handleAvailableChange = (e) => {
    let index = e.target.id;
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees[index].available = !employees[index].available;
    this.setState({
      employees: employees,
    });

    localStorage.setItem("employees", JSON.stringify(employees));
  };

  handleDelete = (e) => {
    let index = e.target.id;
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees.splice(index, 1);
    this.setState({
      employees: employees,
    });

    new Noty({
      text: "Employee Deleted!",
      theme: "bootstrap-v4",
      type: "error",
      closeWith: ["button", "click"],
      timeout: 1500,
    }).show();
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  handleUpdate = async (e) => {
    let index = e.target.id;

    if (index != -1) {
      let employees = await JSON.parse(localStorage.getItem("employees"));
      this.setState({
        name: employees[index].name,
        gender: employees[index].gender,
        age: employees[index].age,
        designation: employees[index].designation,
        department: employees[index].department,
        joiningDate: employees[index].joiningDate,
        available: employees[index].available,
      });
    }

    this.setState({
      buttonId: index,
    });
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
          tabIndex="-1"
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
                      <label htmlFor="" className="mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        required={true}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Gender
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        name="gender"
                        value={gender}
                        onChange={this.handleChange}
                        required={true}
                      >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Age
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="age"
                        value={age}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="designation"
                        value={designation}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Department
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                        name="department"
                        value={department}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Joining Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder=""
                        name="joiningDate"
                        value={joiningDate}
                        onChange={this.handleChange}
                        required
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
                  disabled={name && department ? false : true}
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- modal --> */}
        <EmployeeList
          employees={employees}
          handleAvailableChange={this.handleAvailableChange}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

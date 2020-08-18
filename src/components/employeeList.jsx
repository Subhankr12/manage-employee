import React from "react";

export default (props) => {
  const { employees } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="question-dashboard">
            <div className="card mt-4 mb-3 mb-md-4">
              <div className="card-body p-3">
                <h5 className="text-secondary mb-2">
                  Available:{" "}
                  <span className="font-weight-bold ml-1 text-dark">
                    {employees.length}
                  </span>
                </h5>
                <h5 className="text-secondary">
                  Total:{" "}
                  <span className="font-weight-bold ml-1 text-dark">
                    {employees.length}
                  </span>
                </h5>
                ​
                <button
                  className="btn btn-primary mt-4"
                  data-toggle="modal"
                  data-target="#addEmployeeModal"
                >
                  <i className="fa fa-plus"></i>&nbsp; Add Employee
                </button>
              </div>
            </div>
            ​
            <div className="table-responsive mt-3 mt-md-4 mb-2">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Available</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => {
                    return (
                      <tr>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              name={`customCheck${index}`}
                              id={`customCheck${index}`}
                              checked={employee.available}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`customCheck${index}`}
                            ></label>
                          </div>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-sm"
                            data-toggle="modal"
                            data-target="#addEmployeeModal"
                          >
                            <i className="fa fa-edit"></i>&nbsp; Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                          >
                            <i className="fa fa-trash"></i>&nbsp; Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- row --> */}
    </div>
  );
};

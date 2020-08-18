import React from "react";

export default () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="question-dashboard">
            <div className="card mt-4 mb-3 mb-md-4">
              <div className="card-body p-3">
                <h5 className="text-secondary mb-2">
                  Available:{" "}
                  <span className="font-weight-bold ml-1 text-dark">08</span>
                </h5>
                <h5 className="text-secondary">
                  Total:{" "}
                  <span className="font-weight-bold ml-1 text-dark">50</span>
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
                  <tr>
                    <td>John Doe</td>
                    <td>Testing</td>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                          checked="checked"
                        />
                        <label
                          className="custom-control-label"
                          for="customCheck1"
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
                  <tr>
                    <td>Peter Doe</td>
                    <td>Deployment</td>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck2"
                        />
                        <label
                          className="custom-control-label"
                          for="customCheck2"
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- row --> */}

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
                      id=""
                      placeholder="Enter"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="" className="mb-1">
                      Gender
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
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
                      id=""
                      placeholder="Enter"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="" className="mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="" className="mb-1">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Enter"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="" className="mb-1">
                      Joining Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id=""
                      placeholder=""
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
              <button type="button" className="btn btn-success btn-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- modal --> */}
    </div>
  );
};

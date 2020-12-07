import React from 'react';


class App extends React.Component {
  state = {
    welcomeMessage: "Welcome to My Mini Portfolio List Project",
    taskList: [],
    title: "",
    description: "",
    date: "",
    status: "",
    url: "",
    profileImg: "https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/67822591_2303795803075030_1825684623506538496_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=fjUadyZPCPMAX9n4par&_nc_ht=scontent.fdac7-1.fna&oh=52e9a79522764c4f588223aa21e9e22f&oe=5FF3C65B"
  };

  componentDidMount() {
    this.initializeData();
  }

  initializeData = () => {
    const data = [];

    this.setState({
      taskList: data
    });
  };

  submitTask = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      alert("Please give a title");
      return false;
    }
    if (this.state.description === "") {
      alert("Please give a description");
      return false;
    }

    let data = this.state.taskList;

    const task = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      status: this.state.status,
      url: this.state.url,
    };
    data.unshift(task);

    this.setState({
      taskList: data,
      title: "",
      description: "",
      date: "",
      status: "",
      url: ""
    });
  };

  deleteTask = (index) => {
    let data = this.state.taskList;

    data.splice(index, 1);
    this.setState({
      taskList: data
    });
  };



  render() {
    return (
      <div className="container" style={{ backgroundColor: '#1ABC9C' }}>
        <div className="row mb-2">
          <div className="container">
            <div className="col-sm-12" style={{ backgroundColor: '#2C3E50' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={this.state.profileImg} alt="Md. Abu Bakkar Siddik" style={{ height: '200px', width: "200px", margin: '20px 0px 50px 0px', borderRadius: '50%' }} />
              </div>
              <h3 style={{ color: '#fff', textAlign: 'center', marginTop: '-50px' }}>Md. Abu Bakkar Siddik</h3>
              <p style={{ color: '#fff', textAlign: 'center' }}>
                <marquee>{this.state.welcomeMessage}</marquee>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <div className="card">
              <div className="card-header">
                Portfolio List
          </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Project Completion Date</th>
                    <th scope="col">Project Status</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </thead>
                  <tbody>
                    {this.state.taskList.map((task, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.date}</td>
                        <td>{task.status}</td>
                        <td>
                          <img src={task.url} alt="image" style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => this.deleteTask(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-4">
            <div className="card">
              <div className="card-header">
                <span> Add New List </span>
              </div>
              <form onSubmit={this.submitTask}>
                <div className="card-body">
                  <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" className="form-control" placeholder="Enter Title" value={this.state.title} onInput={(e) => this.setState({ title: e.target.value })} />
                  </div>

                  <div className="form-group">
                    <label for="description">Description</label>
                    <input type="text" id="description" className="form-control" placeholder="Enter Description" value={this.state.description} onInput={(e) => this.setState({ description: e.target.value })} />
                  </div>

                  <div className="form-group">
                    <label for="date">Project Complete Date</label>
                    <input type="date" id="date" className="form-control" value={this.state.date} onInput={(e) => this.setState({ date: e.target.value })} />
                  </div>

                  <div className="form-group">
                    <label for="status">Project Status</label>
                    <select className="form-control" id="status" value={this.state.status} onChange={(e) => this.setState({ status: e.target.value })}>
                      <option value="">--Select--</option>
                      <option value="Complete">Complete</option>
                      <option value="Not Complete">Not Complete</option>
                      <option value="Partially Complete">Partially Complete</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="url">Image Url</label>
                    <input type="text" id="url" className="form-control" placeholder="Enter Image url" value={this.state.url} onInput={(e) => this.setState({ url: e.target.value })} />
                  </div>
                  <button className="btn btn-info mt-3 mb-3">Save</button>
                </div>
              </form>
            </div>
          </div>
          <p style={{ color: '#fff', fontWeight: "bolder", marginLeft: "40%" }}>@ Md. Abu Bakkar Siddik 2020</p>
        </div>

      </div>
    );
  }
}

export default App;

import React from 'react';
import "./App.css";
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
            <div className="col-sm-12" style={{ backgroundColor: '#2C3E50', boxShadow: '-5px 5px 10px rgba(0,0,0,0.2), 5px 5px 10px rgba(0,0,0,0.2)' }}>
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
          <div className="col-sm-8">
            <div className="row">
              {this.state.taskList.map((task, index) => (
                <div className="col-sm-6 mb-4">
                  <div className="card" style={{ boxShadow: '-5px 5px 10px rgba(0,0,0,0.2), 5px 5px 10px rgba(0,0,0,0.2)' }} key={index}>
                    <img src={task.url} alt="image" className="card-img-top imageAnimation" style={{ height: '250px' }} />
                    <div className="card-body">
                      <h4 className="card-title text-center">{task.title}</h4>
                      <p className="card-text">{task.description}</p>
                      <p className="card-text">

                        Project Status {task.status}
                        <p className="card-text">{task.date}</p>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-4 mb-4">
            <div className="card" style={{ boxShadow: '-5px 5px 10px rgba(0,0,0,0.2), 5px 5px 10px rgba(0,0,0,0.2)' }}>
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
                    {/* <input type="text" id="description" className="form-control" placeholder="Enter Description" value={this.state.description} onInput={(e) => this.setState({ description: e.target.value })} /> */}
                    <textarea className="form-control" id="description" cols="30" rows="5" placeholder="Enter Description" value={this.state.description} onInput={(e) => this.setState({ description: e.target.value })}></textarea>
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

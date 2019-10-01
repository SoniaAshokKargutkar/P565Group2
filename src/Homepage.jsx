import React from "react";

//Homepage Component
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden_vol: true,
      isHidden_org: true
    };
  }
  //toggle volunter registeration from
  toggleHidden_vol = () => {
    this.setState({
      isHidden_vol: !this.state.isHidden_vol
    });
  };

  //toggle organisation registeration from
  toggleHidden_org = () => {
    this.setState({
      isHidden_org: !this.state.isHidden_org
    });
  };
  render() {
    return (
      <div className="container  ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            {" "}
            Home
          </a>
        </nav>
        <div className="shadow-lg  bg-white rounded">
          <div className="jumbotron  text-white rounded bg-info text-center ">
            <h1 className="font-bold">ConnectHour</h1>
            <h4 className="font-italic">Volunteer Management System</h4>
          </div>
        </div>

        <div className="row">
          <div id="volunteer" className="col-md-6 text-center">
            {!this.state.isHidden_vol && (
              <Volunteer_form toggleHidden_vol={this.toggleHidden_vol} />
            )}
            {this.state.isHidden_vol && (
              <Volunteer toggleHidden_vol={this.toggleHidden_vol} />
            )}
          </div>

          <div id="organisation" className="col-md-6 text-center ">
            {!this.state.isHidden_org && (
              <Organisation_form toggleHidden_org={this.toggleHidden_org} />
            )}
            {this.state.isHidden_org && (
              <Organisation toggleHidden_org={this.toggleHidden_org} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

class Volunteer extends React.Component {
  register_vol = () => {
    this.props.toggleHidden_vol();
  };
  render() {
    return (
      <div className="card border-primary mb-3 ">
        <div className="card-header">Volunteer</div>
        <div className="card-body ">
          <p className="card-text">
            TLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum..
          </p>
          <button className="btn btn-primary" onClick={this.register_vol}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
class Organisation extends React.Component {
  register_org = () => {
    this.props.toggleHidden_org();
  };

  render() {
    return (
      <div className="card border-primary mb-3 ">
        <div className="card-header">Organisation</div>
        <div className="card-body ">
          <p className="card-text">
            TLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum..
          </p>
          <button className="btn btn-primary" onClick={this.register_org}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

class Volunteer_form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Firstname: "" };
    this.state = { Lastname: "" };
    this.state = { Email: "" };
    this.state = { Password: "" };
    this.state = { City: "" };
    this.state = { State: "" };
  }

  myChangeHandler = event => {
    let key = event.target.name;
    let val = event.target.value;
    this.setState({ [key]: val });
  };

  vol_info = event => {
    event.preventDefault();
    console.log(this.state);
    //this.props.toggleHidden_vol()
  };

  render() {
    return (
      <div id="Volunteer_form" className="card border-primary mb-3 p-4 ">
        <button type="button" className="text-right close" onClick={this.props.toggleHidden_vol} aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
        <form>
        
          <div className="row">
            <div className="col">
              <label htmlFor="vol_firstname">First name</label>
              <input
                type="text"
                name="Firstname"
                onChange={this.myChangeHandler}
                id="vol_firstname"
                className="form-control"
                placeholder="First name"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="vol_lastname">Last name</label>
              <input
                type="text"
                name="Lastname"
                onChange={this.myChangeHandler}
                id="vol_lastname"
                className="form-control"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col p-2">
              <label htmlFor="vol_email">Email</label>
              <input
                type="email"
                name="Email"
                onChange={this.myChangeHandler}
                className="form-control"
                id="vol_email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className=" col p-2">
              <label htmlFor="vol_password">Password</label>
              <input
                type="password"
                name="Password"
                onChange={this.myChangeHandler}
                className="form-control"
                id="vol_password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className=" col p-2">
              <label htmlFor="vol_city">City</label>
              <input
                type="text"
                name="City"
                onChange={this.myChangeHandler}
                className="form-control"
                id="vol_city"
                placeholder="City"
                required
              />
            </div>
            <div className=" col p-2">
              <label htmlFor="vol_state">State</label>
              <input
                type="text"
                name="State"
                onChange={this.myChangeHandler}
                className="form-control"
                id="vol_state"
                placeholder="State"
                required
              />
            </div>
          </div>
          <button className="btn btn-primary" onSubmit={this.vol_info}>
            Submit
          </button>
          <a href='#' className='p-1'>Already have an account? Log in</a>
        </form>
      </div>
    );
  }
}

class Organisation_form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Organisation_name: "" };
    this.state = { Email: "" };
    this.state = { Password: "" };
    this.state = { City: "" };
    this.state = { State: "" };
  }

  myChangeHandler = event => {
    let key = event.target.name;
    let val = event.target.value;
    this.setState({ [key]: val });
  };

  org_info = event => {
    //   this.props.toggleHidden_org()
    console.log(this.state);
  };
  render() {
    return (
      <div id="Organisation_from" className="card border-primary mb-3 p-4">
        <button type="button" className="text-right close " onClick={this.props.toggleHidden_org} aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="org_name">Organisation name</label>
              <input
                type="text"
                name="Organisation_name"
                onChange={this.myChangeHandler}
                id="org_name"
                className="form-control"
                placeholder="Organisation name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col p-2">
              <label htmlFor="org_email">Email</label>
              <input
                type="email"
                name="Email"
                onChange={this.myChangeHandler}
                className="form-control"
                id="org_email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className=" col p-2">
              <label htmlFor="org_password">Password</label>
              <input
                type="password"
                name="Password"
                onChange={this.myChangeHandler}
                className="form-control"
                id="org_password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className=" col p-2">
              <label htmlFor="org_city">City</label>
              <input
                type="text"
                name="City"
                onChange={this.myChangeHandler}
                className="form-control"
                id="org_city"
                placeholder="City"
                required
              />
            </div>
            <div className=" col p-2">
              <label htmlFor="org_state">State</label>
              <input
                type="text"
                name="State"
                onChange={this.myChangeHandler}
                className="form-control"
                id="org_state"
                placeholder="State"
                required
              />
            </div>
          </div>
          <button className="btn btn-primary" onSubmit={this.org_info}>
            Submit
          </button>
          <a href='#' className='p-1'>Already have an account? Log in</a>
        </form>
      </div>
    );
  }
}

export default Homepage;

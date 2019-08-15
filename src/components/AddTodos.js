import React, { Component } from 'react';

export class AddTodos extends Component {

    state = {
        title: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state.title);
        this.setState({ title: "" })
    }

    changeThis = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
          <form onSubmit={this.onSubmit} style={{display: "flex"}}>
              <input type="text" name="title" placeholder="Add a Task..." style={{flex: "10", padding: "5px"}} 
              value={this.state.title}
              onChange={this.changeThis}
              />
              <input type="submit" value="Submit" className="btn" style={{flex: "1"}}/>
          </form>
        )
    }
}

export default AddTodos;

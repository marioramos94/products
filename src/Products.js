import React, { Component } from "react";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      productName: "",
      productPrice: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),

      text: ""
    }));
  }

  handleChange(e) {
    this.setState({
      productName: e.target.value,
      productPrice: e.target.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <h1>PRODUCT LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            placeholder={"Product name"}
            onChange={e => this.handleChange(e)}
          />
          <input
            value={this.state.text}
            placeholder={"Product price ($)"}
            onChange={e => this.handleChange(e)}
          />
          <button>Add</button>
          <ol>
            {this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => this.removeItem(index)}>Delete</button>
                  <button>Edit</button>
                </li>
              );
            })}
          </ol>
        </form>
      </div>
    );
  }
}

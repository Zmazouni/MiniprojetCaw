import React from "react";
class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('comments saved : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="">
        <form onSubmit={this.handleSubmit}>
          <label>
           
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
        </div>
      );
    }
  }
  export default Comments;
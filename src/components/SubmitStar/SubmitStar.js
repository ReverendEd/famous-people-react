import React, { Component } from 'react';

class SubmitStar extends Component {
  render() {
    return (
        <form onSubmit={this.props.handleClick}>
            <input value={this.props.star.name} type="text" placeholder="name" onChange={this.props.handleChangeFor('name')}/>
            <input value={this.props.star.role} type="text" placeholder="role" onChange={this.props.handleChangeFor('role')}/>
            <input value={this.props.star.famousness} type="number" placeholder="famousness" onChange={this.props.handleChangeFor('famousness')}/>
            <input type="submit" value="submit"/>
        </form>    
    )
  }
}

export default SubmitStar;
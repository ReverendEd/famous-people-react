import React, { Component } from 'react';

class NewStarText extends Component {
  render() {
    return (
        <p> {this.props.star.name} is {this.props.star.famousness} units of famous for {this.props.star.role}.</p>
    );
  }
}

export default NewStarText;
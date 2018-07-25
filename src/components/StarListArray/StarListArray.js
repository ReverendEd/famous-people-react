import React, { Component } from 'react';

class StarListArray extends Component {
  render() {

    let starListArray = this.props.starList.map((star, index)=>{
      return <li key={index} >{star.name} is {star.famousness} units of famous for {star.role}.</li>
    })

    return (
        <ul>
            {starListArray}
        </ul>
    );
  }
}

export default StarListArray;
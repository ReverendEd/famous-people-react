import React, { Component } from 'react';

class Star extends Component {
    constructor(props){
        super(props);
        this.state ={
            star: {
                name: '',
                role: ''
            }
        }
    }

    handleNameChange = (event)=>{
        this.setState({
            star: {
                ...this.state.star,
                name: event.target.value
            }
        })
    }

    handleRoleChange = (event)=>{
        this.setState({
            star:{
                ...this.state.star,
                role: event.target.value
            }
        })
    }

    handleClick = (event)=>{
        console.log(this.state.star);
    }

  render() {
    return (
        <div>
            <input type="text" onChange={this.handleNameChange}/>
            <input type="text" onChange={this.handleRoleChange}/>
            <button onClick={this.handleClick}>SUBMIT</button>
            <p> {this.state.star.name} is famous for {this.state.star.role}.</p>
        </div>    
    );
  }
}

export default Star;
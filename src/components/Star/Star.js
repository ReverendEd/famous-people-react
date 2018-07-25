import React, { Component } from 'react';

class Star extends Component {
    constructor(props){
        super(props);
        this.state ={
            star: {
                name: '',
                role: '',
                famousness: ''
            }
        }
    }

    // handleNameChange = (event)=>{
    //     this.setState({
    //         star: {
    //             ...this.state.star,
    //             name: event.target.value
    //         }
    //     })
    // }

    handleChangeFor = (propertyName)=>{
        return (event)=>{
            this.setState({
                star:{
                    ...this.state.star,
                    [propertyName]: event.target.value
                }
            })
        }
    }

    // handleRoleChange = (event)=>{
    //     this.setState({
    //         star:{
    //             ...this.state.star,
    //             role: event.target.value
    //         }
    //     })
    // }

    handleClick = (event)=>{
        console.log(this.state.star);
        event.preventDefault();
        this.clearInputs();
    }

    clearInputs = ()=>{
        this.setState({
            star:{
                name: '',
                role: '',
                famousness: ''
            }
        })
    }

  render() {
    return (
        <div>
            <form onSubmit={this.handleClick}>
                <input value={this.state.star.name} type="text"  placeholder="name" onChange={this.handleChangeFor('name')}/>
                <input value={this.state.star.role} type="text" placeholder="role" onChange={this.handleChangeFor('role')}/>
                <input value={this.state.star.famousness} type="number" placeholder="famousness" onChange={this.handleChangeFor('famousness')}/>
                <input type="submit" value="submit"/>
            </form>
            <p> {this.state.star.name} is {this.state.star.famousness} units of famous for {this.state.star.role}.</p>
        </div>    
    );
  }
}

export default Star;
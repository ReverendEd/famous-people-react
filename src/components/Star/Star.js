import React, { Component } from 'react';
import StarListArray from '../StarListArray/StarListArray';
import NewStarText from '../NewStarText/NewStarText';
import SubmitStar from '../SubmitStar/SubmitStar';
import './Star.css';

class Star extends Component {
    constructor(props){
        super(props);
        this.state ={
            starList: [],
            star: {
                name: '',
                role: '',
                famousness: ''
            }   
        }   
    }
   

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

    handleClick = (event)=>{
        console.log(this.state.star);
        event.preventDefault();
        this.clearInputs();
        this.submitNewStar();
    }

    submitNewStar = ()=>{
        this.setState({
            starList: [
                ...this.state.starList,
                this.state.star
            ]
        })
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
            <SubmitStar handleClick={this.handleClick} handleChangeFor={this.handleChangeFor} star={this.state.star}/>
            <NewStarText star={this.state.star}/>
            <StarListArray starList={this.state.starList} />
        </div>    
    );
  }
}

export default Star;
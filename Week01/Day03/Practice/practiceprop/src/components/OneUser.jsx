import React, { Component } from 'react'

export default class OneUser extends Component {
    constructor(props){
        super(props)
        this.state=  this.props.person
    }
    addAge() {
        this.setState({
            
                ...this.state,
                age: this.state.age + 1
            
        })
        console.log(this.state.age);
    }
  render() {
    return (
      <div>
        
        <div className="container">
                <h2>{this.state.lastName}, {this.state.firstName}</h2>
                Age: {this.state.age} <br/>
                Hair color: {this.state.hairColor} <br />
                <button onClick={() => this.addAge()} >Birthday button for {this.state.firstName} {this.state.lastName}</button>
            </div>
      </div>
    )
  }
}

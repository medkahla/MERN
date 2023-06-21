import React, { Component } from 'react'

export default class ShowUser extends Component {
  render() {
    const person = this.props.person;
    return (
      <div>
            {/* {JSON.stringify(person)}
            {console.log(person[0])} */}
            {person.map((onePerson, i)=>{
                return (
                <div className="container" key ="i">
                <h2>{onePerson.firstName}, {onePerson.lastName}</h2>
                Age: {onePerson.age} <br/>
                Hair color: {onePerson.hairColor}
            </div>)
            })}

      </div>
    )
  }
}

import React, { Component } from 'react'
import OneUser from './OneUser';

export default class ShowUser extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            person: this.props.person
        }
    }

    addAge(e,onePerson){

        // console.log(onePerson);
        // console.log(onePerson.age);
        // onePerson.age = onePerson.age +1

        console.log(onePerson);
        
    }
    
    render() {

    return (
      <div>
            {/* {JSON.stringify(person)}
            {console.log(person[0])} */}
            {this.state.person.map((person, i)=>{
                return <OneUser key={i} person = {person}/>
            })}

      </div>
    )
  }
}

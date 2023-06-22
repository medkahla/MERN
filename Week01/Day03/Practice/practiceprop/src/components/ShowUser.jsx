// import React, { Component } from 'react'
// import OneUser from './OneUser';
// export default class ShowUser extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             person: this.props.person
//         }
//     }
//     addAge(e,onePerson){
//         console.log(onePerson);   
//     }
//     render() {
//     return (
//       <div>
//             {this.state.person.map((person, i)=>{
//                 return <OneUser key={i} person = {person}/>
//             })}
//       </div>
//     )
//   }
// }



// Big inversion Assignment
import React from 'react'

function ShowUser(props) {
  const person = props.person
  return (
    <div>
        {person.map((onePerson, i)=>{
                return(
                    <div key={i}>
                        <h2>{onePerson.lastName}, {onePerson.firstName}</h2>
                        Age: {onePerson.age} <br/>
                        Hair color: {onePerson.hairColor} <br />
                    </div>
                ) 
            })}
    </div>
  )
}

export default ShowUser
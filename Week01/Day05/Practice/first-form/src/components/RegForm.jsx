import React, {useState} from 'react'

const RegForm = () => {
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [passsword, setPasssword] = useState("")
  const [confirmPasssword, setConfirmPasssword] = useState("")

  return (
    <div>
        <fieldset>
            <legend>RegForm</legend>
            <form>
              <label htmlFor="FirstName">First Name</label>
              <input onChange={(e) => {setFirstName(e.target.value)}}/> <br />
              <label htmlFor="LastName">Last Name</label>
              <input onChange={(e) => {setLastName(e.target.value)}}/> <br />
              <label htmlFor="Email">Email</label>
              <input type='email' onChange={(e) => {setEmail(e.target.value)}}/> <br />
              <label htmlFor="Password">Password</label>
              <input type='password' onChange={(e) => {setPasssword(e.target.value)}}/> <br />
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input type='password' onChange={(e) => {setConfirmPasssword(e.target.value)}}/> <br />
              <button>Submit</button>
            </form>

            <fieldset>
              <legend>Your Form Data</legend>
              <p> First Name: {firstName}</p>
              <p> Last Name:  {lastName}</p>
              <p> Email: {email}</p>
              <p> Password: {passsword}</p>
              <p> Confirm password: {confirmPasssword}</p>
            </fieldset>
        </fieldset>
    </div>
  )
}

export default RegForm
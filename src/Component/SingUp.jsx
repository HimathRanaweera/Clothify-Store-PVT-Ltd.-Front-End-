import React from 'react'
import { } from 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'bootstrap/dist/js/bootstrap.js'
import { useState } from 'react';
import './SingUp.css'
function SingUp() {
  const [firstname, setfirstName] = useState('');
  const [lastname, setlastName] = useState('');
  const [password, setpassword] = useState('');

  const handlefirstNameChange = (event) => {
    setfirstName(event.target.value);
  };
  const handlelastNameChange = (event) => {
    setlastName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };

  return (
    <div>
      <form className="cover">
        <div className="form-group">
          <label className="name" htmlFor="firstname">First Name</label>
          <br />
          <input type="text" className="form-control" id="firstname" placeholder="Enter name" value={firstname} onChange={handlefirstNameChange} />
          <br />
          <br />
          <label className="name" htmlFor="lastname">Last Name</label>
          <br />
          <input type="text" className="form-control" id="lastname" placeholder="Enter name" value={lastname} onChange={handlelastNameChange} />
          <br />
          <br />
          <label className="name" htmlFor="password">Password</label>
          <br />
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
          <br />
          <br />  
        
          
          <button type="button" className="form-control-button" >Sing Up</button>
          <br /><br />
          <a href="">Alredy  have an account? Log in</a><br/><br/>
        </div>
      </form>
      </div>

  )
}

export default SingUp

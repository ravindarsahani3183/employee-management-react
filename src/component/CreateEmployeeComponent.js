import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './createEmployeeComponent.css';
import { Link } from 'react-router-dom';

const CreateEmployeeComponent = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  function getFormData(e){
    e.preventDefault();
    axios.post('http://localhost:8050/api/v1/employees', {
      firstName : firstName,
      lastName : lastName,
      emailId: emailId
    }).then(()=>{
      navigate('/');
    })
  }
  return (
    <div className='create-card shadow'>
      <h4 className='create-text'>Create Employee Data</h4>
      <div className='card-box'>
        <form onSubmit={getFormData}>
          <div>
            <label className='create-label'>First Name</label>
            <input type='text' placeholder='First Name' className='form-control' onChange={(e)=>setFirstName(e.target.value)}></input>
          </div>
          <div>
            <label className='create-label'>Last Name</label>
            <input type='text' placeholder='Last Name' className='form-control' onChange={(e)=>setLastName(e.target.value)}></input>
          </div>
          <div>
            <label className='create-label'>Email Id</label>
            <input type='email' placeholder='Email Id' className='form-control' onChange={(e)=>setEmailId(e.target.value)}></input>
          </div>
          <div className='button-flex'>
            <button type='submit' className='btn btn-outline-primary create-button'>Save</button>
            <Link to='/' className=''>
              <button className='btn btn-outline-info '>Read</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployeeComponent
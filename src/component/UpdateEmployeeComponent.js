import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './updateEmployeeComponent.css';
import { Link } from 'react-router-dom'; 
const UpdateEmployeeComponent = () => {
 
    const navigate = useNavigate();

    const[id, setId] = useState(0);
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[emailId, setEmailId] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setEmailId(localStorage.getItem('emailId'));
    }, [])

    const handleUpdate =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8050/api/v1/employees/${id}`, {
            id : id,
            firstName : firstName,
            lastName : lastName,
            emailId: emailId
          }).then(()=>{
            navigate('/');
          })
        }

  return (
    <div>
        <div className='update-card shadow'>
          <h4 className='update-text'>Update Employee Data</h4>
            <form onSubmit={handleUpdate}>
                <div>
                    <label className='update-label'>First Name</label>
                    <input type='text' placeholder='First Name' className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                </div>
                <div>
                    <label className='update-label'>Last Name</label>
                    <input type='text' placeholder='Last Name' className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                </div>
                <div>
                    <label className='update-label'>Email Id</label>
                    <input type='email' placeholder='Email Id' className='form-control' value={emailId} onChange={(e)=>setEmailId(e.target.value)}></input>
                </div>
                <div className='update-button'>
                 <button type='submit' className='btn btn-outline-primary'>save</button>
                 <Link to='/' className=''>
                    <button className='btn btn-outline-info '>Read</button>
                 </Link>
                </div>
            </form>
      </div>
    </div>
  )
}

export default UpdateEmployeeComponent
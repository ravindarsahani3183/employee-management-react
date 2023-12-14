import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './listEmployee.css';
const ListEmployeeComponent = () => {
  const[employees, setEmployeeData]= useState([]);

  function getData(){
    axios.get('http://localhost:8050/api/v1/employees')
    .then((response)=> {
      setEmployeeData(response.data)
    })
  }

  function deleteEmployeeData(id){
    axios.delete(`http://localhost:8050/api/v1/employees/${id}`)
    .then(() => {
      getData();
    });
  }
  
  function setDataToStorage(id, firstName, lastName, emailId){
    localStorage.setItem('id', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName',lastName);
    localStorage.setItem('emailId',emailId);
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>
      <div className=''>
        <Link to='/Create' className=''>
          <button className='btn btn-primary mt-3  list-create-button mt-5'>Create New Data</button>
        </Link>
        <div className='card-table '>
        <table className='table table-bordered table-striped '>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((item) => {
                return(
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.emailId}</td>
                    <td>
                      <Link to="/Update">
                        <button type='submit' className='btn btn-success' onClick={()=>setDataToStorage(item.id ,item.firstName, item.lastName, item.emailId)}>Update</button>
                      </Link>
                    </td>
                    <td>
                      <button type='submit' className='btn btn-danger' onClick={()=>{
                        if(window.confirm('are you sure to delete data ??'))
                        {
                          deleteEmployeeData(item.id)
                        }
                      }}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default ListEmployeeComponent
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserService from '../services/UserService';

export default function Home() {
    const [users, setUsers] = useState([]);

    const {id}=useParams();

    useEffect(()=>{
      getAllUsers();
    }, []);

    const getAllUsers=()=>{
      UserService.getAllUsers().then((response)=>{
        setUsers(response.data)
      })
    }


    const deleteUser=(id)=>{
      UserService.deleteUser(id).then((response)=>{
        getAllUsers();
      })
    };

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user)=>(
                      <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
                        <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
                      </td>
                      </tr>
                    ))
                    }
                  
                </tbody>
            </table>
        </div>
    </div>
  )
}
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

export default function AddUser() {

    let navigate=useNavigate();

    const[name,setName] =useState('')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')

    const onSubmit= (e)=>{
        e.preventDefault();  //to prevent refresh of page

        const user={name,username,email}

        UserService.addUser(user).then((response)=>{
            console.log(response)
            navigate("/");

        }).catch(error=>{
            console.log(error)
        })
      };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m4'>Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}>
                    </input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>
                    Username
                    </label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder="Enter your username"
                        name="username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}>
                    </input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                    E-mail
                    </label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder="Enter your Email address"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}>
                    </input>
                </div>
                <button type="submit" className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

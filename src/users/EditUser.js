import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UserService from '../services/UserService';

export default function EditUser() {

    let navigate=useNavigate();

    const {id}=useParams(); //to retrieve id from url

    const[name,setName] =useState('')
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')

    const onSubmit= (e)=>{
        e.preventDefault();

        const user={name,username,email}

        UserService.updateUser(id,user).then((response)=>{
            console.log(response.data)
            navigate("/");

        }).catch(error=>{
            console.log(error)
        })
      };

    useEffect(()=>{
        UserService.getUserById(id).then((response)=>{
            setName(response.data.name)  
            setUsername(response.data.username)
            setEmail(response.data.email)
        }) //made api call and retrive user object and set name, username, email
    }, []);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m4'>Edit User</h2>
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

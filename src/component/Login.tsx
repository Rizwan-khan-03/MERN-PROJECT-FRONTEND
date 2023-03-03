import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate =useNavigate()
    const [form,setForm]=useState<any>({
        username:'',
        email:'',
        password:''
    })
    const onChangeHandler =(e:any)=>{
        const {name,value}=e.target;
        setForm((prevState:any) => {
            return {
              ...prevState,
              [name]: value,
            };
          });
    }
    const submitHandler=()=>{
        // 
        if(form.username && form.email && form.password){
            console.log("form",form);
            navigate('product')
        }else{
            alert('Please Fill All Details')
        }
       
        
    }
    return (
        <div>
            <form style={{ maxWidth: '500px', margin: "auto" }}>
                <h2>Register Form</h2>
                <div className="input-container">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Username" value={form.username} name="username" onChange={(e)=>onChangeHandler(e)}/>
                </div>

                <div className="input-container">
                    <i className="fa fa-envelope icon"></i>
                    <input className="input-field" type="text" placeholder="Email" value={form.email} name="email" onChange={(e)=>onChangeHandler(e)}/>
                </div>

                <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" value={form.password} name="password" onChange={(e)=>onChangeHandler(e)}/>
                </div>

                <button type="button" className="btn" onClick={submitHandler}>Register</button>
            </form>
        </div>
    )
}

export default Login
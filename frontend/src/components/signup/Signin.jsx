import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

function Signin() {

    const dispatch = useDispatch();

    const history=useNavigate();
    const [input, setInput] = useState(
        {
            email: "",
            password: ""
        }
    );
    const change = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/signin", input).then((res) => {
            sessionStorage.setItem("id",res.data.others._id);
            dispatch(authActions.login());
            history('/todo');
        });


    }




  return (
    <div className='signup'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-100 p-5'>
                        <input
                        className='p-2 my-3'
                        type="email"
                        placeholder='enter your Email'
                        name='email'
                        value={input.email}
                        onChange={change}
                         />
                         <input
                        className='p-2 my-3'
                        type="password"
                        placeholder='enter your password'
                        name='password'
                        value={input.password}
                        onChange={change}
                         />
                         <button className='btn-signup p-2' onClick={submit}>Signin</button>
                    </div>
                </div>
                <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
                    <h1 className='text-center sign-up-heading'>
                        Sign <br/> In
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin
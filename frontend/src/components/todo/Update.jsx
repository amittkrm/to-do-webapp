import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Update({ display, update }) {

  useEffect(() => {
    setInputs({
      title: update.title,
      body: update.body
    });
  }, [update]);

  const [inputs, setInputs] = useState({
    title: "",
    body: ""
  })
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }
  const submit = async () => {
    await axios.put(`http://localhost:1000/api/v2/updateTask/${update._id}`, inputs)
      .then((res) => {
        toast.success(res.data.message);

      })
    display("none");
  }


  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
      <h3>Update your task</h3>
      <input type="text" className='todo-inputs my-4 w-100 p-3' value={inputs.title}
        onChange={change}
        name='title' />
      <textarea className='todo-inputs w-100 p-3' value={inputs.body}
        onChange={change}
        name='body'></textarea>

      <div>
        <button className='btn btn-dark my-4' onClick={submit}>UPDATE</button>
        <button className='btn btn-dark my-4 mx-3' onClick={() => {
          display("none");
        }}>CLOSE</button>
      </div>
    </div>
  )
}

export default Update;
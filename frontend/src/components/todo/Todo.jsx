import React, { useState, useEffect } from 'react'
import "./Todo.css"
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';

import axios from 'axios';

let id = sessionStorage.getItem("id");
let toUpdateArray = [];

function Todo() {

    const [inputs, setInputs] = useState({
        title: "",
        body: ""
    });

    const [array, setArray] = useState([]);

    
    

    // const isLoggedIn = useSelector((state) => state.isLoggedIn);
    // if (isLoggedIn) {
    //     console.log(id);
    // }


    const show = () => {
        document.getElementById("textarea").style.display = "block";
    };



    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });

    };
    const submit = async () => {
        if (inputs.title === "" || inputs.body === "") {
            toast.error("title or body should not be empty");
        } else {
            if (id) {
                await axios.post("http://localhost:1000/api/v2/addTask", {
                    title: inputs.title,
                    body: inputs.body,
                    id: id
                })
                    .then((res) => {
                        console.log(res);

                    });
                
                setInputs({ title: "", body: "" });
                toast.success("your task is added");
                // toast.error("your task is not saved !!! please signup");
            }
            else{
                setArray([...array, inputs]);
            setInputs({ title: "", body: "" });
            toast.success("your task is added");
            toast.error("your task is not saved !!! please signup");
            }


        }
    }

    const del = async(Cardid) => {
        if(id){
            
            await axios.delete(`http://localhost:1000/api/v2//deleteTask/${Cardid}`,{
                data:{id:id},
            })
            .then(()=>{
                toast.success("your task is deleted");
                
            })
        }else{
            toast.error("please signup first");
        }

    }

    const dis = (value) => {
        document.getElementById("todo-update").style.display = value;
    };
    const update = (value)=>{
        toUpdateArray=array[value];
    }

    useEffect(() => {
        if(id){
            const fetch = async()=>{
                await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`)
                .then((res)=>{
                    setArray(res.data.list);
                    
                })
              };
              fetch();
        }
  
      }, [submit])

    return (

        <>
            <div className='todo'>
                <ToastContainer />
                <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
                    <div className='d-flex flex-column todo-inputs-div w-25'>
                        <input type="text" placeholder='TITLE'
                            name='title'
                            className='my-2 p-2 todo-inputs'
                            onClick={show}
                            value={inputs.title}
                            onChange={change} />
                        <textarea
                            id='textarea'
                            type="text" placeholder='BODY'
                            name='body'
                            value={inputs.body}
                            className='p-2 todo-inputs'
                            onChange={change} />

                    </div>
                    <button className='home-btn mt-1'
                        onClick={submit}>add</button>
                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row">

                            {array && array.map((item, index) => (<div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                <TodoCards title={item.title} body={item.body} id={item._id}
                                    delId={del}
                                    display={dis} 
                                    updateId={index}
                                    toBeUpdate={update}
                                    />
                            </div>

                            ))}

                        </div>

                    </div>
                </div>
            </div>
            <div className="todo-update" id='todo-update' >
                <div className="container update">

                    <Update display={dis} update={toUpdateArray}/>
                </div>
            </div>
        </>
    )
}

export default Todo
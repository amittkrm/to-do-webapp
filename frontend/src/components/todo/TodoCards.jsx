import React from 'react'
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

function TodoCards({ title, body, id, delId, display,updateId,toBeUpdate }) {


    return (
        <div className='p-3 todo-card'>
            <div>
                <h5>{title}</h5>
                <p className='todo-card-p'>{body.split("", 77)}...</p>
            </div>
            <div className='d-flex justify-content-around '>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1'
                    onClick={() => {
                        display("block");
                        toBeUpdate(updateId);
                    }
                    }>
                    <RxUpdate className='card-icons' /> Update
                </div>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger'
                    onClick={() => {
                        delId(id);

                    }}
                >
                    <MdDelete className='card-icons del' /> Delete
                </div>
            </div>
        </div>
    )
}

export default TodoCards;
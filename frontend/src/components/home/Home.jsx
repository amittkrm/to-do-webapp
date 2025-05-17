import React from 'react';
import "./Home.css";
import { Link} from "react-router-dom";

function Home() {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'>
                Organise your<br/> work and life, finally.
            </h1>
            <p>
                Become focused, oragised and calm with <br/>todo app. The world's #1 task amnager app.
            </p>
            <button className='p-2'>
                <Link to="http://localhost:3000/todo" style={{ textDecoration: 'none' }} >Make todo list</Link>
                
            </button>
        </div>
    </div>
  )
}

export default Home;
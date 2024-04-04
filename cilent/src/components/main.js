import React,{useRef} from "react";
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { setUserId } from "../redux/result_reducers.js";

import '../components/Main.css'
export default function Main(){
    
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
            dispatch(setUserId(inputRef.current?.value))
        }
    }
  
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz application</h1>
            <ol>
                <li>
                    you will be asked 10 questions one after another
                </li>
                <li>
                    10 points is awarded for the correct answer
                </li>
                <li>
                    each questions has three options. you can chhoose only one option
                </li>
                <li>
                    you can review and change answer before the quiz finish 
                </li>
                <li>
                    the result will be declare at the end of the quiz
                </li>


            </ol>
            <form id='form'>
                <input ref={inputRef} className="userid" type="text" placeholder="Username*" />
            </form>
            <div className="start">
                <Link className="btn" to={'quiz'} onClick={startQuiz}>Start quiz</Link>
            </div>
        </div>
    )
    

}
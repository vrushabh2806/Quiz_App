import React, { useEffect } from "react";
import '../components/Result.css'
import { Link } from "react-router-dom";
import ResultTable from '../components/ResultTable..js'
import { useDispatch, useSelector } from "react-redux";
import { attempts_Number,earnPoints_Number,flagResult} from "../helper/helper.js";
import { resetAllAction } from "../redux/question_reducers.js";
import { resetResultAction } from "../redux/result_reducers.js";
export default function Result() {
    const dispatch=useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)
    useEffect(()=>{
        console.log(flag)
    })
    
    
    const totalPoints = queue.length * 10; 
   const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)
    function onstart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz application</h1>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>Username</span>
                    <span className='bold'>22IT129</span>
                </div>
                <div className='flex'>
                    <span>Total quiz points</span>
                    <span className='bold'>{totalPoints || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total question</span>
                    <span className='bold'>{ queue.length || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total attempts</span>
                    <span className={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} >{attempts || 0}</span>
                </div>
                <div className='flex'>
                    <span>Total Earn points</span>
                    <span className='bold'>{earnPoints || 0}</span>
                </div>
                <div className='flex'>
                    <span>Quiz result </span>
                    <span className='bold'>passed </span>
                </div>
            </div>
            <div className="start">
                <Link className='btn' to={'/'} onClick={onstart}>Restart</Link>

            </div>
            <div className='container'>
                  <ResultTable></ResultTable>
            </div>
        </div>
    )
}
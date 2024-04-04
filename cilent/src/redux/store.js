import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  questionReducer  from './question_reducers'
import  resultReducer  from './result_reducers'

const rootReducer = combineReducers({
    questions: questionReducer,
    result:resultReducer
})

export default configureStore({reducer:rootReducer})
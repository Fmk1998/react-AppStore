import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import setting from './settingReducer'
import menu from './menuReducer'
import app from  './appReducer'

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    setting,
    menu,
    app
})

export default createRootReducer

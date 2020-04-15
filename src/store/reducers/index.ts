import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import setting from './settingReducer'
import menu from './menuReducer'
import menu2 from "./componentReducer";

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    setting,
    menu,
    menu2
})

export default createRootReducer

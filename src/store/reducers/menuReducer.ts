import {APICATEGORY, CURRENT_MENU, SIDEBAR} from "../action-types"const initState: any = {    list: [        {path: "/", exact: true, name: '/'},        {            path: "/home",            name: '首页',            value: 'home',            children: [                {                    url: 'layout',                    name: '布局',                    key: 0                },                {                    url: 'form',                    name: 'Form表单组件',                    key: 1                },                {                    url: '',                    name: '自定义',                    key: 2                }            ]        },        {path: "/about", name: '关于', value: 'about'},    ],    currentMenu: 'layout',}export default function menuReducer(state = initState, action: any) {    switch (action.type) {        case APICATEGORY.QUERY:            return Object.assign({}, state, {                list: action.payload.data,                sideList: action.payload.data[0].children            });        case SIDEBAR:            return Object.assign({}, state, {currentMenu: action.url});//2、将传来的url赋给initState内的currentMenu        default:            return state;    }}
import {APICATEGORY, CURRENT_MENU, SIDEBAR} from "../action-types"import {Redirect} from "react-router";import React from "react";const initState: object = {    list: [        {path: "/", exact: true, name: '/'},        {            path: "/home",            name: '首页',            value: 'home',            children: [                {                    path: '/page1',                    name: '菜单1',                    key: 0                },                {                    path: '/page2',                    name: '菜单2',                    key: 1                },            ]        },        {path: "/about", name: '关于', value: 'about'},    ],    currentMenu: ''}export default function menuReducer(state = initState, action: any) {    switch (action.type) {        case APICATEGORY.QUERY:            return Object.assign({}, state, {                list: action.payload.data,                sideList: action.payload.data[0].children});        case SIDEBAR:            return Object.assign({}, state, {sideList: action.payload});        case CURRENT_MENU:            return Object.assign({}, state, {currentMenu: action.url});        default:            return state;    }}
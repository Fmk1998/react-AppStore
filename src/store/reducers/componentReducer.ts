import React from "react";

import {CURRENT_MENU, DETAIL_MENU,  SIDEBAR} from "../action-types";

let data: any[] = [];
let initState: object = {
    componentList: [],
    currentMenu: null,
    currentKeyOfDetail: null,
};

export default function componentReducer(state = initState, action: any) {
    switch (action.type) {
        case CURRENT_MENU:
            /*state = {
                componentList: [
                    {
                        path: "/home",
                        name: '布局',
                        url: 'layout',
                        children: data,
                    },
                ]
            };*/
            return Object.assign({}, state, {componentList: action.data});
        case SIDEBAR:
            return Object.assign({}, state, {currentMenu: action.payload})
        case DETAIL_MENU:
            return Object.assign({}, state, {currentKeyOfDetail: action.key, currentMenu: action.currentMenu});
        default:
            return state;
    }
}

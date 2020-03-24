import {DETAIL_MENU, MENU, SIDEBAR} from "../action-types";


const initState: object = {
    /*appList: [
        {
            path: "/home",
            name: '探索',
            url: 'explore',
            children: [
                {
                    path: '/detail',
                    iconUrl: img,
                    name: 'Luminar 4',
                    description: '摄影与录像',
                    detail: 'This is the test description of the component',
                    key: 1
                },
                {
                    path: '/detail',
                    iconUrl: img,
                    name: 'Affinity Photo',
                    description: '摄影与录像',
                    detail: 'This is the test description of the component',
                    key: 2
                },
                {
                    path: '',
                    iconUrl: img,
                    name: 'TouchRetouch',
                    description: '摄影与录像',
                    key: 3
                },
                {
                    path: '',
                    iconUrl: img,
                    name: 'RAW Power',
                    description: '摄影与录像',
                    key: 4
                },
                {
                    path: '',
                    iconUrl: img,
                    name: 'Adobe Photoshop',
                    description: '摄影与录像',
                    key: 5
                },
                {
                    path: '',
                    iconUrl: img,
                    name: 'CorelDRAW',
                    description: '图形设计软件',
                    key: 6
                },
                {
                    path: '',
                    iconUrl: img,
                    name: 'Picktorial',
                    description: '摄影与录像',
                    key: 7
                },
                {
                    path: '',
                    iconUrl: img,
                    name: 'Acorn 6 Image Editor',
                    description: '图形和设计',
                    key: 8
                },
                {
                    path: '',
                    iconUrl: img,
                    name: 'Aurora HDR 2019',
                    description: '摄影与录像',
                    key: 9
                },
                {
                    path: '',
                    iconUrl: img,
                    name: '泼辣修图',
                    description: '摄影与录像',
                    key: 10
                }
            ]
        },
        // {
        //     path: "",
        //     name: '创作',
        //     url: 'create',
        //     children: [
        //         {
        //             path: '',
        //             name: '创作',
        //             description: '摄影与录像',
        //             key: 1
        //         },
        //         {
        //             path: '',
        //             name: '创作',
        //             description: '摄影与录像',
        //             key: 2
        //         },
        //         {
        //             path: '',
        //             name: '创作',
        //             description: '摄影与录像',
        //             key: 3
        //         },
        //         {
        //             path: '',
        //             name: '创作',
        //             description: '摄影与录像',
        //             key: 4
        //         }
        //     ]
        // },
        // {
        //     path: "",
        //     name: '工作',
        //     url: 'work',
        //     children: [
        //         {
        //             path: '',
        //             name: '工作',
        //             description: '摄影与录像',
        //             key: 1
        //         },
        //         {
        //             path: '',
        //             name: '工作',
        //             description: '摄影与录像',
        //             key: 2
        //         },
        //         {
        //             path: '',
        //             name: '工作',
        //             description: '摄影与录像',
        //             key: 3
        //         },
        //         {
        //             path: '',
        //             name: '工作',
        //             description: '摄影与录像',
        //             key: 4
        //         }
        //     ]
        // },
        // {
        //     path: "",
        //     name: '游戏',
        //     url: 'game',
        //     children: [
        //         {
        //             path: '',
        //             name: '游戏',
        //             description: '摄影与录像',
        //             key: 1
        //         },
        //         {
        //             path: '',
        //             name: '游戏',
        //             description: '摄影与录像',
        //             key: 2
        //         },
        //         {
        //             path: '',
        //             name: '游戏',
        //             description: '摄影与录像',
        //             key: 3
        //         },
        //         {
        //             path: '',
        //             name: '游戏',
        //             description: '摄影与录像',
        //             key: 4
        //         }
        //     ]
        // },
        // {
        //     path: "",
        //     name: '开发',
        //     url: 'coding',
        //     children: [
        //         {
        //             path: '',
        //             name: '开发',
        //             description: '摄影与录像',
        //             key: 1
        //         },
        //         {
        //             path: '',
        //             name: '开发',
        //             description: '摄影与录像',
        //             key: 2
        //         },
        //         {
        //             path: '',
        //             name: '开发',
        //             description: '摄影与录像',
        //             key: 3
        //         },
        //         {
        //             path: '',
        //             name: '开发',
        //             description: '摄影与录像',
        //             key: 4
        //         }
        //     ]
        // },
        // {
        //     path: "",
        //     name: '类别',
        //     url: 'classification',
        //     children: [
        //         {
        //             path: '',
        //             name: '类别',
        //             description: '摄影与录像',
        //             key: 1
        //         },
        //         {
        //             path: '',
        //             name: '类别',
        //             description: '摄影与录像',
        //             key: 2
        //         },
        //         {
        //             path: '',
        //             name: '类别',
        //             description: '摄影与录像',
        //             key: 3
        //         },
        //         {
        //             path: '',
        //             name: '类别',
        //             description: '摄影与录像',
        //             key: 4
        //         }
        //     ]
        // },
    ],*/
    appList: [],
    currentMenu: null,
    currentKeyOfDetail: null
};

export default function appReducer(state = initState, action:any) {
    switch (action.type) {
        case MENU:
            return Object.assign({},state,{appList: action.payload.data})
        case SIDEBAR:
            return Object.assign({}, state, {sideList: action.payload})
        case DETAIL_MENU:
            return Object.assign({},state,{currentKeyOfDetail:action.key,currentMenu:action.currentMenu})
        default:
            return state;
    }
}
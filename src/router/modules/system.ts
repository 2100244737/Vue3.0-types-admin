import {RouteRecordRaw} from "vue-router";

export const system: Array<RouteRecordRaw> = [
    {
        path: '/system',
        name: 'system',
        component: () => import('/@/layout/routerView/parent.vue'),
        redirect: '/system/userManagement',
        meta: {
            title: 'message.router.system',
            isLink: '',
            isHide: false,
            isKeepAlive: true,
            isAffix: false,
            isIframe: false,
            roles: ['admin'],
            icon: 'iconfont icon-xitongshezhi',
        },
        children: [
            {
                path: '/system/menuManagement',
                name: 'systemMenu',
                component: () => import('/@/views/system/menu/index.vue'),
                meta: {
                    title: 'message.router.systemMenu',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: false,
                    isIframe: false,
                    roles: ['admin'],
                    icon: 'iconfont icon-caidan'
                }
            },
            {
                path: '/system/roleManagement',
                name: 'systemRole',
                component: () => import('/@/views/system/role/index.vue'),
                meta: {
                    title: 'message.router.systemRole',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: false,
                    isIframe: false,
                    roles: ['admin'],
                    icon: 'ele-ColdDrink'
                },
            },
            {
                path: '/system/userManagement',
                name: 'systemUser',
                component: () => import('/@/views/system/user/index.vue'),
                meta: {
                    title: 'message.router.systemUser',
                    isLink: '',
                    isHide: false,
                    isKeepAlive: true,
                    isAffix: false,
                    isIframe: false,
                    roles: ['admin'],
                    icon: 'iconfont icon-icon-'
                },
            }
        ]
    }
]

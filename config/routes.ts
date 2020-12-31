export default [
  {
    name: 'logger',
    icon: 'table',
    access: 'none',
    path: 'logger',
    routes: [
      {
        name: 'LoginLogManagement',
        icon: 'table',
        path: '/logger/LoginLogManagement',
        component: './logger/LoginLogManagement',
      },
      {
        name: 'OperLogManagement',
        icon: 'table',
        path: '/logger/OperLogManagement',
        component: './logger/OperLogManagement',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];

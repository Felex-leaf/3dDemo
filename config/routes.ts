export default [
    {
        path: '/',
        redirect: '/3d',
        exact: true,
    },
    {
        path: '/404',
        component: '@/pages/404',
    },
    {
        path: '/3d',
        component: '@/pages/MiNi',
        hidden: true,
    },
];

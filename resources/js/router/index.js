import { createRouter, createWebHistory } from "vue-router";
import userIndex from '../components/users/userIndex'
import userCreate from '../components/users/userCreate'
import userEdit from '../components/users/userEdit'
const routes = [
    {
        path:'/home',
        name:'users.index',
        component: userIndex
    },
    {
        path:'/users/create',
        name:'users.create',
        component: userCreate,
        auth: true,
    }, 
    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: userEdit,
        props: true,
        meta: { requiresPermission: 'edit_users', method: 'put' }, 
        auth: true,
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
})
require('./bootstrap');

import { createApp } from 'vue';
import router from './router'
import userIndex from './components/users/userIndex'


createApp({
    components: {
        userIndex
    }
}).use(router).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './utils/rem'

import { Button } from 'vant';
import { Icon } from 'vant'; 
import { Swipe, SwipeItem } from 'vant';
import { Toast, Dialog } from 'vant';

createApp(App)
.use(router)


.use(Button)
.use(Icon)
.use(Swipe)
.use(SwipeItem)
.use(Toast)
.use(Dialog)

.mount('#app');

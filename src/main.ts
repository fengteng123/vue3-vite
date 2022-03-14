import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './utils/rem'

import { Button } from 'vant';
import { Icon } from 'vant'; 
import { Swipe, SwipeItem } from 'vant';
import { Toast, Dialog } from 'vant';
import { SubmitBar } from 'vant'; 
import { Sidebar, SidebarItem } from 'vant';
import { Field, CellGroup } from 'vant';


createApp(App)
.use(router)
.use(store)

.use(Button)
.use(Icon)
.use(Swipe)
.use(SwipeItem)
.use(SubmitBar)
.use(Sidebar)
.use(SidebarItem)
.use(Field)
.use(CellGroup)
.use(Toast)
.use(Dialog)

.mount('#app');

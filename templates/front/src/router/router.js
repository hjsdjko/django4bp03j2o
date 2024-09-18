import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import dongmanxinxiList from '../pages/dongmanxinxi/list'
import dongmanxinxiDetail from '../pages/dongmanxinxi/detail'
import dongmanxinxiAdd from '../pages/dongmanxinxi/add'
import dongmanfanjuList from '../pages/dongmanfanju/list'
import dongmanfanjuDetail from '../pages/dongmanfanju/detail'
import dongmanfanjuAdd from '../pages/dongmanfanju/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussdongmanxinxiList from '../pages/discussdongmanxinxi/list'
import discussdongmanxinxiDetail from '../pages/discussdongmanxinxi/detail'
import discussdongmanxinxiAdd from '../pages/discussdongmanxinxi/add'
import discussdongmanfanjuList from '../pages/discussdongmanfanju/list'
import discussdongmanfanjuDetail from '../pages/discussdongmanfanju/detail'
import discussdongmanfanjuAdd from '../pages/discussdongmanfanju/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'dongmanxinxi',
					component: dongmanxinxiList
				},
				{
					path: 'dongmanxinxiDetail',
					component: dongmanxinxiDetail
				},
				{
					path: 'dongmanxinxiAdd',
					component: dongmanxinxiAdd
				},
				{
					path: 'dongmanfanju',
					component: dongmanfanjuList
				},
				{
					path: 'dongmanfanjuDetail',
					component: dongmanfanjuDetail
				},
				{
					path: 'dongmanfanjuAdd',
					component: dongmanfanjuAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussdongmanxinxi',
					component: discussdongmanxinxiList
				},
				{
					path: 'discussdongmanxinxiDetail',
					component: discussdongmanxinxiDetail
				},
				{
					path: 'discussdongmanxinxiAdd',
					component: discussdongmanxinxiAdd
				},
				{
					path: 'discussdongmanfanju',
					component: discussdongmanfanjuList
				},
				{
					path: 'discussdongmanfanjuDetail',
					component: discussdongmanfanjuDetail
				},
				{
					path: 'discussdongmanfanjuAdd',
					component: discussdongmanfanjuAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})


import axios, { AxiosRequestConfig } from 'axios';
import { Dialog, Toast } from 'vant';

import { useRoute, useRouter } from 'vue-router'

type methodInfo = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | undefined

export enum UrlCode {
  NO_ISLOG, // 没有登陆不允许发送请求
  ENND_ISLOG, // 有没有登陆都可以发送请求
}
interface DataInfo {
  url: string,
  method: methodInfo,
  UrlCode: UrlCode,
  data?: any,
  params?:any
}

interface data {
  url: string,
  method: methodInfo,
  data?: any,
  params?: any
}

interface AnyObject {
  [key: string]: any
}

const instance = axios.create({
  baseURL: '/api',
  timeout: 1000 * 15,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
});

const instanceFromData = axios.create({
  baseURL: '/api',
  timeout: 1000 * 15,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
});

/**
* 请求拦截
*/
instance.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  let token = localStorage.getItem('token') || '';
  config.headers = config.headers || {}
  config.headers['token'] = token;
  // 打开loading
  Toast.loading({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  });

  return config
}, (error) => {
  console.log('请求拦截错误');
  return Promise.reject(error);
})


/**
* 添加响应拦截器
*/
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  if(error.response.status===401) {
    // useRouter.
    const router = useRouter()
    const route = useRoute()
    router.push({
      path: `/accountNumber/1`,
    })
  }



  // 对响应错误做点什么
  return Promise.reject(error);
});
/**
 * 自定义错误返回值
 */
function createError(code: string | number | void, message: string | void, data: AnyObject = {}) {

  if (!message) {
    message = '系统繁忙'
  }
  if (!code) {
    code = 'ERROR'
  }
  return {
    success: false,
    code,
    message,
    data
  }
}

/**
 * 判断是否为合法后台接口数据
 */
function isIntfData(res: any): boolean {
  return res && typeof res.data === 'object' && typeof res.data.success === 'boolean'
}

/**
 * 根据请求方式 获取相应参数KEY
 * @param data 
 */
function reasonMethod(data: DataInfo) {

  let obj: data = {
    url: data.url,
    method: data.method,
  }
  if (data.method == 'post' || data.method == 'put') {
    obj.data = data.data
  } else {
    obj.params = data.params
  }
  return obj
}


export async function requestApi(data: DataInfo) {
  // 获取token, 获取缓存这里 可以再封装下
  let token: string | null = localStorage.getItem('token');
  // 当前请求需要登陆且当前token为空，进入该条件
  if (!data.UrlCode && !token) {
    return createError('', '当前页面需要登录, 请先登录')
  }

  // 获取请求参数
  let insideConfig = reasonMethod(data)
  

  // 取到token 放在网络请求里面
  try {

    let res = await instance.request(insideConfig);
    
    Toast.clear();
    // if (isIntfData(res)) {
      return res.data
    // }
    // throw createError('', `${res.data.meg}(返回数据格式有误)`, res.data)
  } catch (error) {
    console.dir(error);

    Toast.clear();
    throw createError(error.response.data.code, error.response.data.msg,)
  }

}


export async function requestApiFrom(data: DataInfo) {
  // 获取token, 获取缓存这里 可以再封装下
  let token: string | null = localStorage.getItem('token');
  // 当前请求需要登陆且当前token为空，进入该条件
  if (!data.UrlCode && !token) {
    return createError('', '当前页面需要登录, 请先登录')
  }

  // 获取请求参数
  let insideConfig = reasonMethod(data)

  // 取到token 放在网络请求里面
  try {
    let res = await instanceFromData.request(insideConfig);
    Toast.clear();
    if (isIntfData(res)) {
      return res.data
    }
    throw createError('', `${res.data.meg}(返回数据格式有误)`, res.data)
  } catch (error) {
    console.dir(error);

    Toast.clear();
    throw createError(error.response.data.code, error.response.data.msg,)
  }

}


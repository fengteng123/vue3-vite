import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Dialog, Toast } from 'vant';

import { isIntfData, createError } from './utils'

type methodInfo = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | undefined


interface InitializeConfig {
  baseURL: string,
  timeout?: number,
  contentType?: string,
}

interface insideConfigInfo {
  baseURL?: string,
  timeout?: number,
  contentType?: string
}

interface optionsInfo {
  method: methodInfo;
  url: string;
  data?: any;
  params?: any
}

// 默认路径
const ConfigBaseURL = "/api"; // 正式服务器地址

class Request {
  baseURL: string;
  timeout: number;
  contentType: string;

  constructor(config: InitializeConfig) {
    // 默认配置参数
    let defaultConfig: any = {
      baseURL: "",
      timeout: 1000 * 15,
      contentType: "application/x-www-form-urlencoded",
    };

    // requet文件有传入使用传入配置 没有 传入使用默认配置
    if (Object.prototype.toString.call(config) == "[object Object]") {
      for (let key in defaultConfig) {
        let configKey = config[key as keyof typeof config]
        // 防止传入参数出现空值，导致后续判断出错
        if (configKey != null && configKey !== "") {
          defaultConfig[key] = configKey;
        }
      }
    }

    this.baseURL = defaultConfig.baseURL;
    this.timeout = defaultConfig.timeout;
    this.contentType = defaultConfig.contentType;
  }


  interceptors = (instance: AxiosInstance) => {


    // 请求拦截
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
      throw Promise.reject(error);
    })

    // 响应拦截
    instance.interceptors.response.use((response) => {
      alert('响应拦截')
      return response
    }, (error) => {

      let { message, response, config } = error;


      console.dir(error);


      // 网络超时判断 利用createError 组装错误 最后抛出
      // if(error.code === 'ECONNABORTED' || error.message ===   "Network Error" ||  error.message.includes("timeout")){  }

      alert('响应拦截错误')
      throw Promise.reject(error);
    })
  }

  /**
   * 根据具体api文件设置请求
   */
  getInsideConfig = (insideConfig: insideConfigInfo = {}) => {
    //  默认参数配置
    const config = {
      timeout: insideConfig.timeout || this.timeout,
      baseURL: insideConfig.baseURL || this.baseURL,
      headers: {
        "Content-type": insideConfig.contentType || this.contentType
      }
    }

    return config
  }



  http = async (options: optionsInfo, insideConfig: insideConfigInfo) => {
    let config: AxiosRequestConfig<any> = this.getInsideConfig(insideConfig);
    const instance = axios.create(config);

    this.interceptors(instance)

    try {
      let res = await instance.request(options)
      Toast.clear();
      if (isIntfData(res)) {
        return res.data
      }

      // 请求成功 但 不符合前台格式规定 抛出错误
      throw createError('', `${res.data.meg}(返回数据格式有误)`, res.data);
    } catch (error) {
      Toast.clear();
      console.dir(error);
      throw createError(error.response.data.code, error.response.data.msg,)

    }
  }






}



export const request = new Request({
  baseURL: ConfigBaseURL,
  contentType: "application/json;charset=UTF-8",
}).http;

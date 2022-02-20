interface UrlMapCode {
  NO_LOGIN: number,
  NEED_LOGIN: number
}

export const UrlMapCode:UrlMapCode = {
  NO_LOGIN: 0, // 不需要登陆就可以调用接口
  NEED_LOGIN: 1, // 需要登陆才可以调用 
}
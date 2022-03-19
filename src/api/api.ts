import { requestApi,requestApiFrom, UrlCode } from "../utils/request"

// export const addOrUpdate = (question:any) => {
//   return requestApi({
//     url: "/hxcommunity/loadPager",
//     method: 'post',
//     UrlCode:UrlCode.NO_ISLOG,
//     data: question,
//   });
// }

/**
 * 登陆
 */
export const oauthLogin = (question:any) => {
  return requestApiFrom({
    url: "/oauth/login",
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    params: question,
  });
}

/**
 * 注册
 */
export const registerUser = (question:any) => {
  return requestApi({
    url: "/user",
    method: 'post',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}
/**
 * 查询用户信息
 */

export const userDetails = (question:any) => {
  return requestApi({
    url: "/user/info",
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}

/**
 * 查询品类
 */
export const categorySearch = (question:any) => {
  return requestApi({
    url: `/category/search/1/${question}`,
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}

/**
 * 查询类
 */
export const brandCategory = (question:any) => {
  return requestApi({
    url: `/brand/category/${question}`,
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    data: {},
  });
}

/**
 * 查询商品
 */
export const spuSearch = (question:any) => {
  return requestApi({
    url: `spu/search/1/15`,
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    params: question,
  });
}
/**
 * 查询单个商品
 */
export const skuSearch = (question:any) => {
  return requestApi({
    url: `/sku/search`,
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    params: question,
  });
}

/**
 * 加入购物车
 */
export const cart = (question:any) => {
  return requestApi({
    url: `cart`,
    method: 'put',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}

/**
 * 查看购物车
 */

export const selectCart = (question:any) => {
  return requestApi({
    url: `cart`,
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}

/**
 * 删除商品
 */

export const delectCart = (question:any) => {
  return requestApi({
    url: `cart`,
    method: 'post',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}

/**
 * 结算
 */
export const order  = (question:any) => {
  return requestApi({
    url: `order `,
    method: 'post',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}

/**
 * 支付
 */
export const pay  = (question:any) => {
  return requestApi({
    url: `pay`,
    method: 'post',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}
/**
 * 查询订单
 */
export const orderAll  = (question:any) => {
  return requestApi({
    url: `order/all`,
    method: 'get',
    UrlCode:UrlCode.NO_ISLOG,
    params: question,
  });
}

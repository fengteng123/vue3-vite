interface AnyObject {
  [key: string]: any
}

/**
 * 判断是否为合法后台接口数据
 */
export function isIntfData(res: any): boolean {
  return res && typeof res.data === 'object' && typeof res.data.success === 'boolean'
}
/**
 * 自定义错误返回值
 */
export function createError(code: string | number | void, message: string | void, data: AnyObject = {}) {
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
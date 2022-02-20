import { requestApi } from "../utils/request"
import { methodInfo, UrlCode } from '../utils/request'


export const addOrUpdate = (question:any) => {
  return requestApi({
    url: "/hxcommunity/loadPager",
    method: methodInfo.post,
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}
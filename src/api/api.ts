import { requestApi, UrlCode } from "../utils/request"

export const addOrUpdate = (question:any) => {
  return requestApi({
    url: "/hxcommunity/loadPager",
    method: 'post',
    UrlCode:UrlCode.NO_ISLOG,
    data: question,
  });
}
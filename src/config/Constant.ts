interface UrlMapCode {
  NO_LOGIN: number,
  NEED_LOGIN: number
}

export const UrlMapCode: UrlMapCode = {
  NO_LOGIN: 0, // 不需要登陆就可以调用接口
  NEED_LOGIN: 1, // 需要登陆才可以调用 
}

/**
 * 页面轮播图地址
 */
export const swipeImageUrl: string[] = [
  'https://img14.360buyimg.com/pop/s1180x940_jfs/t1/104921/33/21246/82189/620b05e0E5d05e662/4692b745e787f12b.jpg.webp',
  'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/164493/29/26924/90625/620b6746Ef3441fa6/2734654411565aad.jpg.webp',
  'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/10034239783228/FocusFullshop/CkNqZnMvdDEvMTk3NjM3LzEyLzg4NTUvODcyMDAyLzYxNDUzOTlmRTc1ZjA2MTI5LzM5MzFiNzFmZmRhM2RiYmIucG5nEgk1LXR5XzBfNTYwAjjui3pCEAoMdHJhbW9s56yU57G7EABCEAoM54mp576O5Lu35buJEAFCEAoM56uL5Y2z5oqi6LStEAJCCgoG57K-6YCJEAdYvIKxuoSkAg/cr/s/q.jpg',
  'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/173456/26/27809/84631/6205c2c1E469faf18/59f20509e1316433.jpg.webp',
]
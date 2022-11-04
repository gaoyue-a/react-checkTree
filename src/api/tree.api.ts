import request from "./request"

export const getTreeList = (params?: any) =>
  request({
    method: "get",
    url: `JsonData/tree.json`,
    params
  })

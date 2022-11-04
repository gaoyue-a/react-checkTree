import React, { useState, useEffect, useCallback, useMemo } from "react"
import type { CheckBoxTree } from "./tree.inter"
import "./tree.less"

const Tree = (props: CheckBoxTree) => {
  const { treeData } = props
  const [treeArray, setTreeArry] = useState(treeData)
  // 把数组的数据 转成 树形数据
  // 巧妙利用浅复制
  const factoryArrayData = () => {
    let obj = {},
      rootId = null
    // treeData.map((v, i) => {
    //   if (v[this.state.parentId] || v[this.state.parentId] === 0) {
    //     if (obj[v[this.state.parentId]]) {
    //       // obj[pid的值] 存放根节点下面的数据
    //       // obj = {
    //       //   0: {
    //       // {
    //       //         id: 0,
    //       //         value: 0,
    //       //         label: '根节点',
    //       //         pid: null
    //       //     },
    //       //     children: [{
    //       //       id: 1,
    //       //       value: 1,
    //       //       label: '父节点01',
    //       //       pid: 0
    //       //     }, {
    //       //       id: 2,
    //       //       value: 2,
    //       //       label: '父节点02',
    //       //       pid: 0
    //       //     },]
    //       //   },
    //       //   1: {
    //       //     id: 1,
    //       //     value: 1,
    //       //     label: '父节点01',
    //       //     pid: 0,
    //       //     children: [{
    //       //       id: 11,
    //       //       value: 11,
    //       //       label: '父节点11',
    //       //       pid: 1
    //       //     }],
    //       //   },
    //       //   2: {
    //       //     id: 2,
    //       //     value: 2,
    //       //     label: '父节点02',
    //       //     pid: 0
    //       //   },
    //       //   11: {
    //       //     id: 11,
    //       //     value: 11,
    //       //     label: '父节点11',
    //       //     pid: 1
    //       //   },
    //       // }
    //       if (obj[v[this.state.parentId]].children) {
    //         obj[v[this.state.parentId]].children.push(v)
    //       } else {
    //         obj[v[this.state.parentId]].children = [v]
    //       }
    //     } else {
    //       debugger
    //       obj[v[this.state.parentId]] = {
    //         children: [v]
    //       }
    //     }
    //   } else {
    //     // pid是null的， 把它的id作为根节点
    //     rootId = v[this.state.id]
    //   }
    //   if (obj[v[this.state.id]]) {
    //     v.children = obj[v[this.state.id]].children
    //   }
    //   obj[v[this.state.id]] = v
    // })
  }

  return <div className="tree"> show</div>
}
export default Tree

import { useState, useEffect } from "react"
import "./App.css"
import * as treeApi from "./api/tree.api"
import Tree from "./component/tree"
function App() {
  // const [treeData, setTreeData] = useState([])
  // useEffect(() => {
  //   treeApi.getTreeList().then((res) => {
  //     console.log(res.data, "xxxxxxx")
  //     // setTreeData(res.data)
  //   })
  // })
  const treeData = [
    {
      id: 0,
      value: 0,
      label: "根节点",
      pid: null,
      children: [
        {
          id: 1,
          value: 1,
          label: "父节点01",
          pid: 0,
          children: [
            {
              id: 11,
              value: 11,
              label: "父节点11",
              pid: 1,
              children: [
                {
                  id: 111,
                  value: 111,
                  label: "子节点111",
                  pid: 11
                },
                {
                  id: 112,
                  value: 112,
                  label: "子节点112",
                  pid: 11
                },
                {
                  id: 113,
                  value: 113,
                  label: "子节点113",
                  pid: 11
                }
              ]
            },
            {
              id: 12,
              value: 12,
              label: "父节点12",
              pid: 1,
              children: [
                {
                  id: 121,
                  value: 121,
                  label: "子节点121",
                  pid: 12
                },
                {
                  id: 122,
                  value: 122,
                  label: "子节点122",
                  pid: 12
                },
                {
                  id: 123,
                  value: 123,
                  label: "子节点123",
                  pid: 12
                }
              ]
            },
            {
              id: 13,
              value: 13,
              label: "父节点13",
              pid: 1
            }
          ]
        },
        {
          id: 2,
          value: 2,
          label: "父节点02",
          pid: 0,
          children: [
            {
              id: 21,
              value: 21,
              label: "父节点21",
              pid: 2
            },
            {
              id: 22,
              value: 22,
              label: "父节点22",
              pid: 2
            }
          ]
        },
        {
          id: 3,
          value: 3,
          label: "父节点03",
          pid: 0,
          children: [
            {
              id: 31,
              value: 31,
              label: "父节点31",
              pid: 3
            },
            {
              id: 32,
              value: 32,
              label: "父节点32",
              pid: 3
            }
          ]
        }
      ],
      open: true
    }
  ]
  return (
    <div className="App">
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Tree treeData={treeData}></Tree>
    </div>
  )
}

export default App

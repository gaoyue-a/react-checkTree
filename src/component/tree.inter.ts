export interface TreeNode {
  name?: string
  icon?: string
  path?: string
  children?: TreeNode[]
  id?: string | number,
    value: string | number,
    label: string
}
// checkBoxTree
export interface CheckBoxTree {
  treeData?: TreeNode[]
  selectChange?: () => void
  nodeClick?: () => void
}

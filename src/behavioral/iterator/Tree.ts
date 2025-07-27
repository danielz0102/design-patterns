import { BreadthFirstIterator } from './iterators/BreadthFirstIterator'
import { DepthFirstIterator } from './iterators/DepthFirstIterator'
import { Iterator } from './types'

export class TreeNode {
  public right: TreeNode | null = null
  public left: TreeNode | null = null

  constructor(
    public value: number,
    public data: unknown
  ) {}
}

export class Tree {
  constructor(public root: TreeNode | null = null) {}

  insert(value: number, data: unknown): void {
    const newNode = new TreeNode(value, data)

    if (!this.root) {
      this.root = newNode
      return
    }

    let parent: TreeNode | null = null
    let current: TreeNode | null = this.root

    while (current) {
      parent = current

      if (parent.value === newNode.value) {
        parent.data = newNode.data
        return
      }

      current = current.value > newNode.value ? current.left : current.right
    }

    if (parent) {
      const side = parent.value > newNode.value ? 'left' : 'right'
      parent[side] = newNode
    }
  }

  getBreadthFirstIterator(): Iterator<TreeNode> {
    return new BreadthFirstIterator(this)
  }

  getDepthFirstIterator(): Iterator<TreeNode> {
    return new DepthFirstIterator(this)
  }
}

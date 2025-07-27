import { Tree, TreeNode } from '../Tree'
import { Iterator } from '../types'

export class DepthFirstIterator implements Iterator<TreeNode> {
  private current: TreeNode | null = null

  constructor(private tree: Tree) {
    this.current = this.tree.root
  }

  getNext(): TreeNode {
    if (!this.current) {
      throw new Error('No more nodes to traverse.')
    }

    const node = this.current

    if (this.current.left) {
      this.current = this.current.left
    } else if (this.current.right) {
      this.current = this.current.right
    } else {
      let parent = this.findParent(this.tree.root, this.current)

      while (parent && (parent.right === this.current || !parent.right)) {
        this.current = parent
        parent = this.findParent(this.tree.root, this.current)
      }

      this.current = parent ? parent.right : null
    }

    return node
  }

  hasMore(): boolean {
    return this.current !== null
  }

  reset(): void {
    this.current = this.tree.root
  }

  private findParent(root: TreeNode | null, child: TreeNode): TreeNode | null {
    if (!root || root === child) {
      return null
    }

    if (root.left === child || root.right === child) {
      return root
    }

    return (
      this.findParent(root.left, child) || this.findParent(root.right, child)
    )
  }
}

import { Tree, TreeNode } from '../Tree'
import { Iterator } from '../types'

export class BreadthFirstIterator implements Iterator<TreeNode> {
  private current: TreeNode | null = null
  private queue: TreeNode[] = []

  constructor(private tree: Tree) {
    this.current = this.tree.root

    if (this.current) {
      this.queue.push(this.current)
    }
  }

  getNext(): TreeNode {
    if (!this.hasMore()) {
      throw new Error('No more nodes to traverse.')
    }

    this.current = this.queue.shift()!

    if (this.current.left) {
      this.queue.push(this.current.left)
    }

    if (this.current.right) {
      this.queue.push(this.current.right)
    }

    return this.current
  }

  hasMore(): boolean {
    return this.queue.length > 0
  }

  reset(): void {
    this.current = this.tree.root
    this.queue = []

    if (this.current) {
      this.queue.push(this.current)
    }
  }
}

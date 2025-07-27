import { Tree } from './Tree'

const tree = new Tree()
tree.insert(10, 'Root')
tree.insert(5, 'Left Child')
tree.insert(15, 'Right Child')
tree.insert(3, 'Left Grandchild')
tree.insert(7, 'Right Grandchild')

tree.insert(12, 'Left Grandchild of Right Child')
tree.insert(18, 'Right Grandchild of Right Child')

const depthFirstIterator = tree.getDepthFirstIterator()
console.log('Depth First Traversal:')
while (depthFirstIterator.hasMore()) {
  console.log(depthFirstIterator.getNext().data)
}

console.log('--------------------')

const breadthFirstIterator = tree.getBreadthFirstIterator()
console.log('Breadth First Traversal:')
while (breadthFirstIterator.hasMore()) {
  console.log(breadthFirstIterator.getNext().data)
}

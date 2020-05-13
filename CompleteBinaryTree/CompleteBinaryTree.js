// INSTRUCTIONS

// Definition: According to Wikipedia, a complete binary tree is a binary tree "where every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible."

// The Wikipedia page referenced above also mentions that "Binary trees can also be stored in breadth-first order as an implicit data structure in arrays, and if the tree is a complete binary tree, this method wastes no space."

// Your task is to write a method (or function) that takes an array (or list, depending on language) of integers and, assuming that the array is ordered according to an in-order traversal of a complete binary tree, returns an array that contains the values of the tree in breadth-first order.


// LINK

// https://www.codewars.com/kata/5c80b55e95eba7650dc671ea/train/javascript


// SOLUTION

function completeBinaryTree(a) {
  function process(n, tree, inData) {
    if (n >= tree.length) return;

    process(2 * n + 1, tree, inData);
    if (n < tree.length) tree[n] = inData.shift();
    process(2 * n + 2, tree, inData);
  }

  let tree = a.slice();
  process(0, tree, a);
  return tree;
}


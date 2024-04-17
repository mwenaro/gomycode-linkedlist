// BST - BINARY SEARCH TREE

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  //   12 9 10 25 30 19 7 2 100
  //   12
  //   |     |

  // method for inserting
  insert(data) {
    // check if roor is empty
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    searchAndInsert(this.root, newNode);

    // insert Node
    function searchAndInsert(root, newNode) {
      if (newNode.data > root.data) {
        //right branch
        if (root.right == null) {
          root.right = newNode;
        } else {
          searchAndInsert(root.right, newNode);
        }
      } else {
        //left branch

        if (root.left == null) {
          root.left = newNode;
        } else {
          searchAndInsert(root.left, newNode);
        }
      }
    }
  }
}

let bst = new BST();
bst.insert(12);

console.log({ bst });

// LIFO

class Stack {
  constructor() {
    this.dataArr = [];
  }

  //push
  push(...data) {
    return this.dataArr.push(...data);
  }

  //pop
  pop() {
    return this.isEmpty() ? null : this.dataArr.pop();
  }
  //peek
  peek() {
    let lastVal = this.dataArr[this.dataArr.length - 1];

    return lastVal ?? null;
  }
  //isEmpty
  isEmpty() {
    return this.dataArr.length === 0;
  }

  //size
  size() {
    return this.dataArr.length;
  }

  //print
  print() {
    // let strData = this.dataArr.reduce((result,val)=>result += `${}`)
    let strData = this.dataArr.join(" => ");
    console.log(strData);
  }
}
//12 9 10 11 30 78
// let stack = new Stack();
// stack.push(12);
// stack.push(9);
// stack.push(10);
// stack.push(11);
// stack.push(30);
// stack.push(78);
// stack.print();
// // let removedVal = stack.pop()
// // console.log({removedVal, size:stack.size()})
// // console.log({empry:stack.isEmpty()})
// // stack.print()
// let peekedVal = stack.peek();
// console.log({ peekedVal });
// stack.print();

module.exports = Stack

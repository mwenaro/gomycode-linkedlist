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


module.exports = Stack

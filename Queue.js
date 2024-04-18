            // FIFO


 class Queue{
    constructor(){
        this.myArr = [];
    } 


    // enqueue

    enqueue(...data) {
        return this.myArr.push(...data);
    }


    // dequeue

    dequeue() {
        return this.myArr.shift()
    }

    // peek

    peek() {
        let lastVal = this.myArr[this.myArr.length - 1];
    
        return lastVal ?? null;
      }

    // isEmpty

    isEmpty() {
        return this.myArr.length === 0;
    }

    // size

    size() {
        return this.myArr.length;
    }

    // print

    print() {
        // let strData = this.dataArr.reduce((result,val)=>result += `${}`)
        let strData = this.myArr.join(" => ");
        console.log(strData);
      }

    // front

    // clear
 }

 let q = new Queue()
 q.enqueue(12)
 q.enqueue(20)
 q.enqueue(31)
 q.enqueue(2)
 q.enqueue(44)


 q.print()

 q.dequeue()
 q.print()

module.exports= Queue

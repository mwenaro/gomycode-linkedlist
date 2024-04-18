            // FIFO

 class Queue{
    constructor(){
        this.myArr = [];
    } 


    // enqueue

    enqueue(...data) {
        return this.myArr.enqueue(...data);
    }


    // dequeue

    dequeue(...data) {
        return this.myArr.dequeue(...data)
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
        let strData = this.dataArr.join(" => ");
        console.log(strData);
      }

    // front

    // clear
 }


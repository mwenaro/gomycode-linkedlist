// linked list
class Node{

    constructor(data, next = null){
      this.data = data
        this.next = next;
    }
}

//Linked list class
class  LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }

    
    // addFront
    addFront(data){
       let newNode = new Node(data)
       let current = this.head;
       
        if(!current){
            this.head = newNode;
            this.length++
            return;//the ends here
        }
        
            newNode.next = current
            this.head = newNode
                   
            this.length++
    }


    // add to tail
    addToTail(data){
let newNode = new Node(data)
let current = this.head

        if(!current){
            this.head = newNode;
            this.length++
            return;
        }

        while(current.next){
            current = current.next
          this.length++  
        }
        current.next = newNode
     
       
    }


    addAt(data, index){
     if(index < 0 || index > this.length) {console.log("Invalid index");return;}
        
     let newNode = new Node(data),
         current = this.head;
        
        if(index === 0){
            newNode.next = current;
            this.head = newNode
            this.length++
            return;
        }
        
     let prev = null,
         currentIndex = 0;

        while(current && currentIndex < index){
            prev = current
            current = current.next
            
            currentIndex++;
        }

        if(currentIndex === index){
            newNode.next = current
            prev.next = newNode
            this.length++
        }else{
            console.log("Index out of bound")
        }

        
    }

    //print
    print(){
        let current = this.head
        let result =""
        while(current){
            // console.log(current.data)
            result += `${current.data} => `
            current = current.next
        }

        result += " => null"
        console.log(result)
    }



}



let ll = new LinkedList()
ll.addToTail(1)
ll.addFront(12)

ll.addFront(100)
ll.addToTail(1000)
ll.addAt(500, 2)
ll.print()
console.log({ll, length : ll.length})
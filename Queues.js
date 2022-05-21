class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor()(
        this.firts=null;
        this.last = null;
        this.length = 0;
    )

    function peek(){
        return this.firts
    }

    function enqueue(params) {

        const newNode = new Node(value);
        if(this.length==0){
            this.firts = newNode;
            this.last = newNode;        
        }else{
            this.last.next = newNode;
            this.last = newNode;            
        }
        this.length++;
        return this; 


    }

    function dequeue(){
        if(this.length===0){
            return 'No hay elementos'
        }else if(this.length===1){
            this.firts=null;
            this.last = null;
        }else{
            this.firts= this.firts.next;        
        }
        this.length--;
        return this;

    }

}
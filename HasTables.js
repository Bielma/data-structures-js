//Hash Tables en js se llaman objects.
//Key:Value
console.log('hola')



class HashTable{
    constructor(size){
        this.data = new Array(size)
    }
    hashMethod(key){
        let hash = 0;
        for(let i = 0; i<key.length){
            hash = (hash+key.charCodeAt(i)*1) % this.data.length

        }
        return hash;
    }    
}
const myHashTable = new HashTable(50)
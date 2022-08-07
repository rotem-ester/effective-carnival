class CircularQueue{
    queue = []
    queueSize
    firstElementIndex
    lastElementIndex
    empty
    constructor(queueSize){
        this.queueSize = queueSize
        this.firstElementIndex = 0
        this.lastElementIndex = 0
        this.empty = true
    }

    push(str){
       if (this.empty){
           this.queue[this.firstElementIndex] = str
           this.empty = false
           return
       }

       const nextIndex = (this.lastElementIndex + 1) % this.queueSize
       if (nextIndex === this.firstElementIndex){
           console.error('queue is full!')
           return
       }

       this.queue[nextIndex] = str
       this.lastElementIndex = nextIndex
    }

    pop(){
        if(this.empty){
            console.error('queue is empty!')
        }
        const res = this.queue[this.firstElementIndex]

        if(this.firstElementIndex === this.lastElementIndex){
            this.empty = true
            return res
        }

        this.firstElementIndex = (this.firstElementIndex + 1) % this.queueSize
        return res
    }

    peek(){
        return this.queue[this.firstElementIndex]
    }

    printQueue(){
        if(this.empty){
            console.log('[ empty ]')
            return
        }
        let i = this.firstElementIndex
        let resStr = ''

        while(i !== this.lastElementIndex){
            resStr = resStr.concat(`${i}: ${this.queue[i]} --> `)
            i = (i + 1) % this.queueSize
        }
        resStr = resStr.concat(`${i}: ${this.queue[i]}`)

        console.log(resStr)
    }
}

const queue = new CircularQueue(7)
queue.push('hello0')
queue.push('hello1')
queue.push('hello2')
queue.push('hello3')
queue.push('hello4')
queue.push('hello5')
queue.push('hello6')
queue.printQueue()

queue.pop()
queue.pop()
queue.pop()
queue.printQueue()

queue.push('hello7')
queue.push('hello8')
queue.printQueue()

queue.pop()
queue.pop()
queue.pop()
queue.printQueue()

queue.pop()
queue.pop()
queue.pop()
queue.printQueue()

queue.push('hello0')
queue.push('hello1')
queue.push('hello2')
queue.push('hello3')
queue.push('hello4')
queue.push('hello5')
queue.push('hello6')
queue.printQueue()

queue.pop()
queue.pop()
queue.pop()
queue.printQueue()

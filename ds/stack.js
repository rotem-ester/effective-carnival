class Stack{
    size
    stack
    nextOut
    constructor(size){
        this.size = size
        this.stack = []
        this.nextOut = -1
    }

    push(num){
        if (this.nextOut === this.size - 1){
            console.error('stack is full!')
            return
        }

        this.stack[this.nextOut + 1] = num
        this.nextOut += 1
    }

    pop(){
        if(this.nextOut === -1){
            console.error('stack is empty!')
            return
        }

        const res = this.stack[this.nextOut]
        this.nextOut -= 1
        return res
    }

    peek(){
        if(this.nextOut === -1){
            return null
        }
        return this.stack[this.nextOut]
    }

    sort(){
        const helper = new Stack(this.size)

        let stackNext, helperNext
        while(this.peek() !== null) {
            stackNext = this.peek()
            helperNext = helper.peek()

            if (helperNext === null || helperNext >= stackNext){
                helper.push(stack.pop())
            } else if (helperNext < stackNext) {
                stack.pop()
                while(helper.peek() !== null && helper.peek() <= stackNext) {
                    stack.push(helper.pop())
                }
                helper.push(stackNext)
            }
        }

        this.stack = helper.stack
        this.nextOut = helper.nextOut
    }

    printStack(){
        if (this.nextOut === -1){
            console.log('[ empty ]')
            return
        }
        let current = this.nextOut
        while(current >= 0){
            console.log(this.stack[current])
            console.log('____')
            current -= 1
        }
    }
}

const stack = new Stack(7)
stack.push(-2)
stack.push(-1)
stack.push(-2)
stack.push(0)
stack.push(4)
stack.push(1)
stack.push(5)

stack.printStack()

stack.sort()

// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
console.log('----------------sorted----------------')

stack.printStack()
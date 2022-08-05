class ListNode {
    data
    next
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    #head
    #current

    constructor(head){
        this.head = head
        this.current = head
    }

    getHead() {
        return this.head
    }

    getCurrent() {
        return this.current
    }

    next() {
        if (this.current === null) {
            return null
        }
        this.current = this.current.next
        return this.current
    }

    reset() {
        this.current = this.head
    }

    add(data) {
        let current = this.head
        while(current.next !== null) {
            current = current.next
        }

        const newNode = new ListNode(data)
        current.next = newNode
    }

    delete(data) {

    }

    flip() {
        let prev = null
        let current = this.head.next
        let next = null

        while (current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head.next = prev
    }

    printList() {
        let current = this.head
        while(current.next !== null){
            console.log(`| ${current.data} | --> `)
            current = current.next
        }

        console.log(`| ${current.data} |`)
    }

    length() {
        let count = 0
        let current = this.head
        while (current.next !== null) {
            count += 1
            current = current.next
        }
        return count
    }
}

const head = new ListNode("head")
const myList = new LinkedList(head)

myList.add('node1')
myList.add('node2')
myList.add('node3')
myList.add('node4')
myList.add('node5')
myList.add('node6')
myList.add('node7')
myList.add('node8')

myList.printList()

console.log(myList.length())



class ListNode {
    data
    next
    constructor(data, next) {
        this.data = data
        this.next = next
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

    add(node) {
        let current = this.head
        while(current && current.next !== null) {
            current = current.next
        }

        current.next = node
    }

    delete(data) {
        let current = this.head
        let prev = null

        if (data === this.head.data) {
            console.error('you cannot remove the head of the list!')
            return
        }

        while(current.data !== data && current.next !== null) {
            prev = current
            current = current.next
        }

        if (current.data === data) {
            prev.next = current.next
            current.next = null
        }
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

    hasLoop() {
        const map = new Map()
        let current = this.head

        while(current.next !== null && !map.get(current.next)){
            map.set(current.next, current.next)
            current = current.next
        }

        if(current.next === null) {
            return false
        }

        return true
    }

    openLoop() {
        const map = new Map()
        let current = this.head

        while(current.next !== null && !map.get(current.next)){
            map.set(current.next, current.next)
            current = current.next
        }

        if(current.next === null) {
            return
        }

        current.next = null
    }

    intersect(otherList){
        const map = new Map()
        let current = this.head.next
        while(current !== null){
            map.set(current, current)
            current = current.next
        }

        let otherCurrent = otherList.getHead().next

        while(otherCurrent !== null) {
            if (map.get(otherCurrent)) {
                return true
            }
            otherCurrent = otherCurrent.next
        }

        return false
    }

    seperate(otherList) {
        const map = new Map()
        let current = this.head
        while(current.next !== null){
            map.set(current.next, current.next)
            current = current.next
        }

        let otherCurrent = otherList.getHead()

        while(otherCurrent.next !== null) {
            if (map.get(otherCurrent.next)) {
                otherCurrent.next = null
                break
            }
            otherCurrent = otherCurrent.next
        }
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

const head = new ListNode("head", null)
const otherHead = new ListNode("other-head", null)
const myList = new LinkedList(head)
const otherList = new LinkedList(otherHead)

const node1 = new ListNode("node1", null)
const node2 = new ListNode("node2", null)
const node3 = new ListNode("node3", null)
const node4 = new ListNode("node4", null)
const node5 = new ListNode("node5", null)
const node6 = new ListNode("node6", null)
const node7 = new ListNode("node7", node1)
const node8 = new ListNode("node8", null)

myList.add(node1)
myList.add(node2)
myList.add(node3)
myList.add(node4)
otherList.add(node5)
otherList.add(node6)
otherList.add(node7)
otherList.add(node8)

myList.printList()
otherList.printList()
console.log(otherList.intersect(myList))
otherList.seperate(myList)
myList.printList()
otherList.printList()

// myList.openLoop()
// console.log(myList.hasLoop())
// myList.printList()

// myList.printList()

// console.log(myList.length())



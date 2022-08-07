class DllNode{
    data
    prev
    next
    constructor(data, prev, next){
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class DllList {
    #head
    constructor(head) {
        this.head = head
    }

    add(node){
        let current = this.head

        while (current.next !== null){
            current = current.next
        }
        node.prev = current
        current.next = node
    }

    addBefore(node, before){
        let current = this.head

        while(current.next !== before && current.next !== null) {
            current = current.next
        }

        if (current.next === null){
            console.error(`node ${before} does not exist on the list!`)
            return
        }

        node.next = current.next
        node.prev = current
        current.next.prev = node
        current.next = node
    }

    remove(node) {
        let prev
        let current = this.head
        let next = this.head.next

        while(current !== node && current !== null){
            current = current.next
        }

        current.prev.next = current.next
        current.next.prev = current.prev
        current.next = null
        current.prev = null
    }

    printList() {
        let current = this.head
        while(current.next !== null){
            console.log(`| prev: ${current.prev?.data}, data: ${current.data}, next: ${current.next.data} | <--> `)
            current = current.next
        }

        console.log(`| prev: ${current.prev?.data}, data: ${current.data}, next: ${current.next?.data} |`)
    }
}

const head = new DllNode("head", null, null)
// const otherHead = new ListNode("other-head", null)
const myList = new DllList(head)
// const otherList = new LinkedList(otherHead)

const node1 = new DllNode("node1", null, null)
const node2 = new DllNode("node2", null, null)
const node3 = new DllNode("node3", null, null)
const node4 = new DllNode("node4", null, null)
const node5 = new DllNode("node5", null, null)
const node6 = new DllNode("node6", null, null)
const node7 = new DllNode("node7", null, null)
const node8 = new DllNode("node8", null, null)

myList.add(node1)
myList.add(node2)
myList.add(node3)
myList.add(node4)
myList.add(node5)
myList.add(node6)
myList.add(node7)
myList.addBefore(node8, node3)

myList.printList()

myList.remove(node8)

myList.printList()

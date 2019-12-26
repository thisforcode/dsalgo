function ListNode(val) {
   this.val = val;
    this.next = null;
 }

 var mergeTwoLists = function(l1, l2) {
    let val;
    if(!l1 && !l2){
        return l1;
    }
    if(l1 && l2 && (!isNaN(l1.val)) && (!isNaN(l2.val)) && (l1.val <= l2.val)){
            val = l1.val;
            l1 = l1.next;
        }else if(l2 && (!isNaN(l2.val))){
            val = l2.val;
            l2 = l2.next;
        }else if(l1 && (!isNaN(l1.val))){
            val = l1.val;
            l1 = l1.next;
        }
    let l3 = new ListNode(val);
    while((l1 && l1.next !== undefined) || (l2 && l2.next !== undefined)){
        if(l1 && l2 && (l1.val <= l2.val)){
            val = l1.val;
            l1 = l1.next;
        }else if(l2 && (!isNaN(l2.val))){
            val = l2.val;
            l2 = l2.next;
        }else if(l1 && (!isNaN(l1.val))){
            val = l1.val;
            l1 = l1.next;
        }
        let currentNode = l3;
        
        while(currentNode && currentNode.next != null){
            currentNode = currentNode.next;
        }
        
        let newNode = new ListNode(val);
        currentNode.next = newNode;
    }
    return l3;
};

console.log(mergeTwoLists({"val":1,"next":{"val":2,"next":{"val":4,"next":null}}},
{"val":1,"next":{"val":3,"next":{"val":4,"next":null}}}));


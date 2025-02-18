var reverseBetween = function(head, left, right) {
    let currNode = head, start = head, counter = 1;
    while(counter < left) {
        start = currNode; 
        currNode = currNode.next;
        counter++;
    }
    let tail = currNode, prev = null;
    while(counter >=  left && counter <= right){
        const next = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = next;
        counter++;
    }
    start.next = prev;
    tail.next = currNode;
    if(left > 1){
        return head;
    }else{
        return prev
    }
};
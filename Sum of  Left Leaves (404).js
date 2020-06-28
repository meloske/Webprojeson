var sumOfLeftLeaves = function(root) {
    var sum = 0;
    
    function traverse(node) {
        if (!node) {
            return;
        }
        
        traverse(node.right);  
        
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }
        
        traverse(node.left);
    }
    
    traverse(root);
    
    return sum;
};
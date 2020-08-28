// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Quick Sort algorithm to sort the array.


function quickSort(items) {
    function sort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(items, index, right);
            }
        }
        return items;
    }
    return sort(items, 0, items.length - 1);
}

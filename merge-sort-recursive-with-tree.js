// take in array
// create node
/*
* - array
* - leftChild
* - rightChild
*/
function getSortedCombinedArray(array1, array2) {
    let combinedArray = [];

    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        const value1 = array1[i];
        const value2 = array2[j];
        const isMoveLeftPointer = value1 < value2;
        const winner = isMoveLeftPointer ? value1 : value2;

        i += isMoveLeftPointer ? 1 : 0;
        j += isMoveLeftPointer ? 0 : 1;

        combinedArray = [...combinedArray, winner];

    }

    combinedArray = [...combinedArray, ...array1.slice(i), ...array2.slice(j)];

    return combinedArray;
}


function getHalfwayIndex(array) {
    return Math.floor(array.length / 2);
}

function isCreateChildren(array) {
    return array.length > 1;
}

function getLeftChild(array) {
    return isCreateChildren(array) ? getNewNode(
        array.slice(0, getHalfwayIndex(array))
    ): null
}

function getRightChild(array) {
    return isCreateChildren(array) ? getNewNode(
        array.slice(getHalfwayIndex(array))
    ): null
}

function isCreateNode(array) {
    return array.length > 0;
}


function getNewNode(array) {

    return isCreateNode(array) ? { 
        array, 
        leftChild: getLeftChild(array), 
        rightChild: getRightChild(array)
    } : null;
}

function getNodeWithSortedArray(node) {

    const isCombine = node.array.length > 1;

    const sortedLeftChild = isCombine && node.leftChild ? getNodeWithSortedArray(node.leftChild) : null;
    const sortedRightChild = isCombine && node.rightChild ? getNodeWithSortedArray(node.rightChild) : null

    const sortedLeftChildArray = sortedLeftChild?.sortedArray ?? [];
    const sortedRightChildArray = sortedRightChild?.sortedArray ?? [];

    const sortedArray = isCombine ? getSortedCombinedArray(sortedLeftChildArray,sortedRightChildArray): node.array;

    return {
        ...node,
        leftChild: sortedLeftChild,
        rightChild: sortedRightChild,
        sortedArray
    };
}


const testArray = [10, 1, 4, 6, 6, 7, 9, 0, -1];
const rootNode = getNewNode(testArray);

const sortedRootNode = getNodeWithSortedArray(rootNode);

console.log(sortedRootNode)
console.log(sortedRootNode.sortedArray)

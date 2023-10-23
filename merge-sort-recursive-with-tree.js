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

        i = isMoveLeftPointer ? i + 1 : i;
        j = isMoveLeftPointer ? j : j + 1;

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

function getChild(array, halvedArray) {

    if (isCreateChildren(array)) { 
        return getNewNode(
            halvedArray
        )
    }

    /*
        Base Case
    */
    return null;
}

function isCreateNode(array) {
    return array.length > 0;
}


function getLeftHalf(array) {
    return array.slice(0, getHalfwayIndex(array));
}

function getRightHalf(array) {
    return array.slice(getHalfwayIndex(array));
}

function getNewNode(array) {

    if (isCreateNode(array)) {
        return { 
            array, 
            leftChild: getChild(array, getLeftHalf(array)), 
            rightChild: getChild(array, getRightHalf(array))
        }
    }

    return null;
}

function isLeafNode(node) {
    return node.array.length <= 1;
}

function getSortedArrayForNode(node) {
    if (isLeafNode(node)) {
        /*
            Base Case
        */
        return node.array;
    } else {
        const sortedLeftChild = getChildNodeWithSortedArray(node, node.leftChild);
        const sortedRightChild = getChildNodeWithSortedArray(node, node.rightChild)
    
        const sortedLeftChildArray = sortedLeftChild?.sortedArray ?? [];
        const sortedRightChildArray = sortedRightChild?.sortedArray ?? [];


        return getSortedCombinedArray(sortedLeftChildArray, sortedRightChildArray)
    }
}

function getChildNodeWithSortedArray(node, childNode) {
    
    if (!isLeafNode(node) && childNode) {
        return getNodeWithSortedArray(childNode);
    } else {
        /*
            Base Case
        */
        return null;
    }
}

function getNodeWithSortedArray(node) {

    return {
        ...node,
        leftChild: getChildNodeWithSortedArray(node, node.leftChild),
        rightChild: getChildNodeWithSortedArray(node, node.rightChild),
        sortedArray: getSortedArrayForNode(node)
    };
}


const testArray = [10, 1, 4, 6, 6, 7, 9, 0, -1];
const rootNode = getNewNode(testArray);

const sortedRootNode = getNodeWithSortedArray(rootNode);

console.log(sortedRootNode)
console.log(sortedRootNode.sortedArray)

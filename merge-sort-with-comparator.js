function getCombinedSortedArrays(array1, array2, comparatorFunction) {
    let combinedArray = [];

    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        const value1 = array1[i];
        const value2 = array2[j];
        const isMoveLeftPointer = comparatorFunction(value1, value2) < 0;
        const winner = isMoveLeftPointer ? value1 : value2;

        i += isMoveLeftPointer ? 1 : 0;
        j += isMoveLeftPointer ? 0 : 1;

        combinedArray = [...combinedArray, winner];

    }

    combinedArray = [
        ...combinedArray,
        ...array1.slice(i),
        ...array2.slice(j)
    ];


    return combinedArray;
}

function mergeSort(arrayToSort, comparatorFunction) {

    let arrayOfArrays = arrayToSort.map(number => [number]);

    while(arrayOfArrays.length > 1) {
        const leftSideArray = arrayOfArrays[0];
        const rightSideArray = arrayOfArrays[1];
        const combinedSortedArrays = getCombinedSortedArrays(leftSideArray, rightSideArray, comparatorFunction);

        arrayOfArrays = [...arrayOfArrays.slice(2), combinedSortedArrays];
    }

    return arrayOfArrays?.[0] ?? []
}

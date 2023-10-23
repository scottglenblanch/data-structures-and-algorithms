function isLeftSideTheWinner(item1, item2) {
	return item1 < item2;
}

function isArraySorted(array) {
	for(let i = 0; i < array.length - 1; i++) {
		const item1 = array[i];
		const item2 = array[i + 1];
		const isFail = !isLeftSideTheWinner(item1, item2);

		if (isFail) {
			return false;
		}

	}

	return true;
}


function getSortedCombinedArray(leftArray, rightArray) {
	let sortedLeftArray = isArraySorted(leftArray) ? leftArray : mergeSort(leftArray);
	let sortedRightArray = isArraySorted(rightArray) ? rightArray : mergeSort(rightArray);
	let combinedArray = [];
	
		let i = 0
		let j = 0;
	
		while (i < sortedLeftArray.length && j < sortedRightArray.length) {
			const item1 = sortedLeftArray[i];
			const item2 = sortedRightArray[j];
			const isLeftTheWinner = item1 < item2;
	
			if (isLeftTheWinner) {
				combinedArray = [
					...combinedArray,
					item1
				];
				i++;
			} else {
				combinedArray = [
					...combinedArray,
					item2
				];
				j++
			}
	
		}
	
		combinedArray = [
			...combinedArray,
			...sortedLeftArray.slice(i),
			...sortedRightArray.slice(j)
		];
	
		return combinedArray;
	
}


function mergeSort(array) {
	// split the array in half
	const halfWayIndex = Math.floor(array.length / 2);
	const leftArray = array.slice(0, halfWayIndex);
	const rightArray = array.slice(halfWayIndex);
	// combine the array and have it sorted
	const sortedCombinedArray = getSortedCombinedArray(leftArray, rightArray);
	// return combined and sorted array

	return sortedCombinedArray;
}

console.log(
	mergeSort([10, 1, 4, 6, 6, 7, 9, 0, -1])
);

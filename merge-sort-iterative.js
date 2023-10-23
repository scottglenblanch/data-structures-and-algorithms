function getSortedCombinedArray(array1, array2) {
	let combinedArray = [];

	let i = 0
	let j = 0;

	while (i < array1.length && j < array2.length) {
		const item1 = array1[i];
		const item2 = array2[j];
		const isLeftTheWinner = item1 < item2;

		combinedArray = [
			...combinedArray,
			isLeftTheWinner ? item1 : item2
		]

		i = isLeftTheWinner ? i + 1 : i;
		j = isLeftTheWinner ? j : j + 1;

	}

	combinedArray = [
		...combinedArray,
		...array1.slice(i),
		...array2.slice(j)
	];

	return combinedArray;
}


function mergeSort(array) {

	let arrayOfArrays = array.map(item => [item])

	while(arrayOfArrays.length > 1) {
		let array1 = arrayOfArrays[0];
		let array2 = arrayOfArrays[1];
		let combinedAndSortedArray = getSortedCombinedArray(array1, array2);

		arrayOfArrays = [
			...arrayOfArrays.slice(2),
			combinedAndSortedArray
		];
	}

	return arrayOfArrays?.[0] ?? [];
}

console.log(
	mergeSort([10, 1, 4, 6, 6, 7, 9, 0, -1])
);

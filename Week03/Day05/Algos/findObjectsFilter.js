// findObjectsFilter({searchFor}, [itemsArr])

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
	let filtered = []; // arr to return
	for (let obj of items) {
		// loop over all objects in items
		let match = true; // assume object matches until we know it doesn't

		for (let key in searchObj) {
			// for each key in our search object

			if (searchObj[key] !== obj[key]) {
				// see of the current obj has the same value as the searchObj

				match = false; // if not, not a match
				break; // no need to check further keys if any key isn't a match
			}
		}
		if (match) {
			filtered.push(obj); // if current obj is match, psuh it to our return arr
		}
	}
	return filtered;
}


console.log(findObjectsFilter(searchFor1, items))
console.log(findObjectsFilter(searchFor2, items))
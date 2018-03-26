function convertObjToArr({ ...obj }) {
	return Object.keys(obj)
		.map((key) => obj[key]);
}

export default convertObjToArr;
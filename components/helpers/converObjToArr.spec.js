import convertObjToArr from './convertObjToArr';

const obj = {
	one: 'some value',
	two: 'another value',
	three: 'yet another!',
}

const arr = [
	'some value',
	'another value',
	'yet another!',
]

it('convertObjToArr should do just that', () => {
	expect(convertObjToArr(obj)).toEqual(arr);
})
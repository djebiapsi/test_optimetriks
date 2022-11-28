//Question 1
function transform(arrays) {
    let container = []
    arrays.forEach((array, key )=> {
        container[array.slice(0, 1)] = array.slice (1)
    });
    return container
}
const input = [
    ["key1", 1, 2, 3, 4],
    ["key2", 4, 5, 6, 7]
]
console.log(transform(input))
// output :
// {
// key1: [1, 2, 3, 4],
// key2: [4, 5, 6, 7],
// }


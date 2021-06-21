var info = {
    fisrtname : 'mehdi',
    lastname : 'jelloufate',
    age : 21
};
console.log(
    "hi " + info.fisrtname
);
var tl = 30 - info.age;
console.log(
    "in " + tl + ' years you gona hit 30.'
);


//es6
const add = (array1: _array1) => {
    
    const newarray = array1.map(x => {
        return x+1
    })
    console.log(newarray)

}
console.log("testos")

type _array1 = number[] 

const array1 :_array1 = [1, 2, 3, 4]

add(array1)

const animals = ['pigs', 'goats', 'sheep'];


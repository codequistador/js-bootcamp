// Primitive values: string, number, boolean, null, undefined
// Everything else is an object

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNum --> Number.prototype --> Object.prototype --> null
// Boolean: myBool --> Boolean.prototype --> Object.prototype --> null

const justin = 'justin'
console.log(justin)

const dog = new String('Sage')
console.log(dog)

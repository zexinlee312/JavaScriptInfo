function isEmpty (obj) {
  for (let key in obj) {
    if (key !== undefined) {
      return false;
    }
  }
  return true;
}

let obj = {}
console.log(isEmpty(obj));
let obj2 = {a: 'c'}
console.log(isEmpty(obj2));
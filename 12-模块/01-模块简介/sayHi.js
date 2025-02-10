console.log('say hi been imported');
console.log(import.meta);
console.log(this); // this是undefined
export function sayHi() {
  console.log('Hi');
}

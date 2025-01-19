let styles = ['Jazz', 'Blues'];
styles.push('Rock')
let mid = Math.floor(styles.length / 2);
styles[mid] = 'Classics'
console.log(styles);
let first = styles.shift();
console.log(first);
styles.unshift('Rap', 'Reggae')
console.log(styles);
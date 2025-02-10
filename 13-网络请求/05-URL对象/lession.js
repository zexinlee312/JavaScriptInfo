// new URL(url, [base])
let url1 = new URL('https://w3.huawei.com/admin');
let url2 = new URL('/admin', 'https://w3.huawei.com');

console.log('url1: ', url1);
console.log('url2: ', url2);

// protocol + host (hostname + port) + pathname + searchParam
//  + hash

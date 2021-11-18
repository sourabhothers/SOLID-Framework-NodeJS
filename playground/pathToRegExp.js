const { pathToRegexp, match, parse, compile } = require('path-to-regexp');
const { URL } = require('url');

const token = parse('/user/:name/create', {});
console.log(token);
// console.log(token[1].);

// const toPath = compile('/user/:name');
// console.log(toPath({name:"saurabh"}));

// const keys = [];
// const firstRegexp = pathToRegexp('/(user|admin)/signup/:email/(.*)/:name/:g2', keys);

// console.log(keys);

// console.log(firstRegexp.exec('/admin/signup/saurabhemail/global1/saurabh/global2'));
// const keys = [];
// const regexp1 = pathToRegexp('/user/create/name/email', keys);
// console.log(keys);
// console.log(regexp1.exec('/user/create/name/email'));

// const match1 = match('/user/create/:name/:email');
// match1('/user/create/saurabh/saurabh@gmail.com');

// const newURL=new URLSearchParams("?name=saurabh&surname=pardeshi")

// newURL.forEach(key=>{
//   console.log(key);
// })

// const parsedURL = new URL(
//   '/path?name=saurabh&surname=pardeshi',
//   'http://localhost:3000',
// );
// parsedURL.searchParams.forEach((value, name) => {
//   console.log(name, value);
// });

// for (const [name, value] of parsedURL.searchParams.entries()) {
//   console.log(name, value);
// }

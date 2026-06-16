const url=require('Node:url');

const myUrl=new URL('http://localhost:3000/about?id=101&name=Anusha');

console.log(myUrl.pathname);
console.log(myUrl.searchParams.get('id'));
console.log(myUrl.searchParams.get('name'));
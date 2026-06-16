const path=require('path');
//Used to work with file and folder paths.

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

//join paths
const fp=path.join(
  'folder',
  'users',
  'data.txt'
);

console.log(fp);
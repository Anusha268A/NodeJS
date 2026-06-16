const fs=require('fs')
const data=fs.readFileSync('sample.txt','utf-8')
console.log("file content")
console.log(data)

fs.writeFileSync(
  'output.txt',"this file was created using node.js"
)
console.log("output.txt created")

console.log(fs.readFileSync('output.txt','utf-8'));
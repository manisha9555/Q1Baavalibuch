const fs=require("fs");
// bolocking syn
console.log("1")
const result=fs.readFileSync('contact.txt','utf-8');
console.log(result);
//  result asyn  deta h non blocking
fs.readFile('contact.txt','utf-8',(err,result)=>{
    console.log(result);
});
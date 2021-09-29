let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j] > numbers[j + 1])
        {         
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    
    }
}

console.log("Numbers list After sorting: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)

///////////////////////////////////////////////////////////
var fs=require('fs');
var readf=fs.readFileSync('data.txt','utf-8')

console.log("reading file : ", readf)


let s=readf.split(',');
console.log('s= ',s);
for(let i = 0 ; i < s.length ; i++)
{
    for(let j = 0 ; j < s.length - 1 ; j++)
    {
        if(s[j] > s[j + 1])
        {         
            let temp1 = s[j];
            s[j] = s[j + 1]
            s[j + 1] = temp1;
        }
    
    }
}
const fs = require('fs')
  
fs.writeFile('out.txt', s, (err) => {
      
    if (err) throw err;

})
const fs = require("fs")
const employees = []

employees.push({
    "name":"test1",
    "salary":1000,
    "id":1001
});
const test2 = {
    "name":"test2",
    "salary":9000,
    "id":1002
}
employees.push(test2)
employees.push({
    "name":"test3",
    "salary":5000,
    "id":1003
})
fs.writeFileSync("jsondata.json",JSON.stringify(employees))
console.log(JSON.stringify(employees))
const Schema = require("./employees_pb");
const fs = require("fs")
const test1 = new Schema.Employee();
test1.setId(1011);
test1.setName("Test1");
test1.setSalary(10000);


const test2 = new Schema.Employee();
test2.setId(1013);
test2.setName("Test2");
test2.setSalary(10001);

const employees = new Schema.Employees();
employees.addEmployees(test1);
employees.addEmployees(test2);
const bytes = employees.serializeBinary()
fs.writeFileSync("employeeBinary",bytes)

/* Deserializing */
const employeesfromBinary = Schema.Employees.deserializeBinary(bytes);
console.log(employeesfromBinary.toString());
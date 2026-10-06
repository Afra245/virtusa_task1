const readline = require("readline");
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log("\n--- Student Details ---");
    console.log(`Name  : ${this.name}`);
    console.log(`Age   : ${this.age}`);
    console.log(`Grade : ${this.grade}`);
  }
  isPassed() {
    return this.grade >= 50;
  }
  getStatus() {
    return this.isPassed() ? "Pass" : "Fail";
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter student name: ", (name) => {
  rl.question("Enter student age: ", (age) => {
    rl.question("Enter student grade (0-100): ", (grade) => {
    
      const student = new Student(name, parseInt(age), parseFloat(grade));

      student.displayInfo();
      console.log(`Status: ${student.getStatus()}`);

      rl.close();
    });
  });
});

const readline = require("readline");

// Task 8: Create a Student class with fields, constructor and methods

// Student class definition
class Student {
  // Constructor to initialize student fields
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method to display student details
  displayInfo() {
    console.log("\n--- Student Details ---");
    console.log(`Name  : ${this.name}`);
    console.log(`Age   : ${this.age}`);
    console.log(`Grade : ${this.grade}`);
  }

  // Method to check if student passed (grade >= 50)
  isPassed() {
    return this.grade >= 50;
  }

  // Method to get student status
  getStatus() {
    return this.isPassed() ? "Pass" : "Fail";
  }
}

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Collect input step by step
rl.question("Enter student name: ", (name) => {
  rl.question("Enter student age: ", (age) => {
    rl.question("Enter student grade (0-100): ", (grade) => {
      // Create a new Student object with user input
      const student = new Student(name, parseInt(age), parseFloat(grade));

      // Display student information
      student.displayInfo();

      // Display pass/fail status
      console.log(`Status: ${student.getStatus()}`);

      rl.close();
    });
  });
});

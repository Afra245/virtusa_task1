# Internship Coding Tasks

A collection of beginner-friendly console programs in Java, TypeScript, and JavaScript.

---

## 📁 Project Structure

```
Internship_Coding_Tasks/
├── java/
│   ├── LargestSmallest.java    # Task 1
│   ├── SumOfDigits.java        # Task 2
│   └── RemoveDuplicates.java   # Task 3
├── typescript/
│   ├── palindrome.ts           # Task 4
│   ├── wordFrequency.ts        # Task 5
│   ├── factorial.ts            # Task 6
│   ├── tsconfig.json
│   └── package.json
├── javascript/
│   ├── clock.js                # Task 7
│   ├── student.js              # Task 8
│   └── uniqueValues.js         # Task 9
├── README.md
└── .gitignore
```

---

## ✅ Prerequisites

Make sure the following are installed on your system:

| Tool | Download Link |
|------|--------------|
| Java JDK 11+ | https://adoptium.net/ |
| Node.js 18+ | https://nodejs.org/ |

To verify installations, run:
```bash
java -version
node -v
npm -v
```

---

## ☕ JAVA Tasks

> Navigate to the `java/` folder first:
> ```bash
> cd java
> ```

### Task 1 – Largest and Smallest Element in an Array
```bash
javac LargestSmallest.java
java LargestSmallest
```
**Sample Input:**
```
Enter the number of elements: 5
Enter 5 integers:
10 3 56 7 23
```
**Sample Output:**
```
Largest element: 56
Smallest element: 3
```

---

### Task 2 – Sum of Digits Using Recursion
```bash
javac SumOfDigits.java
java SumOfDigits
```
**Sample Input:**
```
Enter a positive integer: 1234
```
**Sample Output:**
```
Sum of digits of 1234 = 10
```

---

### Task 3 – Remove Duplicate Elements Using Set
```bash
javac RemoveDuplicates.java
java RemoveDuplicates
```
**Sample Input:**
```
Enter the number of elements: 6
Enter 6 integers (duplicates allowed):
1 2 3 2 4 1
```
**Sample Output:**
```
Array after removing duplicates: [1, 2, 3, 4]
```

---

## 🔷 TYPESCRIPT Tasks

> Navigate to the `typescript/` folder and install dependencies first:
> ```bash
> cd typescript
> npm install
> ```

### Task 4 – Palindrome Check
```bash
npx ts-node palindrome.ts
```
**Sample Input:**
```
Enter a string to check for palindrome: racecar
```
**Sample Output:**
```
"racecar" is a Palindrome.
```

---

### Task 5 – Word Frequency Counter
```bash
npx ts-node wordFrequency.ts
```
**Sample Input:**
```
Enter a paragraph: the cat sat on the mat the cat
```
**Sample Output:**
```
Word Frequency:
  "the": 3
  "cat": 2
  "sat": 1
  "on": 1
  "mat": 1
```

---

### Task 6 – Factorial Using Recursion
```bash
npx ts-node factorial.ts
```
**Sample Input:**
```
Enter a non-negative integer to find its factorial: 5
```
**Sample Output:**
```
Factorial of 5 = 120
```

---

## 🟨 JAVASCRIPT Tasks

> Navigate to the `javascript/` folder first:
> ```bash
> cd javascript
> ```

### Task 7 – Digital Clock (HH:MM:SS)
```bash
node clock.js
```
**Output:** (updates every second, press `Ctrl+C` to stop)
```
Current Time: 10:45:32
```

---

### Task 8 – Student Class
```bash
node student.js
```
**Sample Input:**
```
Enter student name: Alice
Enter student age: 20
Enter student grade (0-100): 85
```
**Sample Output:**
```
--- Student Details ---
Name  : Alice
Age   : 20
Grade : 85
Status: Pass
```

---

### Task 9 – Unique Values Using Set
```bash
node uniqueValues.js
```
**Sample Input:**
```
Enter numbers separated by commas (e.g. 1,2,3,2,4,1): 5,3,8,3,5,1
```
**Sample Output:**
```
Original array: [5, 3, 8, 3, 5, 1]
Array with unique values: [5, 3, 8, 1]
Removed 2 duplicate(s).
```

---

## 💡 Quick Tips

- **Java:** Always compile (`.java` → `.class`) before running with `java`.
- **TypeScript:** `npx ts-node` compiles and runs `.ts` files in one step without creating extra files.
- **JavaScript:** Use `node` directly — no compilation needed.
- Open the entire `Internship_Coding_Tasks/` folder in VS Code for the best experience.

---

*Happy Coding! 🚀*

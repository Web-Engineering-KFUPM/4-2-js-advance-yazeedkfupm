/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================

const student = {
  firstName: "yazed",
  lastName: "Almutairi",
  gpaValue: 3.6, 

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Getter for GPA
  get gpa() {
    return this.gpaValue;
  },

  // Setter for GPA with validation
  set gpa(value) {
    if (value >= 0.0 && value <= 4.0) {
      this.gpaValue = value;
    } else {
      console.log("Invalid GPA Must be between 0.0 and 4.0");
    }
  }
};

// Testing
console.log("Full Name:", student.fullName);
console.log("Current GPA:", student.gpa);

student.gpa = 3.9;   // valid update
console.log("Updated GPA:", student.gpa);

student.gpa = 4.5;   // invalid update
console.log("After invalid update, GPA:", student.gpa);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================

const courses = {
  "ICS104": "Introduction to Python",
  "SWE363": "Web development",
  "ICS321": "Database Management",
  "COE292": "Artificial Intelligence"
};

// Iterate using for in loop
for (let code in courses) {
  console.log(`Course Code: ${code}, Title: ${courses[code]}`);
}
// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================

let message = "Hello!";


console.log("Length of string:", message.length);


console.log("First character:", message.charAt(0));       // H
console.log("Fifth character:", message.charAt(5));       // o
console.log("Last character:", message.charAt(message.length - 1)); 

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================

let now = new Date();

console.log("Day of Month:", now.getDate());
console.log("Month (0-11):", now.getMonth());
console.log("Year:", now.getFullYear());


// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================

let numbers = [34, 67, 12, 89, 23, 56, 99, 45, 3, 78];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Numbers:", numbers);
console.log("Minimum:", min);
console.log("Maximum:", max);


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================

function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array must not be empty!");
  }
  return Math.max(...arr);
}

try {
  let result = findMax([]); //empty array
  console.log("Max value:", result);
} catch (e) {
  console.log("Error:", e.message);
} finally {
  console.log("block executed (cleanup or finishing step).");
}


// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================

const words = ["cat", "rabbit", "dragon", "caterpillar"];
const pattern = /cat/; 

console.log("Words containing 'cat':");

words.forEach(word => {
  if (pattern.test(word)) {
    console.log(`${word} matches!`);
  }
});


// End of Advance JavaScript Lab — good luck!

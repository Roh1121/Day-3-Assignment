const fs = require('fs');

// Step 1: Write to the file
fs.writeFileSync('message.txt', 'Learning Node.js');

// Step 2: Read from the file
const data = fs.readFileSync('message.txt', 'utf-8');

// Step 3: Print the content
console.log(data);
